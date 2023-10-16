import React from "react";
import { Box, Grid,  Typography, styled } from "@mui/material";
import "./hover.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";

const Blog = () => {
  const Hoverbox = styled(Box)({
    overflow: "hidden",
    cursor: "pointer",
    marginBottom: "1cm",
  });

  const T1 = styled(Typography)({
    fontWeight: "bold",
    marginTop: ".3CM",
    marginBottom: ".3CM",
    // maxWidth: "350px",
  });

  return (
    <div className="hoverbox">
      <Box
        sx={{
          height: "300px",
          paddingTop: "10%",
          textAlign: "center",
          backgroundColor: "#f3f7fe",
        }}
      >
        <Typography
          display={"flex"}
          gap={2}
          justifyContent={"center"}
          sx={{ cursor: "pointer" }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "grey" }}>
            {" "}
            <Typography sx={{ "&:hover": { color: "black" } }}>
              {" "}
              Home{" "}
            </Typography>{" "}
          </Link>
          <Typography sx={{ color: "grey", "&:hover": { color: "black" } }}>
            Blog{" "}
          </Typography>
        </Typography>
        <Typography variant="h2" fontWeight={"bold"} paddingTop={4}>
          Blog
        </Typography>{" "}
      </Box>

      <Box marginX={"5%"}>
        <Grid
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
          gap={2}
          justifyContent={"space-around"}
        >
          <Grid
            item
            sm={6}
            maxWidth={{ md: "350px" }}
            spacing={{ lg: 6, md: 4, sm: 3, xs: 2 }}
            marginY={5}
          >
            {" "}
            <Hoverbox>
              <img src="../Images/k1.webp" alt="" width={"100%"} />
            </Hoverbox>
            <Grid>
              <Typography
                variant="body2"
                fontSize={{
                  lg: "12px",
                  md: "12px",
                  sm: "10px",
                  xs: "14px",
                }}
                sx={{
                  textTransform: "uppercase",
                  color: "#3E64FF",
                  fontWeight: "510",
                }}
              >
                DESIGN
              </Typography>
              <T1
                fontSize={{
                  lg: "34px",
                  md: "30px",
                  sm: "22px",
                  xs: "25px",
                }}
              >
                Knowing Business Goals and Priorities
              </T1>
              <Typography
                fontSize={{ lg: "14px", md: "12px", sm: "10px", xs: "12px" }}
                fontWeight={"none"}
                // maxWidth={"300px"}
                marginTop={{ sm: ".7rem", md: ".2rem" }}
                marginBottom={{ xs: "1rem", sm: "1rem", md: "2rem" }}
              >
                If your the one responsible for keeping track of company
                meetings,you need to know about writing effective work ad.
              </Typography>
              <Typography fontWeight={"510"}>
                Uidamin{" "}
                <CircleIcon
                  sx={{ fontSize: "8px", color: "GrayText", padding: " 2px" }}
                />{" "}
                MARCH 12,2022
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            sm={6}
            maxWidth={{ md: "350px" }}
            // direction={"column"}
            spacing={{ lg: 6, md: 4, sm: 3, xs: 2 }}
            marginY={5}
          >
            <Hoverbox>
              <img src="../Images/k2.webp" alt="" width={"100%"} />
            </Hoverbox>
            <Box>
              <Typography
                variant="body2"
                fontSize={{
                  lg: "12px",
                  md: "12px",
                  sm: "10px",
                  xs: "14px",
                }}
                sx={{
                  textTransform: "uppercase",
                  color: "#3E64FF",
                  fontWeight: "510",
                }}
              >
                DESIGN
              </Typography>
              <T1
                fontSize={{
                  lg: "34px",
                  md: "30px",
                  sm: "22px",
                  xs: "25px",
                }}
              >
                Be Considered in Making Decisions
              </T1>
              <Typography
                fontSize={{ lg: "14px", md: "12px", sm: "10px", xs: "12px" }}
                fontWeight={"none"}
                // maxWidth={"300px"}
                marginTop={{ sm: ".7rem", md: ".2rem" }}
                marginBottom={{ xs: "1rem", sm: "1rem", md: "2rem" }}
              >
                This is another way of saying, “We’ve been in business for a
                long time because people love our products and trust us.”
              </Typography>
              <Typography fontWeight={"510"}>
                Uidamin{" "}
                <CircleIcon
                  sx={{ fontSize: "8px", color: "GrayText", padding: "0 2px" }}
                />{" "}
                MARCH 12,2022
              </Typography>
            </Box>
          </Grid>

          <Grid
            maxWidth={{ md: "350px" }}
            // direction={"column"}
            spacing={{ lg: 6, md: 4, sm: 3, xs: 2 }}
            marginY={5}
          >
            <Hoverbox>
              <img src="../Images/k3.webp" alt="" width={"100%"} />
            </Hoverbox>
            <Box>
              <Typography
                variant="body2"
                fontSize={{
                  lg: "12px",
                  md: "12px",
                  sm: "10px",
                  xs: "14px",
                }}
                sx={{
                  textTransform: "uppercase",
                  color: "#3E64FF",
                  fontWeight: "510",
                }}
              >
                DESIGN
              </Typography>
              <T1
                fontSize={{
                  lg: "34px",
                  md: "30px",
                  sm: "22px",
                  xs: "25px",
                }}
              >
                Making Business Ideas More Planned
              </T1>
              <Typography
                fontSize={{ lg: "14px", md: "12px", sm: "10px", xs: "12px" }}
                fontWeight={"none"}
                // maxWidth={"300px"}
                marginTop={{ sm: ".7rem", md: ".2rem" }}
                marginBottom={{ xs: "1rem", sm: "1rem", md: "2rem" }}
              >
                Again, customers liked to be affirmed in their decisions. This phrase communicates that if the customer buys your products.
              </Typography>
              <Typography fontWeight={"510"}>
                Uidamin{" "}
                <CircleIcon
                  sx={{ fontSize: "8px", color: "GrayText", padding: "0 2px" }}
                />{" "}
                MARCH 12,2022
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </div>
  );
};

export default Blog;
