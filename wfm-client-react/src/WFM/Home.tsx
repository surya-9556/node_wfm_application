import React,{useState,useEffect} from "react";
import {Table, Button, Modal, OverlayTrigger, Tooltip} from "react-bootstrap";
import TextAreaBox from "./TextAreaBox";
import axios from 'axios';

const username =  localStorage.getItem("username")

const WFMHome=()=>{
  const [show,setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [wfm,setWfm]=useState<any>([{}]);
  const getWfmManager = async ()=>{
      const response = await axios.post(`http://localhost:8000/employee/softlock/${username}`)
      console.log(response,'wfm result');
      if(response.statusText === 'OK'){
          setWfm(response.data)
      }else{
          console.log('Error')
      }
  }

  useEffect(()=>{
    getWfmManager()
  },[])

  return (
    <>
    <div>
        <h1>WFM Manager</h1>
    </div>
    <div>
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Employee_ID</th>
                <th>requestee</th>
                <th>request date</th>
                <th>Manager</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {wfm.map((item:any,index:number)=>(
                <tr key={item.lockid}>
                    <td>{item.employee_id}</td>
                    <td>{item.Requestee}</td>
                    <td>{item.reqdate}</td>
                    <td>{item.EmployeeManager}</td>
                    <OverlayTrigger
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                {/* <i className="fas fa-lock"></i> */}
                                SoftLock
                            </Tooltip>
                        }>
                            <Button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal">
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
                            <TextAreaBox wfm = {wfm}/>
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
    </div>
    </>
  )
}

export default WFMHome