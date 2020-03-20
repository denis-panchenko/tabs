window.addEventListener("load", function (event) {
  initTab();
});


function initTab() {
  var tabNav = document.querySelectorAll('.js-tab-toggle');

  for (var i = 0; i < tabNav.length; i++) {
    tabNav[i].addEventListener('click', function () {
      changeActive(this);
      changeTabs();
    })
  }

  function changeActive(currentThis) {
    var active = document.querySelector('.js-tab-toggle.active-link');
    active.classList.remove('active-link');
    currentThis.classList.add('active-link');
  }

  function changeTabs() {
    console.log('changeTabs');
  }
}
