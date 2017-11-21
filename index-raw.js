// "Raw" option provides an as-is script for importing components without using a build process.

var componentPath = './bag-of-tricks/components-raw/';
var components = [
  'footer'
];

function renderComponents(components) {
  if (!window.$) {
    console.log('Couldn\'t load components:', 'Including components requires JQuery.');
    return;
  }

  components.forEach(function(name) {
    $('[data-component="' + name + '"]').load(componentPath + name + '/index.html');
  });
}

renderComponents(components);
