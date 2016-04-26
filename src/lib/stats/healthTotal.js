export function getValue (gameLevel, stats) {
  return 1000 + stats.healthTotal * 10;
};

export function getCost (stats) {
  return 10;
};
 
