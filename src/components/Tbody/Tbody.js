import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Tbody = ({ id, name, email, getAllUser, setA }) => {
  let deleteHandle = (id) => {
    // console.log("ID=>", id)
    axios
      .delete(`http://localhost:9002/delete/${id}`)
      .then(() => getAllUser())
      .catch((err) => console.log(err));
  };

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <div className="d-flex">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteHandle(id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Tbody;
