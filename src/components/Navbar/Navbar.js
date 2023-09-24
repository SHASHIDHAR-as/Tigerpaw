import React from "react";
import "./Navbar.css";
import companyIcon from "./companyIcon.png"
import profileImg from "./profileimg.jpg"

const Navbar = () => {
  // Function to get the current date in the DD-MM-YYYY format
  const getCurrentDate = () => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <nav className="navbar">
      <div className="left">
      <img src={companyIcon} alt="Company Icon" className="company-icon" />
        <div className="company-info">
          <div className="company-name">TIGERPAW</div>
        </div>
      </div>
      <div className="right">
        <div className="bell-icon">🔔</div>
        <div className="date">{getCurrentDate()}
        <div className="time-date">
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
        </div>
        <div className="profile">
          <img src={profileImg} alt="Profile" />
          <div className="name">Shashidhar</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
