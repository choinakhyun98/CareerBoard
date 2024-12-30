import {legacy_createStore as createStore, combineReducers} from "redux";
import userLogInOut from '../modules/userLogInOut.js'

const rootReducer = combineReducers({
    userLogInOut
});

const store = createStore(rootReducer);

export default store;