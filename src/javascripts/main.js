import 'bootstrap';
import '../styles/main.scss';
// import arrayMethods from './arrayMethods';
import cardList from './components/cardList/cardList';

const init = () => {
  // arrayMethods.init();
  cardList.cardListBuilder();
};

init();
