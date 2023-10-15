import { Slide } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import React from "react";


const Navscroll1 = props => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: props.threshold,
    target: props.window ? window() : undefined
  });

  return (
    <Slide appear={true} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
};

export default Navscroll1;
  
   