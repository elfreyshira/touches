import _ from 'lodash';
import getAttackDamage from './config/getAttackDamage';
import getAttackTileQuantity from './config/getAttackTileQuantity';
import getAttackTileTime from './config/getAttackTileTime';
import getTilesOnMapQuantity from './config/getTilesOnMapQuantity';
import getTimeLength from './config/getTimeLength';

function isNewTileColliding (tileList, chosenTileLocation, chosenTimeStart, chosenTimeEnd) {
  return _.some(tileList, (tileObj) => {
    // [1] collision exists if the tile location is the same AND if:
    // - [2] the new start time is between a previous start/end time
    // - [3] OR the new end time is between a previous start/end time
    // - [4] OR or the new start/end time encapsulates a previous start/end time
    return (
      tileObj.tileLocation === chosenTileLocation
      && (
        (tileObj.timeStart <= chosenTimeStart && chosenTimeStart <= tileObj.timeEnd)
        || (tileObj.timeStart <= chosenTimeEnd && chosenTimeEnd <= tileObj.timeEnd)
        || (chosenTimeStart <= tileObj.timeStart && chosenTimeEnd >= tileObj.timeEnd)
      )
    );
  });
}

function getTileFate (tileList, attackDamage, attackTileTime, tilesOnMapQuantity, timeLength) {
  const chosenTileLocation = _.random(0, tilesOnMapQuantity - 1); // choose random integer
  const chosenTimeStart = _.random(0, timeLength - attackTileTime); // choose random integer
  const chosenTimeEnd = chosenTimeStart + attackTileTime;

  if (isNewTileColliding(tileList, chosenTileLocation, chosenTimeStart, chosenTimeEnd)) {
    return getTileFate.apply(null, _.toArray(arguments));
  }
  else {
    return {
      type: 'ATTACK',
      tileLocation: chosenTileLocation,
      timeStart: chosenTimeStart,
      timeEnd: chosenTimeEnd,
      effectQuantity: attackDamage
    };
  }
}

/**
 * @return {Array}
 *  [
 *    {
 *      type: 'ATTACK',
 *      tileLocation: 4,
 *      timeStart: 45,
 *      timeEnd: 1562,
 *      effectQuantity: 10, // damage
 *    },
 *    {
 *      type: 'ATTACK',
 *      tileLocation: 0,
 *      timeStart: 5000,
 *      timeEnd: 6700,
 *      effectQuantity: 10, // damage
 *    },
 *    ...
 *  ]
 */
export default function getTileList(gameLevel, config) {
  const attackDamage = getAttackDamage(gameLevel, config);
  const attackTileQuantity = getAttackTileQuantity(gameLevel, config);
  const attackTileTime = getAttackTileTime(gameLevel, config);
  const tilesOnMapQuantity = getTilesOnMapQuantity(gameLevel, config);
  const timeLength = getTimeLength(gameLevel, config);

  const tileList = [];
  _.times(attackTileQuantity, (idx) => {
    const newTileObj = getTileFate(tileList, attackDamage, attackTileTime, tilesOnMapQuantity, timeLength);
    tileList.push(newTileObj);
  });
  return tileList;
}
