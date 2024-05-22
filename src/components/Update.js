import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const [inputData, setInputData] = useState({
    id: "",
    username: "",
    email: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/${id}`)
      .then((result) => setInputData(result.data))
      .catch((error) => console.log("error" + error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:8000/users/" + inputData.id, inputData)
      .then((results) => {
        alert("Successfully updated the account");
        navigate("/");
      })
      .catch((error) => alert("error", error));
  };
  return (
    <div className="container mt-3">
      <h2>Create an account</h2>
      <div>
        <form id="userForm" onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="id">Id:</label>
            <input
              className="form-control"
              type="number"
              id="id"
              name="id"
              value={inputData.id}
              disabled
            />
          </div>

          <div class="form-group">
            <label for="username">Username:</label>

            <input
              className="form-control"
              type="text"
              id="username"
              name="username"
              required
              value={inputData.username}
              onChange={(e) =>
                setInputData({ ...inputData, username: e.target.value })
              }
            />
          </div>
          <div class="form-group mt-3">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-control"
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
