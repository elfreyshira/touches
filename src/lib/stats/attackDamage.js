export function getValue (gameLevel, stats) {
  return 9 + gameLevel - stats.attackDamage;
};

export function getCost (stats) {
  return 10;
};
