(function () {
  var mapEl = document.getElementById('leafletMap');
  if (!mapEl || typeof L === 'undefined') return;

  var branches = [
    { id: 'thonglor', name: 'HUMF Thonglor', lat: 13.7300, lng: 100.5808, pct: 24 },
    { id: 'ari', name: 'HUMF Ari', lat: 13.7799, lng: 100.5461, pct: 58 },
    { id: 'siam', name: 'HUMF Siam', lat: 13.7466, lng: 100.5347, pct: 96 },
    { id: 'onnut', name: 'HUMF On Nut', lat: 13.7050, lng: 100.6013, pct: 31 }
  ];

  var bangkokCenter = [13.7563, 100.5018];
  var map = L.map(mapEl, { scrollWheelZoom: false }).setView(bangkokCenter, 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  function pinIcon(color, size) {
    size = size || 16;
    return L.divIcon({
      className: '',
      html: '<div style="width:' + size + 'px;height:' + size + 'px;border-radius:50%;background:' + color + ';border:3px solid #FFFFFF;box-shadow:0 2px 8px rgba(0,0,0,0.3);"></div>',
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2]
    });
  }

  branches.forEach(function (b) {
    L.marker([b.lat, b.lng], { icon: pinIcon('#FF0091') })
      .addTo(map)
      .bindPopup('<strong>' + b.name + '</strong><br>' + b.pct + '% capacity');
  });

  var userMarker = null;

  function haversineKm(lat1, lng1, lat2, lng2) {
    var R = 6371;
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLng = (lng2 - lng1) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function updateDistances(userLat, userLng) {
    branches.forEach(function (b) {
      var el = document.querySelector('[data-distance="' + b.id + '"]');
      if (!el) return;
      el.textContent = haversineKm(userLat, userLng, b.lat, b.lng).toFixed(1) + ' km';
    });
  }

  function requestLocation() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      function (pos) {
        var lat = pos.coords.latitude;
        var lng = pos.coords.longitude;
        if (userMarker) map.removeLayer(userMarker);
        userMarker = L.marker([lat, lng], { icon: pinIcon('#111111', 18) })
          .addTo(map)
          .bindPopup('You are here')
          .openPopup();
        map.setView([lat, lng], 13);
        updateDistances(lat, lng);
      },
      function () {
        // Permission denied or unavailable — keep the default Bangkok view.
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  }

  var locateBtn = document.getElementById('locateBtn');
  if (locateBtn) locateBtn.addEventListener('click', requestLocation);

  // Ask for location on first entry, per the "first thing that happens" request.
  requestLocation();
})();
