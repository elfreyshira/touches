import _ from 'lodash';

export default function getTilesOnMapQuantity (gameLevel, config) {
  return Math.round(4 + gameLevel / 2);
};
