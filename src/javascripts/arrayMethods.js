import c from './helpers/data/colors';

const colors = c.getColors();

const forEachFunc = () => {
  for (let i = 0; i < colors.length; i += 1) {
    console.log(`for ${colors[i].name}`);
  }
  colors.forEach((color) => console.log(`forEach ${color.name}`));
};

const filterFunc = () => {
  const newColors = [];
  for (let j = 0; j < colors.length; j += 1) {
    if (colors[j].hexValue.charAt(0) === 'F') {
      newColors.push(colors[j]);
    }
  }
  console.log('for-if', newColors);
  const filterColors = colors.filter((x) => x.hexValue.charAt(0) === 'F');
  console.log('filter', filterColors);
};

const findFunc = () => {
  let colorToFind = {};
  for (let k = 0; k < colors.length; k += 1) {
    if (colors[k].name === 'green') {
      colorToFind = colors[k].hexValue;
    }
  }
  console.log('find', colorToFind);
  const colorFind = colors.find((x) => x.name === 'green');
  console.log('find', colorFind.hexValue);
};

const mapFunc = () => {
  const h1Tags = [];
  for (let l = 0; l < colors.length; l += 1) {
    h1Tags.push(`<h1>${colors[l].name}</h1>`);
  }
  console.log('map', h1Tags);
  const colorMap = colors.map((color) => `<h1>${color.name}</h1>`);
  console.log('map', colorMap);
};

const reduceFunc = () => {
  let total = 0;
  for (let m = 0; m < colors.length; m += 1) {
    total += colors[m].upVotes;
  }
  console.log('reduce', total);
  const upVotesReduce = colors.reduce((prev, curr) => prev + curr.upVotes, 0);
  console.log('reduce', upVotesReduce);
};

const init = () => {
  forEachFunc();
  filterFunc();
  findFunc();
  mapFunc();
  reduceFunc();
};

export default { init };
