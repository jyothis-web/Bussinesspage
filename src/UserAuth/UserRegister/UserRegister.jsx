import React, { useContext, useState } from "react";
import GoogleButton from "react-google-button";
//  import { signInWithPopup } from "firebase/auth";
//  import { auth, provider } from "../../Firebase";
//  import UserHomepage from "../../Pages/Homepage/UserHomepage";
import { Alert, Button, Card } from "@mui/material";
import "../UserRegister/UserRegister.css";
import { UserAuthContext } from "../../Context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";

const UserRegister = () => {

  const {signupUser,googleSignIn } = useContext(UserAuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signupUser(email, password);
      navigate("/UserLogin");
    } catch (error) {
      switch (error.code) {
        case "auth/weak-password":
          setError(
            "The password is too weak. Please choose a stronger password."
          );
          break;
        case "auth/email-already-in-use":
          setError("The email address is already in use by another account.");
          break;
        // Handle other error codes as needed
        default:
          setError("An error occurred while signing up. Please try again.");
          break;
      }
    }
  };
  const HandleGoogleSignIn = async()=>{
    try {
      await googleSignIn(email, password);
      navigate("/UserHomepage");
    } catch (error) {
     console.log(error.message);
    }
  }

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}>
      <form onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Card
          className="signup-card"
          sx={{
            width: "350px",
            padding: "15px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <h2>Signup Page</h2>

          <input
          //type={option ? "email" : "tel"}
          type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bluebtn">
            Sign up
          </button>
     
          {/* {value ? (
            <UserHomepage />
          ) : ( */}
          <GoogleButton  onClick={HandleGoogleSignIn}></GoogleButton>
          {/* )} */}

          <div>
            {" "}
            Already have an account{" "}
            <Link to="/UserLogin">
              <Button sx={{ textTransform: "none" }}>log in</Button>
            </Link>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default UserRegister;
