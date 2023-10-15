import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";

const Item = styled("div")(({ theme }) => ({
  marginTop:"25px",
  xs:"12,"
}));
const Section1 = () => {
  return (
    
    <Box>
      <Box sx={{ textAlign: "center", marginTop: "2cm" }}>
        <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
          Trusted by the fastest growing companies{" "}
        </Typography>
      </Box>
      <Grid
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-around"}
        flexWrap={"wrap"}
        position={"relative"}
      >
        <Item>
          <img src="../Images/lg1.webp" alt="" style={{ width: "170px" }} />
        </Item>
        <Item>
          <img src="../Images/lg2.webp" alt="" width={"170px"} />
        </Item>
        <Item>
          <img src="../Images/lg3.webp" alt="" width={"170px"} />
        </Item>
        <Item>
          <img src="../Images/lg4.webp" alt="" width={"170px"} />
        </Item>
        <Item>
          <img src="../Images/lg5.webp" alt="" width={"170px"} />
        </Item>
        <Item>
          <img src="../Images/lg6.webp" alt="" width={"170px"} />
        </Item>
      </Grid>
    </Box>
    
  );
};

export default Section1;
