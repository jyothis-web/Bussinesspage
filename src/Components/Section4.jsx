import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

const Section4 = () => {
  return (
    <div name=" Features" className=" Features">
    <Grid
     
      paddingLeft={"4%"}
      display={"flex"}
      marginTop={{ xs: "10cm", sm: "10px" }}
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent={"space-around"}
      sx={{ backgroundColor: "#f3f7fe",paddingTop:"1cm" }}
    >
      <Box position={"relative"}>
        {" "}
        <Typography
          variant="h3"
          fontWeight={"600"}
          maxWidth={"500px"}
          marginBottom={".6cm"}
          fontSize={{ lg: "60px", md: "45px",sm:"40px",xs:"32px" }}
        >
          Features that you will love
        </Typography>
        <Typography
          variant="body1"
          maxWidth={"400px"}
          marginBottom={".4cm"}
          marginRight={"20px"}
        >
          The most important benefit of a business plan is that it can help you
          to get more investors.
        </Typography>
        <Button variant="text">
          {" "}
          Learn More
          <ArrowForwardIcon />
        </Button>
        <Box position={"absolute"} left={{ xs: "0", sm: "-3cm" }} top={{ xs:"4.6cm",sm:"8cm",md:"8cm"}}>
          <img
            src="../Images/i1.webp"
            alt=""
            style={{
              width: "300px",
            }}
          />
        </Box>
        <Box
          position={"absolute"}
          left={"-3cm"}
          top={"15cm"}
          display={{ xs: "none", sm: "block" }}
        >
          <img
            src="../Images/i2.webp"
            alt=""
            style={{
              width: "220px",
            }}
          />
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        marginTop={{ xs: "380px", sm: "0px" }}
      >
        {" "}
        <Card
          variant="outlined"
          sx={{
            backgroundColor: "#f3f7fe",
            padding: "10px 5px",
            marginBottom: "1cm",
          }}
        >
          <CardContent>
            {" "}
            <Typography
              variant="h5"
              fontWeight={"bold"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"normal"}
              marginBottom={1}
            >
              <img
                src="../Images/bulb.webp"
                alt=""
                style={{ width: "50px", marginRight: ".5cm" }}
              />{" "}
              Making Business Ideas More Planned
            </Typography>
            <Typography variant="body2" paddingLeft={"1.84cm"}>
              Explain various strategies in more detail to achieve company
              goals.
            </Typography>
          </CardContent>
        </Card>{" "}
        <Card
          variant="outlined"
          sx={{
            backgroundColor: "#f3f7fe",
            padding: "10px 5px",
            marginBottom: "1cm",
          }}
        >
          <CardContent>
            {" "}
            <Typography
              variant="h5"
              fontWeight={"bold"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"normal"}
              marginBottom={1}
            >
              <img
                src="../Images/bulb2.webp"
                alt=""
                style={{ width: "50px", marginRight: ".5cm" }}
              />{" "}
              Development Business Plan
            </Typography>
            <Typography variant="body2" paddingLeft={"1.84cm"}>
              A development business plan is a detailed description of the
              business that will be created
            </Typography>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{
            backgroundColor: "#f3f7fe",
            padding: "8px 5px",
            marginBottom: "1cm",
          }}
        >
          <CardContent>
            {" "}
            <Typography
              variant="h5"
              fontWeight={"bold"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"normal"}
              marginBottom={1}
            >
              <img
                src="../Images/bulb3.webp"
                alt=""
                style={{ width: "50px", marginRight: ".5cm" }}
              />{" "}
              Growth Business Plan
            </Typography>
            <Typography variant="body2" paddingLeft={"1.84cm"}>
              A growth business plan is a business plan that explains the
              company’s future business growth plans.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
    </div>
  );
};

export default Section4;
