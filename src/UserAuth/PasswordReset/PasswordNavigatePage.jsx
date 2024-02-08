import React from "react";
import { Link } from "react-router-dom";

const PasswordNavigatePage = () => {
  return (
    <div>
      <h4>
        Please open the link in email and click 
        <Link to="/UserLogin">
          <button
            className="btn"
            style={{ fontWeight: "bold", color: "blue" }}
          >
            Login
          </button>
        </Link>{" "}
        again
      </h4>
    </div>
  );
};

export default PasswordNavigatePage;
