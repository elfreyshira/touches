/**
 * @return {Number} milliseconds
 */
export function getValue (gameLevel, stats) {
  return  Math.max(500, 1500 - gameLevel * 50 + stats.attackTileTime * 50);
};

export function getCost (stats) {
  return 10;
};
 
