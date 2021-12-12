export const loginReducer=(state={username:"NA",token:"NA",usertype:"NA",message:""},action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            console.log(action.data)
            return {...action.data,message:""};
        case "LOGIN_FAILURE":
            console.log(action)
            return {...state,message:"Login Credentials incorrect"}
        default:
            return state
    }
}

export const employeeData = (state={employee:'NA'},action)=>{
    switch(action.type) {
        case "EMPLOYEE_ACTION":
            console.log(action.data.employee)
            return {employee:action.data.employee}
        default:
            return state;
    }
}