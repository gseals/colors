import $ from 'jquery';
import util from '../../helpers/utilities';
import './cardList.scss';

const cardListBuilder = (colors) => {
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

const cardListEvents = () => {
  $('body').on('mouseenter', '.card', (e) => {
    $(e.target).children().removeClass('hide');
  });

  $('body').on('mouseleave', '.card', (e) => {
    $(e.target).children().addClass('hide');
  });

  $('body').on('click', '.card', () => {
    util.printToDom('color-list', '');
    util.printToDom('single-color', 'this is a single item.  maybe we should call another component?');
  });
};

export default { cardListBuilder, cardListEvents };
