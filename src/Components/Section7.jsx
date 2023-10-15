import { Box, Typography, styled, Button } from "@mui/material";
import React from "react";

const Section7 = () => {
  const Bluebtn = styled(Button)({
    backgroundColor: "#3E64FF",
    textTransform: "none",
    borderRadius: "8px",
    padding: "10px 25px",
    fontWeight: "bold",
    color: "white",
    fontSize: "16px",
    "&:hover": { backgroundColor: "blue" },
  });

  return (
    <Box
   
      display={"flex"}
      flexDirection={{xs:"column",sm:"row"}}
      alignItems={"center"}
      sx={{ backgroundColor: "#F3F7FE" }}
    >
      <Box
        width={"fit-content"}
        maxWidth={{xs:"100%",sm:"55%"}}
        display={"flex"}
        justifyContent={"center"}
        gap={3}
      >
        <Box width={"35%"} marginTop={"12%"} zIndex={6} mar>
          <img
            src="../Images/l1.webp"
            alt=""
            width={"100%"}
            style={{ borderRadius: "12px", marginBottom: ".4cm" }}
          />
          <img
            src="../Images/l3.webp"
            alt=""
            width={"100%"}
            style={{ borderRadius: "12px", marginBottom: ".4cm" }}
          />
        </Box>
        <Box width={"35%"} zIndex={2}>
          <img
            src="../Images/l2.webp"
            alt=""
            width={"100%"}
            style={{ borderRadius: "12px", marginBottom: ".4cm" }}
          />
          <img
            src="../Images/l4.webp"
            alt=""
            width={"100%"}
            style={{ borderRadius: "12px", marginBottom: ".4cm" }}
          />
          <img
            src="../Images/l5.webp"
            alt=""
            width={"100%"}
            style={{ borderRadius: "12px", marginBottom: ".4cm" }}
          />
        </Box>
      </Box>
      <Box margin={{xs:"1cm .5cm",sm:"0 0"}} >
        {" "}
        <Typography
          maxWidth={"550px"}
         
          marginBottom={2}
          variant="h3"
          fontSize={{ xs: "32px", md: "45px", sm: "38px", lg: "60px" }}
          fontWeight={"bolder"}
        >
          Your Business Potential with Our Proven Strategies
        </Typography>
        <Typography
          maxWidth={"550px"}
          marginBottom={2}
          variant="body1"
          fontSize={{ lg: "18px", md: "14px", sm: "12px", xs: "12px" }}
        >
          Contact us today to schedule a consultation and start your journey
          towards success.
        </Typography>
        <Bluebtn>Join Us</Bluebtn>
      </Box>
    </Box>
  );
};

export default Section7;
