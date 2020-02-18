import EmployeeDetailsReducer from './EmployeeDetailsReducer';
import UserAuthreducer from './UserAuthreducer';
import LoaderReducer from './LoaderReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  USERAUTH: UserAuthreducer,
  EMPDET: EmployeeDetailsReducer,
  LOADER: LoaderReducer,
});
