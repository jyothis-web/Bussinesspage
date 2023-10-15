//import { Box, Stack } from "@mui/material";
import "./App.css";
import Banner from "./Components/Banner";
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
import {Route,Routes, Link } from "react-router-dom";
import Blog from "./Components/Blog";

import Home from "./Components/Home";



function App() {
 
  return (
    <div className="App">
      {/* <Hello name="arun" lastname="ev"/>
      <Hello name="arjun" lastname="ashokan"/> */}
      {/* <Hello/> */}
      {/* <Profile/> */}
      
      {/* <Customnavbar/> */}
      {/* <Rightside /> */}

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Blog" element={<Blog/>}/>
</Routes>

      {/* <Navbar/>
      <Banner/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Footer/>
      <Blog/> */}
      
    </div>
  );
}

export default App;
