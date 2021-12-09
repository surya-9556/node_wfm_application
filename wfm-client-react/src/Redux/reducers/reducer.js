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

export const employeeData = (state=[],action)=>{
    switch(action.type) {
        case "employee_Action":
            console.log(action.data)
            return {...action.data}
        default:
            return state;
    }
}