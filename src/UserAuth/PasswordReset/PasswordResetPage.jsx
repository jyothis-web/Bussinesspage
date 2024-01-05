import React, { useContext, useState } from "react";
import { UserAuthContext } from "../../Context/UserAuthContext";
import toast, { Toaster } from "react-hot-toast";
import { Button, Card } from "@mui/material";
import "../PasswordReset/PasswordResetPage.css";
import { useNavigate } from "react-router-dom";

const PasswordResetPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const { passwordResetForUser } = useContext(UserAuthContext);

  const forgotPasswordSubmit = async () => {
    try {
      await passwordResetForUser(email);
      toast.success("email sent successfully", {
        style: {
          padding: "8px",
          color: "black",
          backgroundColor: "lightblue",
        },
        duration: 2000,
      });
      setTimeout(() => {
        navigate("/UserLogin");
      }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div style={{ paddingLeft: "30%", paddingTop: "10%" }}>
      <Toaster />
      <Card
        sx={{
          width: "400px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="resetpage">
          <input
            type="please enter email"
            name="email"
            placeholder="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            sx={{ width: "300px" }}
            variant="contained"
            onClick={forgotPasswordSubmit}
          >
            Log in
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PasswordResetPage;
