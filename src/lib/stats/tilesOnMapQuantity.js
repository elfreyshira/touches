export function getValue (gameLevel, stats) {
  return Math.round(4 + gameLevel / 2 - stats.tilesOnMapQuantity);
};

export function getCost (stats) {
  return 20;
};
 
