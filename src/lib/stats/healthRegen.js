/**
 * @return {Number} units per half-second
 */
export function getValue (gameLevel, stats) {
  return 10 + stats.healthRegen;
};

export function getCost (stats) {
  return 10;
};
 
