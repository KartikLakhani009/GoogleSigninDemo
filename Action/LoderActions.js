import {SET_LOADER} from '../Action/Type';

export const TurnOnLoader = payload => {
  return {
    type: SET_LOADER,
    payload,
  };
};
