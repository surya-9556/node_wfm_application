import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ManagerHome from '../../Managers/Home';

export default connect(
    (data:any)=>{
        console.log(data.EmployeeDetails)
        return {
            employee:data.EmployeeDetails.employee
        }
    },
    (dispatch)=>{
        return bindActionCreators({
            getEmpDetails:()=>{
                return {type: "EMPLOYEE_DETAILS"}
            }
        },dispatch)
    }
)(ManagerHome)