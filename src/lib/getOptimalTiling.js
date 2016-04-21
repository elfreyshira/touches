import _ from 'lodash';
import getTilePermutations from './getTilePermutations';

/**
 * @param containerWidth {Number}
 * @param containerHeight {Number}
 * @param numberOfTiles {Integer}
 * @param? options.margin {Number}
 * @return {tilePerRow, tilePerColumn, tileWidth, tileHeight}
 */
 export default function getOptimalTiling (containerWidth, containerHeight, numberOfTiles, options = {margin: 0}) {
  return _.chain(getTilePermutations(numberOfTiles))
    .map(([tilePerRow, tilePerColumn]) => {
      const containerWidthWithMargin = containerWidth - (tilePerRow - 1) * options.margin;
      const containerHeightWithMargin = containerHeight - (tilePerColumn - 1) * options.margin;
      return {
        tilePerRow,
        tilePerColumn,
        tileWidth: containerWidthWithMargin / tilePerRow,
        tileHeight: containerHeightWithMargin / tilePerColumn
      };
    })
    .sortBy(({tileWidth, tileHeight}) => {
      return (tileWidth * tileHeight) / Math.pow(2 * tileWidth + 2 * tileHeight, 2);
    })
    .last() // ratio of largest area to the smallest perimeter (a square is the best ratio)
    .value();
};
