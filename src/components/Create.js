import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [inputData, setInputData] = useState({ username: "", email: "" });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/users", inputData)
      .then((results) => {
        alert("Successfully created the account");
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
