import {takeEvery} from 'redux-saga/effects'
import { loginHandler,employeeDetails } from './handlers'


export function* rootSaga(){
    yield takeEvery("LOGIN_ACTION",loginHandler)
    yield takeEvery("employee_Details",employeeDetails)
}