import React,{useState,useEffect} from "react";
import {Table, Button, Modal, OverlayTrigger, Tooltip} from "react-bootstrap";
import TextAreaBox from "./TextAreaBox";
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';

const username =  localStorage.getItem("username")

const ManagerHome=()=>{

  const [show,setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [emp,setEmp]=useState<any>([{}]);
  const getEmployee = async ()=>{
      const response = await axios.post(`http://localhost:8000/employee/employeeDetails/${username}`)
      console.log(response,'result');
      if(response.statusText === 'OK'){
          setEmp(response.data)
      }else{
          console.log('Error')
      }
  }

  useEffect(()=>{
      getEmployee()
  },[])

  return (
    <>
    <div>
        <h1>Manager</h1>
    </div>
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Employee_ID</th>
                <th>Name</th>
                <th>Skills</th>
                <th>Manager</th>
                <th>Experience</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {emp.map((emp:any)=>(
                <tr key={emp.employee_id}>
                    <td>{emp.employee_id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.skills}</td>
                    <td>{emp.manager}</td>
                    <td>{emp.experience}</td>
                    <OverlayTrigger
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                {emp.employee_id}
                            </Tooltip>
                        }>
                    <Button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal">
                        <LockIcon />
                            SoftLock
                    </Button>
                    </OverlayTrigger>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Edit Employee
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <TextAreaBox emp={emp} id={emp.employee_id}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close Button
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </tr>
            ))}
        </tbody>
    </Table>
    </>
  )
}

export default ManagerHome