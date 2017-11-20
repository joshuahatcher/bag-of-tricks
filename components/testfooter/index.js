import $ from 'jquery';

const footer = {
  name: 'footer',
  render: function() {
    const el = $('#footer');

    if (el.length) {
      el.load('./footer.html');
    }
  }
}

export default footer;
