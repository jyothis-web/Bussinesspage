//import { Box, Stack } from "@mui/material";
import "./App.css";
//import Banner from "./Components/Banner";
//import Logoside from "./Components/Logoside";
//import Middleside from "./Components/Middleside";
//import Customnavbar from './Components/Customnavbar';
// import Footer from "./Components/Footer";
// import Section1 from "./Components/Section1";
// import Section2 from "./Components/Section2";
// import Section3 from "./Components/Section3";
// import Section4 from "./Components/Section4";
// import Section5 from "./Components/Section5";
// import Section6 from "./Components/Section6";
// import Section7 from "./Components/Section7";

//import Hello from'./Components/Hello';
//import Profile from './Components/Profile';
//import Rightside from "./Components/Rightside";
//import Navbar from'./Components/Navbar';
import { Route, Routes } from "react-router-dom";
import Blog from "./Components/Blog";

import Home from "./Pages/Homepage/Home";
import UserRegister from "./UserAuth/UserRegister/UserRegister";
import UserLogin from "./UserAuth/UserLogin/UserLogin";
import UserHomepage from "./Pages/Homepage/UserHomepage";
import PasswordResetPage from "./UserAuth/PasswordReset/PasswordResetPage";
import UserProfile from "./Pages/UserProfile/UserProfile";

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
        
      </Routes>
    </div>
  );
}

export default App;
