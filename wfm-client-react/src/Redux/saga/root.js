import {takeEvery} from 'redux-saga/effects'
import { loginHandler,employeeHandler } from './handlers'


export function* rootSaga(){
    yield takeEvery("LOGIN_ACTION",loginHandler)
    yield takeEvery("EMPLOYEE_DETAILS",employeeHandler)
}