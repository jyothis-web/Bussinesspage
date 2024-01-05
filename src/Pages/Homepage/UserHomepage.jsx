import Banner   from  "../../Components/Banner";
import Section1 from "../../Components/Section1";
import Section2 from "../../Components/Section2";
import Section3 from "../../Components/Section3";
import Section4 from "../../Components/Section4";
import Section5 from "../../Components/Section5";
import Section6 from "../../Components/Section6";
import Section7 from "../../Components/Section7";
import Footer from "../../Components/Footer";
import UserNavbar from '../UserLogin/UserNavbar';



const UserHomepage = () => {
  

    // const navigate = useNavigate();
    // const logoutclick =()=>{
    //     localStorage.clear();
    //     navigate("/");
     
    // }

    
  return (
    <div>
      <UserNavbar/>
      <Banner/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Footer/>
      {/* <button onClick={logoutclick}>logout</button> */}
    </div>
  )
}

export default UserHomepage
