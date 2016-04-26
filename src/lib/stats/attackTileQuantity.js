export function getValue (gameLevel, stats) {
  return 6 + gameLevel - stats.attackTileQuantity;
};

export function getCost (stats) {
  return 20;
};
 
