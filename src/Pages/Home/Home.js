import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      "http://localhost/React-Crud/getDetails.php"
    );
    setUser(result.data.reverse());
  };

  const deleteUser = (id) => {
    axios.get("http://localhost/React-Crud/delete.php?id=" + id)
    .then((result) => {
        loadUsers();
    })
    .catch(() => {
        alert("Error in code")   
     });
  }
  return (
    <div>
      <div className="container">
        <div className="py-4">
          <h3 className="mb-3 text-center">User Details</h3>
          <table className="table border shadow">
            <thead className="thead-primary">
              <tr>
                <th scope="col">User Id</th>
                <th scope="col">Name</th>
                <th scope="col">mobileNumber</th>
                <th scope="col">mailID</th>
                <th scope="col">password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((users, index) => (
                <tr>
                  <th scope="row">{users.id}</th>
                  <td>{users.name}</td>
                  <td>{users.mobileNumber}</td>
                  <td>{users.mailID}</td>
                  <td>{users.password}</td>
                  <td>
                    <Link className=" mg-5" to={`/edit/${users.id}`}>
                      <i className="fa fa-edit" aria-hidden="true"></i>
                    </Link>
                    <Link className=" mg-5" onClick={() => deleteUser(users.id)}>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
