import {combineReducers,applyMiddleware,createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { loginReducer,employeeData } from '../reducers/reducer'
import { rootSaga } from '../saga/root'



const appData = combineReducers({
    loginData: loginReducer,
    EmployeeDetails:employeeData
})

const sagaMiddleware=createSagaMiddleware()
export const store=createStore(appData,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
store.dispatch({type:"EMPLOYEE_DETAILS"})
