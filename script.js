const toggleSwitch = document.getElementById('toggle-switch');
const themeLink = document.getElementById('theme-link');

toggleSwitch.addEventListener('click', function() {
  if (themeLink.getAttribute('href') == 'style-light.css') {
    themeLink.setAttribute('href', 'style-dark.css');
  } else {
    themeLink.setAttribute('href', 'style-light.css');
  }
});
