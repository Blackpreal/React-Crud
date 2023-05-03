import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  const history = useNavigate();
  
  const [users, setUser] = useState({
    name: "",
    mobileNumber: "",
    mailID: "",
    password: "",
  });

  const onInputChange = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventdefaulter();
    await axios.put(`http://localhost/React-Crud/update.php?id=${id}`, users)
    history("/");
  }
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get(
      `http://localhost/React-Crud/getDetails.php?id=${id}`
    );
    setUser(result.data[0]);
    console.log(result.data[0]);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <div className="text-center">
                  <h1>Edit User</h1>
                </div>
                <form >
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="form-label">Name</label>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="text"
                        placeholder="Enter Full Name"
                        value={users.name}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label">Mobile Number</label>
                      <input
                        name="mobileNumber"
                        type="tel"
                        className="form-control"
                        id="tel"
                        placeholder="Enter Mobile Number"
                        value={users.mobileNumber}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label">Email</label>
                      <input
                        name="emailID"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter Email ID"
                        value={users.mailID}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label">Password</label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Password"
                        value={users.password}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mt-3 text-center">
                      <button className="btn adduser" onSubmit={(e) => onSubmit(e)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Update User
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
    </div>
  );
}

export default EditUser;
