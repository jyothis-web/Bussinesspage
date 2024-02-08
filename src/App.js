//import { Box, Stack } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./Components/Blog";
import Home from "./Pages/Homepage/Home";
import UserRegister from "./UserAuth/UserRegister/UserRegister";
import UserLogin from "./UserAuth/UserLogin/UserLogin";
import UserHomepage from "./Pages/Homepage/UserHomepage";
import PasswordResetPage from "./UserAuth/PasswordReset/PasswordResetPage";
import UserProfile from "./Pages/UserProfile/UserProfile";
import UserAppoiment from "./Pages/UserAppoiment/UserAppoiment";
import ContactUs from "./Pages/ContactusPage/ContactUs";
import PasswordNavigatePage from "./UserAuth/PasswordReset/PasswordNavigatePage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UserHomepage" element={<UserHomepage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/UserRegister" element={<UserRegister />} />
        <Route path="/UserRegister" element={<UserRegister />} />
        <Route path="/UserLogin" element={<UserLogin/>} />
        <Route path="/PasswordResetPage" element={<PasswordResetPage/>} />
        <Route path="/UserProfile" element={<UserProfile/>} />
        <Route path="/UserAppoiment" element={<UserAppoiment/>}/>
        <Route path="/PasswordNavigatePage" element={<PasswordNavigatePage/>}/>
        <Route path="/Contactus" element={<ContactUs/>} />
        
      </Routes>
    </div>
  );
}

export default App;
