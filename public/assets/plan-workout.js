(function () {
  var grid = document.getElementById('slotGrid');
  var confirmBtn = document.getElementById('confirmBtn');
  var confirmValue = document.getElementById('confirmValue');
  if (!grid || !confirmBtn || !confirmValue) return;

  var selectedHour = null;
  var booked = false;

  function pad(n) { return String(n).padStart(2, '0'); }

  function render() {
    var boxes = grid.querySelectorAll('.slot-box');
    boxes.forEach(function (box) {
      var h = Number(box.dataset.hour);
      var status = box.dataset.status;
      var selected = h === selectedHour;
      var cls = 'slot-box';
      if (selected) cls += ' selected';
      else if (status === 'full') cls += ' full';
      else if (status === 'tight') cls += ' tight';
      box.className = cls;
    });

    var hasSelection = selectedHour !== null;
    if (hasSelection) {
      var endHour = (selectedHour + 1) % 24;
      confirmValue.textContent = pad(selectedHour) + ':00–' + pad(endHour) + ':00';
    } else {
      confirmValue.textContent = 'No slot chosen yet';
    }

    confirmBtn.textContent = booked ? 'Booked ✓' : 'Confirm Booking';
    confirmBtn.style.background = hasSelection ? (booked ? '#16965A' : '#111111') : '#B4B4BC';
    confirmBtn.style.opacity = hasSelection ? '1' : '0.6';
    confirmBtn.style.pointerEvents = hasSelection ? 'auto' : 'none';
  }

  grid.addEventListener('click', function (e) {
    var box = e.target.closest('.slot-box');
    if (!box || box.dataset.status === 'full') return;
    selectedHour = Number(box.dataset.hour);
    booked = false;
    render();
  });

  confirmBtn.addEventListener('click', function () {
    if (selectedHour === null) return;
    booked = true;
    render();
  });

  render();
})();
