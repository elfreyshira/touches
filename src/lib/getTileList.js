import _ from 'lodash';
import {getValue as getAttackDamage} from './stats/attackDamage';
import {getValue as getAttackTileQuantity} from './stats/attackTileQuantity';
import {getValue as getAttackTileTime} from './stats/attackTileTime';
import {getValue as getTilesOnMapQuantity} from './stats/tilesOnMapQuantity';
import {getValue as getTimeLength} from './stats/timeLength';

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
  console.log('getTileFate');
  console.log(arguments);
  const chosenTileLocation = _.random(0, tilesOnMapQuantity - 1); // choose random integer
  const chosenTimeStart = _.random(0, timeLength - attackTileTime); // choose random integer
  const chosenTimeEnd = chosenTimeStart + attackTileTime;

  if (isNewTileColliding(tileList, chosenTileLocation, chosenTimeStart, chosenTimeEnd)) {
    return getTileFate.apply(null, _.toArray(arguments));
  }
  else {
    return {
      tileId: _.uniqueId('tile_id_'), // string
      type: 'ATTACK', // string
      tileLocation: chosenTileLocation, // number, index value of tile layout
      timeStart: chosenTimeStart, // number in ms
      timeEnd: chosenTimeEnd, // number in ms
      effectQuantity: attackDamage // number
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
export default function getTileList(gameLevel, stats) {
  const attackDamage = getAttackDamage(gameLevel, stats);
  const attackTileQuantity = getAttackTileQuantity(gameLevel, stats);
  const attackTileTime = getAttackTileTime(gameLevel, stats);
  const tilesOnMapQuantity = getTilesOnMapQuantity(gameLevel, stats);
  const timeLength = getTimeLength(gameLevel, stats);

  const tileList = [];
  _.times(attackTileQuantity, (idx) => {
    const newTileObj = getTileFate(tileList, attackDamage, attackTileTime, tilesOnMapQuantity, timeLength);
    tileList.push(newTileObj);
  });
  return tileList;
}
