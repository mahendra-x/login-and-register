import React, { useState } from "react";
import "./homepage.css";
import Tbody from "../Tbody/Tbody";
import axios from "axios";

const Homepage = ({ setLoginUser, user }) => {
  console.log(user);

  const [data, setData] = useState([]);
  const [a, setA] = useState(false);

  const getAllUser = () => {
    
    setA(true);
    axios
      .get("http://localhost:9002/all-user")
      .then((result) => setData(result.data))
      .catch((err) => console.log(err));
    // console.log(res);
  };

  console.log("Data=>", data);

  return (
    <div className="homepage">
      <h1>Student details</h1>
      <div className="col-lg-12 col-md-4 col-sm-4 container justify-content-center mt-5">
        <table className="table table-striped table-hover border-1">
          {a == false ? null : (
            <thead>
              <th>Student id</th>
              <th>Student Name</th>
              <th>Student Email</th>
              <th>Operation</th>
            </thead>
          )}

          <tbody>
          {data.map((detailsData) => (
              <Tbody
                key={detailsData.id}
                id={detailsData._id}
                name={detailsData.name}
                email={detailsData.email}
                getAllUser={getAllUser}
              />
            ))}
        
         
          </tbody>
        </table>
      </div>
      <div className="button" onClick={() => getAllUser()}>
        All users
      </div>
      <div className="button" onClick={() => setLoginUser({})}>
        Logout
      </div>
    </div>
  );
};

export default Homepage;
