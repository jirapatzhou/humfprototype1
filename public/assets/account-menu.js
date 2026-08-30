(function () {
  var chip = document.getElementById('accountChip');
  var menu = document.getElementById('accountMenu');
  if (!chip || !menu) return;

  chip.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = menu.style.display === 'block';
    menu.style.display = isOpen ? 'none' : 'block';
  });

  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !chip.contains(e.target)) {
      menu.style.display = 'none';
    }
  });
})();
