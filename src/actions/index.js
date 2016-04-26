import { createAction } from 'redux-actions'

export const tapTile = createAction('TAP_TILE');
export const missTile = createAction('MISS_TILE');

export const showTile = createAction('SHOW_TILE');
export const hideTile = createAction('HIDE_TILE');

export const regenHealth = createAction('REGEN_HEALTH');


export const setupRound = createAction('SETUP_ROUND');
export const startRound = createAction('START_ROUND');
export const endRound = createAction('END_ROUND');

export const levelUp = createAction('LEVEL_UP');

export const upgradeStat = createAction('UPGRADE_STAT');
