import {connect} from 'react-redux';
import {Get_emp, Set_emp, Fetch_Async_Emp, Get_Freq_Emp_data} from '../Action';

mapDispatchToProps = dispatch => ({
  GetEmpDispatch: () => dispatch(Get_emp()),

  GetFreqEmpDispatch: (index, end) => dispatch(Get_Freq_Emp_data(index, end)),

  GetEmpAPIDispatch: () => dispatch(Fetch_Async_Emp()),
  SetEmpDispatch: data => {
    return dispatch(Set_emp(data));
  },
});

mapStateToProps = state => {
  return {
    employee: state.EMPDET,
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
