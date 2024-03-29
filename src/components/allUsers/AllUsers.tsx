import React from "react";
import currentCompany from "./../../assets/CurrentCompany.svg";
import "./allUsers.css";
import User from "../user/User";

function AllUsers() {
  return (
    <div className="user-profiles">
      <div className="container">
        <div className="user-profiles__info">
          <div>
            <img src={currentCompany} alt="Логотип компании"></img>
          </div>
          <div>
            <div className="user-profiles__company">
              <h2 className="user-profiles__company__title">BeHance</h2>
              <h3 className="user-profiles__company__internship">
                Frontend-разаботчик
              </h3>
            </div>
            <div className="user-profiles__all">
              <User></User>
              <User></User>
              <User></User>
              <User></User>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
