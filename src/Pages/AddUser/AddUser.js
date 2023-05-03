import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./AddUser.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function AddUser() {

    //state variable creation
    const [inputdata, setInputData]=useState({
        name:"",
        mobileNumber:"",
        emailID:"",
        password:"",
    });

    //set input value
    const setInputValue =(e)=>{
        const {name,value}= e.target;
        setInputData({...inputdata,[name]:value})
    }
     //console.log(inputdata.name);

     const submitUserData=async(e)=>{
        e.preventDefault();
        const{name,mobileNumber,emailID,password}=inputdata;

        if(name==''){
            toast.error("Name is Required")
        }else if(mobileNumber==''){
            toast.error("Number is Required")
        }else if(emailID==''){
            toast.error("EmailID is Required")
        }else if(password==''){
            toast.error("Password is Required")
        }else{
            await axios.post("http://localhost/React-Crud/addUser.php", inputdata);
            toast.success("Data Inserted Successfully")
        }
     }

      return (
    <div className="addpg">
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <div className="text-center">
                  <h1>Add User</h1>
                </div>
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <label  className="form-label">
                        Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="text"
                        placeholder="Enter Full Name"
                        onChange={setInputValue}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label">
                        Mobile Number
                      </label>
                      <input
                        name="mobileNumber"
                        type="tel"
                        className="form-control"
                        id="tel"
                        placeholder="Enter Mobile Number"
                        onChange={setInputValue}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label">
                        Email
                      </label>
                      <input
                        name="emailID"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter Email ID"
                        onChange={setInputValue}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label">
                        Password
                      </label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Password"
                        onChange={setInputValue}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mt-3 text-center">
                      <button type="button" className="btn adduser" onClick={submitUserData}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Add User
                      </button>
                      <a href="/" className="btn btn-outline-dark ms-2">
                        Back
                      </a>
                    </div>
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default AddUser;
