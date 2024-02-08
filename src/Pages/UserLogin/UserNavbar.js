import React from "react";
import {

  AppBar,
  Toolbar,
  styled,
  IconButton,
  ListItemText,
} from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
//import useScrollTrigger from "@mui/material/useScrollTrigger";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import { Link as Linkrouter } from "react-router-dom";
import "../../Components/navbar.css";
// import Navscroll1, {Navscroll1} from "../Components/Navscroll.js"
import Headroom from "react-headroom";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { motion } from "framer-motion";
import UserProfileMenu from "./UserProfileMenu";

function UserNavbar() {
  const [state, setState] = React.useState({
    top: false,
  });

  //const trigger = useScrollTrigger({ threshold: 0 });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const iemsList = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : "100vh",
        backgroundColor: "whitesmoke",
        height: "70%",
      }}
      role="drawer"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link
          activeClass="active"
          onClick={toggleDrawer(anchor, false)}
          to="Home"
          spy={true}
          smooth={true}
          duration={500}
        >
          <ListItemButton sx={{ color: "black", textAlign: "center" }}>
            <ListItemText>
              {" "}
              <motion.div
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                Home{" "}
              </motion.div>
            </ListItemText>
          </ListItemButton>{" "}
        </Link>
        <Link
          activeClass="active"
          onClick={toggleDrawer(anchor, false)}
          to="Insights"
          spy={true}
          smooth={true}
          duration={500}
        >
          <ListItemButton sx={{ color: "black", textAlign: "center" }}>
            <ListItemText> Insights</ListItemText>
          </ListItemButton>
        </Link>
        <Link
          activeClass="active"
          onClick={toggleDrawer(anchor, false)}
          to=" Bussiness Plans"
          spy={true}
          smooth={true}
          duration={500}
        >
          <ListItemButton sx={{ color: "black", textAlign: "center" }}>
            <ListItemText> Bussiness Plans</ListItemText>
          </ListItemButton>
        </Link>
        <Link
          activeClass="active"
          onClick={toggleDrawer(anchor, false)}
          to=" Features"
          spy={true}
          smooth={true}
          duration={500}
        >
          <ListItemButton sx={{ color: "black", textAlign: "center" }}>
            <ListItemText> Features</ListItemText>
          </ListItemButton>
        </Link>
        <Linkrouter to="/Blog" style={{ textDecoration: "none" }}>
          <ListItemButton sx={{ color: "black", textAlign: "center" }}>
            <ListItemText>Blog </ListItemText>
          </ListItemButton>
        </Linkrouter>
      
      </List>

      {/* <Typography
        sx={{
          backgroundColor: "blue",
          color: "white",
          borderRadius: "8px",
          textAlign: "center",
          padding: 1,
          margin: 2,
        }}
      >
        Sign In
      </Typography> */}
    </Box>
  );

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
  // const Bluebtn = styled(Button)({
  //   backgroundColor: "#3E64FF",
  //   textTransform: "none",
  //   padding: "8px 25px",
  //   borderRadius: "8px",
  //   fontWeight: "bold",
  //   color: "white",
  //   fontSize: "16px",
  //   "&:hover": { backgroundColor: "blue" },
  // });

  const button = styled(Button)({
    textTransform: "none",
    color: "black",
    fontSize: "17px",

    "&:hover": { backgroundColor: "#f3f7fe", color: "blue" },
  });
  const Menubtn = styled(IconButton)({
    color: "#f3f7fe",
    background: "none",
    fontSize: "1px",
  });

  return (
    <div name="navbar" className="navbar">
      <AppBar
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Headroom
          style={{
            webkitTransition: "all .5s ease-in-out",
            mozTransition: "all .5s ease-in-out",
            oTransition: "all .5s ease-in-out",
            transition: "all .5s ease-in-out",
          }}
        >
          <Box
            sx={{
              paddingX: "1cm",
              backgroundColor: "#f3f7fe",
              paddingTop: ".1cm",
              display: { sm: "none", xs: "none", md: "block" },
            }}
          >
            <StyledToolbar>
              <div>
                <img src="../Images/logo.webp" alt="" width={"120px"} />
              </div>
              <Middle sx={{ display: { sm: "none", xs: "none", md: "block" } }}>
                <button variant="text">
                  <Link
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Home
                  </Link>
                </button>

                <button button variant="text">
                  <div className="link">
                    <Link
                      activeClass="active"
                      to="Insights"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Insights
                    </Link>
                  </div>
                </button>
                <button button variant="text">
                  <Link
                    activeClass="active"
                    to="Bussiness Plans"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Bussiness Plans
                  </Link>
                </button>
                <button button variant="text">
                  <Link
                    activeClass="active"
                    to="Features"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Features
                  </Link>
                </button>
                <Linkrouter to="/Blog" style={{ textDecoration: "none" }}>
                  <button button variant="text">
                    {" "}
                    Blog{" "}
                  </button>
                </Linkrouter>
              </Middle>
              <Right sx={{ display: { sm: "none", xs: "none", md: "block" } }}>
                
                <UserProfileMenu/>
               {/* <button button variant="text" style={{ marginRight: "15px" }}>
                  Log In
                </button>
                <Linkrouter to="/UserRegister"><Bluebtn> Sign Up</Bluebtn></Linkrouter> */}
              </Right>
              
            </StyledToolbar>
          </Box>
        </Headroom>

        {["top"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Headroom>
              <Box sx={{ display: { sm: "block", xs: "block", md: "none" } }}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  sx={{
                    backgroundColor: "#f3f7fe",
                    paddingX: "1cm",
                    paddingY: ".1cm",
                  }}
                >
                  <div>
                    <img
                      src="../Images/logo.webp"
                      alt=""
                      style={{ paddingTop: ".2cm" }}
                      width={"120px"}
                    />
                  </div>
                  <Menubtn onClick={toggleDrawer(anchor, true)}>
                    {" "}
                    <MenuIcon
                      sx={{ color: "black", fontSize: "32px" }}
                    ></MenuIcon>
                    {anchor}
                  </Menubtn>
                </Box>
              </Box>
            </Headroom>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              transitionDuration={600}
            >
              {iemsList(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </AppBar>
      <Box>
        <Link
          activeClass="active"
          to="navbar"
          spy={true}
          smooth={true}
          duration={500}
        >
          <ArrowDropUpIcon
            style={{
              position: "fixed",
              right: ".5cm",
              bottom: ".7cm",
              fontSize: "40px",
              zIndex: "30",
              padding: "1px",
              borderRadius: "50%",
              backgroundColor: "linen",
            }}
          />
        </Link>
      </Box>
    </div>
  );
}

export default UserNavbar;
