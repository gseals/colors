import 'bootstrap';
import '../styles/main.scss';
// import arrayMethods from './arrayMethods';
import cardList from './components/cardList/cardList';
import c from './helpers/data/colors';

const init = () => {
  // arrayMethods.init();
  const colors = c.getColors();
  cardList.cardListEvents();
  cardList.cardListBuilder(colors);
};

init();
