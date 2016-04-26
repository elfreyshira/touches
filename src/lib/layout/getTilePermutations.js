import _ from 'lodash';

function getTilePermutations (numberOfTiles) {
  const tileOptions = [];
  let maxPer = numberOfTiles;
  let previousMaxPer;
  for (let minPer = 1; minPer <= numberOfTiles; minPer++) {
    while (minPer * maxPer >= numberOfTiles) {
      maxPer--;
    }
    maxPer++;
    if (previousMaxPer !== maxPer) {
      tileOptions.push([minPer, maxPer]);
    }
    previousMaxPer = maxPer;
  }
  return tileOptions;
};

export default _.memoize(getTilePermutations);
