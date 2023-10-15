import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import "./hover.css";

const Section6 = () => {
  const Hoverbox = styled(Box)({
    maxWidth: "400px",
    minWidth: "100px",
    width: "fit-content",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    zIndex: "1",
  });
  const Boxposition = styled(Box)({
    zIndex: "2",
    position: "absolute",
    right: "0",
    bottom: "0",
    padding: "6% 3%",
    background: "white",
    
  });
  const T1 = styled(Typography)({
    fontWeight: "bold",
    maxWidth: "550px",
  });

  return (
    <Box marginX={"5%"}>
      <div className="hoverbox">
        <Typography variant="h3">LATEST BLOG</Typography>
        <Stack
          direction={"row"}
          spacing={{ lg: 8, md: 6, sm: 4, xs: 2 }}
          marginY={5}
        >
          {" "}
          <Hoverbox>
            {" "}
            <img src="../Images/k1.jpg" alt="" width={"100%"} />
            <Boxposition fontSize={{ xs: "8px", sm: "16px" }}>
              {" "}
              MARCH 12,2022
            </Boxposition>
          </Hoverbox>
          <Box>
            <Typography
              variant="body2"
              fontSize={{ lg: "12px", md: "12px", sm: "10px", xs: "10px" }}
              sx={{
                textTransform: "uppercase",
                color: "#3E64FF",
                fontWeight: "510",
              }}
            >
              DESIGN
            </Typography>
            <T1 fontSize={{ lg: "38px", md: "34px", sm: "22px", xs: "16px" }}>
              Knowing Business Goals and Priorities
            </T1>
            <Typography
              fontSize={{ lg: "14px", md: "12px", sm: "10px", xs: "8px" }}
              fontWeight={"none"}
              maxWidth={"450px"}
              marginTop={{ sm: ".7rem", md: ".2rem" }}
              marginBottom={{ sm: "1rem", md: "2rem" }}
            >
              If your the one responsible for keeping track of company meetings,
              here's everything you need to…
            </Typography>
            <Typography fontWeight={"510"}>Uidamin</Typography>
          </Box>
        </Stack>
        <Stack
          direction={"row"}
          spacing={{ lg: 8, md: 6, sm: 4, xs: 2 }}
          marginY={5}
        >
          {" "}
          <Hoverbox>
            {" "}
            <img src="../Images/k2.webp" alt="" width={"100%"} />
            <Boxposition fontSize={{ xs: "8px", sm: "16px" }}>
              {" "}
              MARCH 12,2022
            </Boxposition>
          </Hoverbox>
          <Box>
            <Typography
              variant="body2"
              fontSize={{ lg: "12px", md: "12px", sm: "10px", xs: "10px" }}
              sx={{
                textTransform: "uppercase",
                color: "#3E64FF",
                fontWeight: "510",
              }}
            >
              DESIGN
            </Typography>
            <T1 fontSize={{ lg: "38px", md: "34px", sm: "22px", xs: "16px" }}>
            Be Considered in Making Decisions
            </T1>
            <Typography
              fontSize={{ lg: "14px", md: "12px", sm: "10px", xs: "8px" }}
              fontWeight={"none"}
              maxWidth={"450px"}
              marginTop={{ sm: ".7rem", md: ".2rem" }}
              marginBottom={{ sm: "1rem", md: "2rem" }}
            >
              This is another way of saying, “We’ve been in business for a long
              time because people…
            </Typography>
            <Typography fontWeight={"510"}>Uidamin</Typography>
          </Box>
        </Stack>
        <Stack
          direction={"row"}
          spacing={{ lg: 8, md: 6, sm: 4, xs: 2 }}
          marginY={5}
        >
          {" "}
          <Hoverbox>
            {" "}
            <img src="../Images/k3.webp" alt="" width={"100%"} />
            <Boxposition fontSize={{ xs: "8px", sm: "16px" }}>
              {" "}
              MARCH 12,2022
            </Boxposition>
          </Hoverbox>
          <Box>
            <Typography
              variant="body2"
              fontSize={{ lg: "12px", md: "12px", sm: "10px", xs: "10px" }}
              sx={{
                textTransform: "uppercase",
                color: "#3E64FF",
                fontWeight: "510",
              }}
            >
              DESIGN
            </Typography>
            <T1 fontSize={{ lg: "38px", md: "34px", sm: "22px", xs: "16px" }}>
              Making Business Ideas More Planned
            </T1>
            <Typography
              fontSize={{ lg: "14px", md: "12px", sm: "10px", xs: "8px" }}
              fontWeight={"none"}
              maxWidth={"450px"}
              marginTop={{ sm: ".7rem", md: ".2rem" }}
              marginBottom={{ sm: "1rem", md: "2rem" }}
            >
              Again, customers liked to be affirmed in their decisions. This
              phrase communicates that if the customer…
            </Typography>
            <Typography fontWeight={"510"}>Uidamin</Typography>
          </Box>
        </Stack>
      </div>
    </Box>
  );
};

export default Section6;
