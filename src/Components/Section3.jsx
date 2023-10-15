import React from "react";
import { styled, Button, Box, Typography } from "@mui/material";

const Bluebtn = styled(Button)({
  backgroundColor: "#3E64FF",
  textTransform: "none",
  borderRadius: "8px",
  padding: "10px 25px",
  marginBottom: "2cm",
  fontWeight: "bold",
  color: "white",
  fontSize: "16px",
  "&:hover": { backgroundColor: "blue" },
});

const Section3 = () => {
  return (
    <div name="Bussiness Plans" className="Bussiness Plans">
    <Box sx={{ margin: "50px 0" }}>
      <Box sx={{ position: "relative",}}
     >
        <Box  display={{ xs:"block",sm:"none",md:"none",}} marginLeft={"1cm"}>
        <img
          src="../Images/d1.png"
          alt=""
          style={{
           maxWidth: "80%",
            position: "absolute",
            right: "10%",
            bottom: "-5cm",
          }}
        />

        <img
          src="../Images/d2.png"
          alt=""
          style={{
            maxWidth: "40%",
            position: "absolute",
            right: "10%",
            bottom: "-7cm",
          }}
        />
        </Box>
        <Box  display={{ xs:"none",sm:"block",md:"block",lg:"block",}} 
        width={{sm:"1000px"}}>
        <img
          src="../Images/d1.png"
          alt=""
          style={{
           maxWidth: "40%",
            position: "absolute",
            right: "50%",
            bottom: "4cm",
          }}
        />

        <img
          src="../Images/d2.png"
          alt=""
          style={{
            maxWidth: "20%",
            position: "absolute",
            right: "50%",
            bottom: "1.5cm",
          }}
        />
        </Box>
        <Box
          // marginTop={{ xs: "3cm", sm: "3cm" }}
          marginLeft={{ xs: "5%", sm: "54%" }}
          marginRight={"30PX"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Typography
            variant="h2"
            fontWeight={"bold"}
            maxWidth={"600px"}
            fontSize={{xs:"32px", md: "45px", sm: "38px", lg: "58px" }}
            sx={{paddingTop:"3cm"}}
          >
            Business Plans Become More Targeted
          </Typography>
          <Typography
            variant="h6"
            marginY={{xs:".5cm",sm:"1cm"}}
            textAlign={"justify"}
            fontSize={{ lg: "18px", md: "14px", sm: "12px",xs:"12px" }}
          >
            Our team of experienced business strategists works with you to
            identify opportunities for growth and develop a customized plan to
            help you achieve your goals.
          </Typography>
          <Bluebtn>contact us</Bluebtn>
        </Box>
      </Box>
      {/* <Box  maxWidth={"50%"}>
        <Typography>Business Plans Become More Targeted</Typography>
        <Typography>
          Our team of experienced business strategists works with you to
          identify opportunities for growth and develop a customized plan to
          help you achieve your goals.
        </Typography>
        <Bluebtn>contact us</Bluebtn>
      </Box> */}
    </Box>
    </div>
  );
};

export default Section3;
