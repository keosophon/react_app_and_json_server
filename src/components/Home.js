import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => setUsers(response.data))
      .catch((error) => {
        console.error("There was an error fetching the users' data", error);
      });
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete: " + id);
    if (confirm) {
      axios.delete("http://localhost:8000/users/" + id).then((result) => {
        alert("Successfully deleted: " + id);
        window.location.reload();
      });
    }
  };

  return (
    <div className="container mt-3">
      <h2>Users List</h2>
      <Link className="btn btn-success m-3" to="/create">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link className="btn btn-primary" to={`/update/${user.id}`}>
                  Update
                </Link>
                <button
                  className="btn btn-danger ml-3wqre"
                  onClick={(e) => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
