import { combineReducers } from 'redux';
import headerReducer from './header/headerReducer'

export default combineReducers({
    header: headerReducer,
});
