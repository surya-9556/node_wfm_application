import React,{useState} from 'react';
import {Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const manager = localStorage.getItem("username")

const TextAreaBox = ({emp}:any,{id}:any) =>{

    console.log(emp);
    console.log(id)
    const [message,setMessage] = useState('')
    const [employee_id] = useState(1019)
    const getInputManager = async (e:any)=>{
        e.preventDefault();
        const body = {employee_id,manager,message};
        const response = await axios(`http://localhost:8000/employee/softlocked`,{
            method:"POST",
            headers:{"Content-type":"application/json"},
            data:JSON.stringify(body)
        });
        console.log(response,'response');
        window.location.href = '/'
    }
    return(
        <>
            <Form onSubmit={getInputManager}>
                <Form.Group>
                <h4><b>Please confirm the soft lock that contains 1000 words</b></h4>
                <h5><i>Please enter the message</i></h5>
                </Form.Group>
                <textarea  className="form-control" onChange={e=> setMessage(e.target.value)} id="exampleFormControlTextarea1" />
                <Button className="btn btn-secondary" type='submit'>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default TextAreaBox