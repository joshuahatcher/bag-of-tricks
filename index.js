const componentPath = './bag-of-tricks/components/';
const components = [
  'footer'
];

function renderComponents(components) {
  if (!window.$) {
    return;
  }

  components.forEach(name => {
    $(`#${name}`).load(`${componentPath}${name}.html`);
  });
}

renderComponents(components);

// import Header from './components/header';
// import Footer from './components/footer';

// const dateString = new Date().toUTCString().split(' ').slice(0, 4).join(' ');

// const header = Header({ title: 'Hello! This is a header' });
// const footer = Footer({
//   date: dateString,
//   name: 'Joshua Hatcher'
// });

// export default {
//   header,
//   footer
// }
