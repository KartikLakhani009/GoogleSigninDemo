import {SET_LOADER} from '../Action/Type';

export default (state = false, action) => {
  switch (action.type) {
    case SET_LOADER:
      state = Boolean(action.payload);
      return state;

    default:
      return state;
  }
};
