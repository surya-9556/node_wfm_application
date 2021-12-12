import React,{useState} from "react";

import {Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const TextAreaBox = ({wfm}:any,{id}:any) =>{

    console.log(id,"id")
    const lockid = wfm[0]?.lockid;

    const[wfm_id] = useState(wfm[0]?.employee_id);
    const[wfm_name] = useState(wfm[0]?.Requestee);
    const[wfm_manager] = useState(wfm[0]?.EmployeeManager);
    const[wfm_message] = useState(wfm[0]?.requestmessage);
    const[status,setStatus] = useState('');

    const updateMessage = async (e:any) =>{
        e.preventDefault();
        const body = {status};
        const response = await axios(`http://localhost:8000/employee/updateSoftlock/${lockid}`,{
            method:"PUT",
            headers:{"Content-type":"application/json"},
            data:JSON.stringify(body)
        });
        console.log(response)
        window.location.href = '/'
    }

    return(
        <>
            <Form onSubmit={updateMessage}>
                <Form.Group>
                            <Form.Label>Employee Id:-</Form.Label>
                        </Form.Group>
                        <Form.Control plaintext readOnly defaultValue={wfm_id}/>
                <Form.Group>
                            <Form.Label>Requestee:-</Form.Label>
                        </Form.Group>
                        <Form.Control plaintext readOnly defaultValue={wfm_name}/>
                <Form.Group>
                    <Form.Label>Employee Manager:-</Form.Label>
                </Form.Group>
                <Form.Control plaintext readOnly defaultValue={wfm_manager} />
                <Form.Group>
                    <Form.Label>message:-</Form.Label>
                </Form.Group>
                <Form.Control plaintext readOnly defaultValue={wfm_message}/>
                <Form.Group>
                    <Form.Label>Status:-</Form.Label>
                </Form.Group>
                <select aria-label="Default select example" className="form-control" onChange={e=> setStatus(e.target.value)} required>
                    <option></option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                </select>
                <Button variant="secondary" type="submit">Submit</Button>
            </Form>
       </>
    )
}

export default TextAreaBox;