import Header from './components/header';
import Footer from './components/footer';

const dateString = new Date().toUTCString().split(' ').slice(0, 4).join(' ');

const header = Header({ title: 'Hello! This is a header' });
const footer = Footer({
  date: dateString,
  name: 'Joshua Hatcher'
});

export default {
  header,
  footer
}
