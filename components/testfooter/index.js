const footer = {
  name: 'footer',
  render: function() {
    let el;

    if (!window.$) {
      return;
    }

    el = $('#footer');

    if (window.$ && el.length) {
      el.load('./footer.html');
    }
  }
}

export default footer;
