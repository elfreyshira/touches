/**
 * @return {Number} milliseconds
 */
export function getValue (gameLevel, stats) {
  return 10000 + stats.timeLength * 500;
};

export function getCost (stats) {
  return 10;
};
 
