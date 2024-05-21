import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/users")
      .then((response) => setUsers(response.data))
      .catch((error) => {
        console.error("There was an error fetching the users' data", error);
      });
  }, []);

  return (
    <div className="container mt-3">
      <h2>Users List</h2>
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
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
