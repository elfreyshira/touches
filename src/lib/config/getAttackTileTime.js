import _ from 'lodash';

/**
 * @return {Number} milliseconds
 */
export default function getAttackTime (gameLevel, config) {
  return  Math.max(500, 1500 - gameLevel * 25);
};
