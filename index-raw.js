// "Raw" option provides an as-is script for importing components without using a build process.

var componentPath = './bag-of-tricks/components/';
var components = [
  'footer'
];

function renderComponents(components) {
  if (!window.$) {
    return;
  }

  components.forEach(function(name) {
    var stylesheet = document.createElement('link');

    stylesheet.rel = 'text/stylesheet';
    stylesheet.href = componentPath + name + '/style.css';
    document.body.appendChild(stylesheet);

    $('#' + name).load(componentPath + name + '/index.html');
  });
}

renderComponents(components);
