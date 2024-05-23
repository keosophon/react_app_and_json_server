import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const [data, setData] = useState({ id: "", username: "", email: "" });
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/users/" + id)
      .then((result) => setData(result.data));
  }, []);

  return (
    <div className="container mt-3">
      <h2>The Account Information:</h2>
      <div className="p-3">
        <p>
          <b>Id:</b> {data.id}
        </p>
        <p>
          <b>Username:</b> {data.username}
        </p>
        <p>
          <b>Email:</b> {data.email}
        </p>
      </div>
      <Link className="btn btn-primary ms-3" to="/">
        Back
      </Link>
    </div>
  );
}

export default Read;
