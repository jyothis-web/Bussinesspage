import { Box, Grid } from "@mui/material";
//import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "../Components/footer.css";

const Footer = () => {
  const whatsappNumber = "9846706631"; // Replace with your desired WhatsApp number

  const openWhatsAppChat = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="footer" style={{ backgroundColor: "#050a34" }}>
      <Grid
        container
        paddingY={"1cm"}
        //   display={"flex"}
        //   flexDirection={{xs:"column",sm:"row"}}
        paddingLeft={{ sm: ".6cm", md: "0" }}
        // paddingTop={2}
        alignItems={"top"}
        justifyContent={"space-evenly"}
        sx={{ backgroundColor: "#050a34", color: "white" }}
      >
        <Grid
          item
          sm={12}
          md={2}
          xs={12}
          paddingTop={"1cm"}
          paddingLeft={{ xs: "20%", sm: "40%", md: "0" }}
        >
          {" "}
          <img src="../Images/logo2.webp" alt="" width={"110px"} />
          <h5
            style={{
              fontSize: "14px",
              fontWeight: "normal",
              marginY: "25px",
              maxWidth: "200px",
            }}
          >
            Business to achieve goals effectively and efficiently
          </h5>
          <Box
            maxWidth={"150px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            color={"white"}
          >
<button onClick={openWhatsAppChat}>
            <WhatsAppIcon
              sx={{
                fontSize: "20px",
                padding: "5px",
                border: "1px solid",
                borderSpacing: "10px",
                borderRadius: "50%",
              }}
            
            />
         </button>
            <i
              class="fa-brands fa-twitter"
              style={{
                fontSize: "20px",
                padding: "5px",
                border: "1px solid",
                borderSpacing: "10px",
                borderRadius: "50%",
              }}
            ></i>
                         <a
    href="https://www.instagram.com/jyothiswarup__?igsh=MTNiYzNiMzkwZA=="
    target="_blank"
    rel="noopener noreferrer"
  >
            <i
              class="fa-brands fa-instagram"
              style={{
                fontSize: "20px",
                padding: "5px",
                border: "1px solid",
                borderSpacing: "10px",
                borderRadius: "50%",
              }}
            ></i>
            </a>
          </Box>
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
          md={2}
          textAlign={{ sm: "center", md: "left" }}
          paddingLeft={{ xs: "20%", sm: "0" }}
        >
          <h4>Company</h4> <p>About Us</p> <p>Contact Us</p> <p>Pricing</p>{" "}
          <p>Blog</p> <p>Carrier</p>
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
          md={2}
          textAlign={{ sm: "center", md: "left" }}
          paddingLeft={{ xs: "20%", sm: "0" }}
        >
          {" "}
          <h4>Features</h4> <p>Analytics</p> <p>Engagement</p> <p>Builder</p>{" "}
          <p>Publisher</p>{" "}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={2}
          textAlign={{ sm: "center", md: "left" }}
          paddingLeft={{ xs: "20%", sm: "0" }}
        >
          <h4>Legal</h4> <p>Privacy & Policy</p> <p>Terms Of Service</p>{" "}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={2}
          textAlign={{ sm: "center", md: "left" }}
          paddingLeft={{ xs: "20%", sm: "0" }}
        >
          <h4>Help</h4> <p>Payment method</p> <p>Knowledge base</p>{" "}
          <p>Tutorial</p>
        </Grid>
      </Grid>
      <p
        style={{ color: "whitesmoke", textAlign: "center", paddingBottom: "1.5cm" }}
      >
        Copyright: © 2023  project by jyothiswarup. All Rights
        Reserved
      </p>
    </div>
  );
};

export default Footer;
