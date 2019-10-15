import util from '../../helpers/utilities';
import c from '../../helpers/data/colors';
import './cardList.scss';

const cardListBuilder = () => {
  const colors = c.getColors();
  let domString = '';
  colors.forEach((color) => {
    domString += '<div class="col-3">';
    domString += `<div class="card" style="background-color: #${color.hexValue}">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title hide">${color.name}</h5>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('color-list', domString);
};

export default { cardListBuilder };
