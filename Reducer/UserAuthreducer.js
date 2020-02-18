import {ADD_USER, SET_USER, GET_USER} from '../Action/Type';
user = [
  {
    id: '1',
    user_name: 'Demo',
    user_type: 'deafault',
    Token: '',
    Session: '',
    profile_image: '',
  },
];

export default (state = user, action) => {
  switch (action.type) {
    case ADD_USER:
      return;
    case GET_USER:
      return state;

    default:
      return 'problem';
  }
};
