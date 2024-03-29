import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Section2 = () => {
  return (
    <div name="Insights" className="Insights">
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        position={"relative"}
        sx={{marginTop:"3cm"}}
      >
        <Box
          sx={{ position: "relative" }}
          width={{ xs: "300px", sm: "450px", md: "350px", lg: "450px" }}
        >
          <img
            src="../Images/c1.png"
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Box
            width={{ xs: "200px", sm: "280px", md: "240px", lg: "350px" }}
            position="absolute"
            top={{ xs: "200px", sm: "320px", md: "250px", lg: "300px" }}
            left={{ xs: "95px", sm: "120px" }}
          >
            <img
              src="../Images/c4gragh.webp"
              alt=""
              style={{
                maxWidth: "90%",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Box 
           width={{xs:"40%",sm:"50%"}}
            sx={{
              position: "absolute",
              zIndex: "2",
              top: "-90px",
              left: "130px",
            }}
          >
            <img
              src="../Images/c4.png"
              alt=""
              style={{ maxWidth: "100%", height: "auto" }}
            />

            <Box 
              sx={{
              
                position: "absolute",
                zIndex: "1",
                top: "-15px",
                left: "60px",
              }}
            >
              <img
                src="../Images/bulb.jpg"
                alt=""
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Box></Box>
          </Box>
        </Box>
        <Box
       
          marginRight={{ lg: "4.7cm", md: "2.7cm", xs: "20px" }}
          sx={{ marginLeft: "40px", maxWidth: "500px" }}
          flex={1}
        >
          <Typography
            variant="h2"
            marginBottom={3}
            marginTop={2}
            fontSize={{ lg: "60px", md: "45px",sm:"40px",xs:"32px" }}
            lineHeight={1.1}
            maxWidth="450px"
            fontWeight={"bold"}

          >
            Get insight for your business.
          </Typography>
          <Typography
            variant="body1"
            marginBottom={3}
            fontSize={{ lg: "18px", md: "12px",sm:"10px" }}
            textAlign={"justify"}
          >
            You no longer need to worry because you have made a detailed, neat
            and good business plan. This business plan is what you can use to
            attract capital owners to invest their capital in your business.
            Business marketing and sales strategy in detail, income and outcome
            of the business, financial condition, and other information. Whether
            you’re looking to increase revenue, streamline operations, or expand
            into new markets, we have the expertise and resources to help you
            succeed.
          </Typography>
        </Box>
        <Box maxWidth={"fit-content"} sx={{ position: "relative" }}>
          <Box marginBottom={2} width={{ xs: "280px", sm: "400px", md: "230px", lg: "250px" }}>
            <img
              src="../Images/c2.webp"
              alt=""
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <Box
              width={{ xs: "2cm", sm: "2.3cm", md: "2cm", lg: "2.3cm" }}
              height={{ xs: "2cm", md: "2cm", lg: "2.3cm" }}
              position={"absolute"}
              bottom={{ lg: ".1cm", md: "-3.6cm", sm: ".4cm", }}
              left={{ lg: "-4.6cm", md: "0cm", sm: "-4.6cm" }}
              sx={{
                backgroundColor: "#C6E6F7",
              }}
            ></Box>
            <Box
              width={{ xs: "2cm", sm: "2.3cm", md: "2cm", lg: "2.3cm" }}
              height={{ xs: "2cm", sm: "2.3cm", md: "2cm", lg: "2.3cm" }}
              position={"absolute"}
              bottom={{ xs:"-1.5cm", lg: "-2.3cm" }}
              left={{ lg: "-2.3cm", md: "-2cm", sm: "-2.3cm" }}
              sx={{
                backgroundColor: "#3E64FF",
              }}
            >
              <h1 style={{ color: "white", textAlign: "center" }}>
                {" "}
                <ArrowOutwardIcon sx={{ fontSize: "50px" }} />{" "}
              </h1>
            </Box>
          </Box>
        </Box>
      </Box>
   </div>
  );
};

export default Section2;
