import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  styled,
  Button,
  Drawer,
  Box,
  SwipeableDrawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Customnavbar = () => {

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Middle = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "4px",
  }));
  const Right = styled("div")(({ theme }) => ({
    display: "flex",
    rowGap: "6px",
  }));
  const Bluebtn = styled(Button)({
    backgroundColor: "#3E64FF",
    textTransform: "none",
    padding: "8px 25px",
    borderRadius: "8px",
    fontWeight: "bold",
    color: "white",
    fontSize: "16px",
    "&:hover": { backgroundColor: "blue" },
  });

  const Logobtn = styled(Button)({
    textTransform: "none",
    color: "black",
    fontSize: "17px",
    "&:hover": { backgroundColor: "#f3f7fe", color: "blue" },
  });
  const [open, setopen] = useState(false);

  
  return (
    <AppBar
      position="static"
      sx={{
        position: "static",
        backgroundColor: "#f3f7fe",
        boxShadow: "none",
        paddingTop: ".5cm",
      }}
    >
      <Container maxWidth="xl">
        <StyledToolbar>
          <div>
            <img src="../Images/logo.webp" alt="" width={"120px"} />
          </div>
          <Middle sx={{ display: { sm: "none", xs: "none", md: "block" } }}>
            <Logobtn Logobtn variant="text">
              Home
            </Logobtn>
            <Logobtn Logobtn variant="text">
              Insights
            </Logobtn>
            <Logobtn Logobtn variant="text">
              Bussiness Plans
            </Logobtn>
            <Logobtn Logobtn variant="text">
              Features
            </Logobtn>
            <Logobtn Logobtn variant="text">
              Blog
            </Logobtn>
          </Middle>
          <Right sx={{ display: { sm: "none", xs: "none", md: "block" } }}>
            <Logobtn Logobtn variant="text" style={{ marginRight: "15px" }}>
              Log In
            </Logobtn>
            <Bluebtn> Sign Up</Bluebtn>
          </Right>

          <Right sx={{ display: { sm: "block", xs: "lock", md: "none" } }}>
            <Button onClick={() => setopen(true)}>
              <MenuIcon sx={{ color: "black" }} />{" "}
            </Button>
            <Drawer
              
              
             
              open={open}
              onClose={() => setopen(false)}
              anchor="top"
              transitionDuration={{appear:500,enter:"500"}}
             
            >
              <Box  height={"50vh"} sx={{ textAlign:"center", backgroundColor: "white" }}>
                <h5> Home</h5>
                <h5>Insights</h5>
                <h5> Bussiness Plans</h5>
                <h5> Features</h5>
                <h5> Blog</h5>
              </Box>
            </Drawer>
          </Right>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Customnavbar;
