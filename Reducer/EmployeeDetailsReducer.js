import {ADD_EMP, GET_EMP, FETCH_API_EMP, Get_Freq_data} from '../Action/Type';
const data = {
  emp: [
    {
      id: '1',
      employee_name: 'Tiger Nixon',
      employee_salary: '320800',
      employee_age: '61',
      profile_image: '',
    },
  ],
  temp: [],
};

export default (state = data, action) => {
  switch (action.type) {
    case ADD_EMP:
      return;
    case GET_EMP:
      return state;

    case FETCH_API_EMP:
      // let d = JSON.parse(action.payload);

      let d = action.payload.data;
      let b = [];

      console.log('Before array of b : ', b);
      // b[0] = 'jhdbcjkndk'
      for (let i = 0; i < 7; i++) {
        b.push(d[i]);
      }

      console.log('after array of b : ', b);

      return {...state, emp: d, temp: b};

    case Get_Freq_data:
      let index = action.index;
      let end = action.end;
      let c = [];
      // let j = 0;

      // let len = state.emp.length;
      console.log('Before array of c : ', c);
      // console.log('state.emp.length :' + state.emp.length);
      // b[0] = 'jhdbcjkndk'
      if (state.temp.length != 0) {
        for (let i = index; i < end; i++) {
          c.push(state.emp[i]);
        }

        console.log('after array of c : ', c);

        return {...state.emp, temp: c};
      }
      //  else {
      //   if (7 >= len - end) {
      //     for (let i = index; i < len; i++) {
      //       c.push(state.emp[i]);
      //     }

      //     console.log('after array of c : ', c);

      //     return {...state.emp, temp: c};
      //   } else {
      //     alert('Invalid range');
      //   }
      // }
      return {...state};
    default:
      return state;
  }
};
