import { combineReducers } from "redux";
import amountReducer from "./amountReducer"
import counterReducer from "./counterReducer"




 const reducers = combineReducers({
    amount: amountReducer,
    value: counterReducer
})

export default reducers