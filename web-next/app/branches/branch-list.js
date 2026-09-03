'use client';

import { useEffect, useRef, useState } from 'react';

function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function loadLeaflet() {
  return new Promise((resolve) => {
    if (window.L) return resolve(window.L);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = () => resolve(window.L);
    document.body.appendChild(script);
  });
}

export default function BranchList({ branches }) {
  const [distances, setDistances] = useState({});
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    let cancelled = false;

    loadLeaflet().then((L) => {
      if (cancelled || !mapRef.current || mapInstance.current) return;
      const map = L.map(mapRef.current).setView([13.7563, 100.5018], 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);
      branches.forEach((b) => {
        L.marker([b.lat, b.lng]).addTo(map).bindPopup(`<strong>${b.name}</strong><br>${b.capacityPct}% capacity`);
      });
      mapInstance.current = map;
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const next = {};
          branches.forEach((b) => {
            next[b.id] = haversineKm(latitude, longitude, b.lat, b.lng);
          });
          setDistances(next);
          if (mapInstance.current) mapInstance.current.setView([latitude, longitude], 13);
        },
        () => {},
        { enableHighAccuracy: true, timeout: 8000 }
      );
    }

    return () => {
      cancelled = true;
    };
  }, [branches]);

  const sorted = [...branches].sort((a, b) => (distances[a.id] ?? 99) - (distances[b.id] ?? 99));

  return (
    <>
      <div ref={mapRef} className="branch-map" />
      <div className="branch-list">
        {sorted.map((b) => (
          <div key={b.id} className="branch-card">
            <div className="branch-name">{b.name}</div>
            <div className="branch-meta">
              {distances[b.id] !== undefined ? `${distances[b.id].toFixed(1)} km` : 'Distance unknown'}
              {' · '}Open until {b.openUntil}
            </div>
            <div className="branch-capacity">{b.capacityPct}% capacity</div>
          </div>
        ))}
      </div>
    </>
  );
}
