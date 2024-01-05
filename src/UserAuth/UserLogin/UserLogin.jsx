import { Button, Card } from "@mui/material";

import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import "../UserLogin/UserLogin.css";
import { useContext, useState } from "react";
import { UserAuthContext } from "../../Context/UserAuthContext";
import toast, { Toaster } from "react-hot-toast";
const UserLogin = () => {
  const navigate = useNavigate();
  const { loginUser, googleSignIn,} =
    useContext(UserAuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUser(email, password);
      navigate("/UserHomepage");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          toast.error("please enter correct email and password.", {
            style: {
              padding: "8px",
              color: "black",
              backgroundColor: "lightblue",
            },
            duration: 3000,
          });
          break;
        default:
          console.log(`Error: ${error.message}`);
          break;
      }
    }
  };
  const HandleGoogleSignIn = async () => {
    try {
      await googleSignIn(email, password);
      navigate("/UserHomepage");
    } catch (error) {
      console.log(error.message);
    }
  };



  return (
    <div style={{paddingLeft:"30%",paddingTop:"3%"}}>
      {" "}
      <Toaster
        containerStyle={{
          position: "absolute",
          top: "0px",
          left: "-60px",
        }}
      />
      <form onSubmit={handleSubmit}>
        <Card
          className="login-card"
          sx={{
            width: "350px",
            padding: "15px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <h2>Login Page</h2>
          <input
            type="email"
            name="email"
            placeholder="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bluebtn" type="submit">
            Log in
          </button>
          <GoogleButton
          
            onClick={HandleGoogleSignIn}
          ></GoogleButton>
          <Link to="/PasswordResetPage">
        {" "}
        <button className="btn">
          {" "}
          forgot password?
        </button>
      </Link>

          <div>
            {" "}
            Already have an account{" "}
            <Link to="/UserRegister">
              <Button sx={{ textTransform: "none" }}>Sign in</Button>
            </Link>
          </div>
        </Card>
      </form>
      
    </div>
  );
};

export default UserLogin;
