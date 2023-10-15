import React, { useState } from "react";
import { Stack, Box, Typography, styled, Paper, Button } from "@mui/material";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Banner = () => {
  const Img1 = styled("div")(({ theme }) => ({
    padding: "20px",
    backgroundColor: "#3E64FF",
    position: "absolute",
    top: "0",
    left: "1cm",
  }));
  const Img2 = styled("div")(({ theme }) => ({
    padding: "20px",
    backgroundColor: "#092676",
    position: "absolute",
    top: "1cm",
    right: "0",
  }));
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

  const [count, setcount] = useState(false);
  return (
    <div name="Home" className="Home">
      <Stack
        display={"flex"}
        flexDirection={{ md: "column", lg: "row" }}
        justifyContent={"space-between"}
        textAlign={{ md: "center", xs: "center", lg: "start" }}
        alignItems={{ md: "center", xs: "center" }}
        sx={{ paddingTop: "120px", backgroundColor: "#f3f7fe" }}
      >
        <Box
          padding={{ md: "0 80px", xs: "0 5px", sm: "0 40px", lg: "0 20px" }}
          sx={{ paddingLeft: "1cm" }}
        >
          <Box sx={{}}>
            <Typography
              position={"absolute"}
              top={{ md: "2cm", sm: "2cm", xs: "1.5cm", lg: "3.2cm" }}
              left={{ md: "40%", xs: "25%", sm: "35%", lg: ".5cm" }}
              variant="body2"
              sx={{
                textTransform: "uppercase",
                color: "#3E64FF",
                fontWeight: "bold",
              }}
            >
              <Box
                position={"relative"}
                top={".6cm"}
                width={"2cm"}
                height={"25px"}
                sx={{ backgroundColor: "#C6E6F7", opacity: ".2" }}
              ></Box>
              Talk bussiness growth
            </Typography>
          </Box>
          <Typography
            variant="h2"
            maxWidth="800px"
            width={"fit-content"}
            fontWeight="bolder"
            fontSize={{ xs: "25px", sm: "50px", md: "65px" }}
          >
            Business to achieve goals effectively and efficiently
          </Typography>
          <Typography
            variant="h5"
            maxWidth="700px"
            fontSize={{ xs: "14px", sm: "20px", md: "20px" }}
            sx={{ margin: ".5cm 0" }}
          >
            A good strategy is a strategy that can successfully lead the
            business in a more developed direction and successfully achieve its
            goals
          </Typography>
          <Box marginLeft={{ md: "100px", lg: "10px" }}>
            <Box display={{ xs: "none", sm: "block" }}>
              <Paper
                elevation={"5"}
                sx={{ padding: ".3cm 0", width: "13.9cm", marginTop: ".5cm" }}
              >
                {" "}
                <Typography variant="body1" sx={{ marginLeft: ".5cm" }}>
                  Register using email address
                  <Bluebtn sx={{ marginLeft: "3.2cm" }}>
                    start free trail
                  </Bluebtn>
                </Typography>
              </Paper>
            </Box>
            <Box
              marginLeft={{ xs: "20px", sm: "40px" }}
              display={{ sm: "none", xs: "block" }}
            >
              <Paper
                elevation={"5"}
                sx={{ padding: ".3cm 0", width: "8cm", marginTop: ".5cm" }}
              >
                {" "}
                <Typography
                  variant="body1"
                  sx={{ marginLeft: ".3cm", marginBottom: ".6cm" }}
                >
                  Register using email address
                </Typography>
                <Bluebtn sx={{ padding: "10px 80px" }}>
                  start free trail
                </Bluebtn>
              </Paper>
            </Box>
            <Stack direction={"row"} spacing={4} marginTop={4}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                textAlign={"start"}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bolder", color: "#3E64FF" }}
                >
                  <ScrollTrigger
                    onEnter={() => setcount(true)}
                    onExit={() => setcount(true)}
                  >
                    {count && <CountUp start={0} end={250} duration={6} />}+
                  </ScrollTrigger>
                </Typography>
                <Typography variant="h6">Happy Clients</Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                textAlign={"start"}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bolder", color: "#3E64FF" }}
                >
                  <ScrollTrigger
                    onEnter={() => setcount(true)}
                    onExit={() => setcount(true)}
                  >
                    {count && <CountUp start={0} end={99} duration={6} />}%
                  </ScrollTrigger>
                </Typography>
                <Typography variant="h6">Client Satisfaction</Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ position: "relative", marginTop: "30px" }}>
          <Box>
            <img
              src="../Images/Business-Hero-Image.jpg"
              alt=""
              style={{
                marginTop: "150px",
                maxWidth: "100%",
                maxHeight: "auto",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "1cm",
              height: "1cm",
              backgroundColor: "#C6E6F7",
              position: "absolute",
              top: "3cm",
              left: "0cm",
            }}
          ></Box>
          <Img1>
            <img src="../Images/banner2.webp" alt="" width={"70px"} />
          </Img1>
          <Box
            sx={{
              width: "1cm",
              height: "1cm",
              backgroundColor: "#C6E6F7",
              position: "absolute",
              top: "0",
              right: "3cm",
            }}
          ></Box>
          <Img2>
            <img src="../Images/bannersmall1.webp" alt="" width={"70px"} />
          </Img2>
        </Box>
      </Stack>
    
       
     
    </div>
  );
};

export default Banner;
