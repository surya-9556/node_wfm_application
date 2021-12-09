import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ManagerHome from '../../Managers/Home';

export default connect(
    (state:any)=>{
        console.log(state.EmployeeDetails.data)
        return {
            employee:state.EmployeeDetails.data
        }
    },
    (dispatch)=>{
        return bindActionCreators({
            getEmpDetails:(employee:any)=>{
                return {type: "employee_Details",data:employee}
            }
        },dispatch)
    }
)(ManagerHome)