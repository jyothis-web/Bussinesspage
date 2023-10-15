import React from 'react'
import { Box, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Customcard = () => {
  return (
    <div>
       <Card  sx={{ minWidth: 275,boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"  }}>
              <CardContent>
                <img
                  src="../Images/tatiana.webp"
                  alt=""
                  style={{ width: "50px", borderRadius: "50%" }}
                />
                <Typography
                  sx={{ fontSize: 18, fontWeight: "400" }}
                  gutterBottom
                >
                  Tatiana Gouse
                </Typography>
                <Typography sx={{ fontSize: 12 }} color="text.secondary">
                  CEO at Company
                </Typography>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Typography component="legend" size="small"></Typography>
                  <Rating name="read-only" value={5} readOnly />
                </Box>
                <Typography
                  fontSize={12}
                  textAlign={"justify"}
                  marginTop={2}
                  component="div"
                >
                  d"I've been a user of PageBolt for over a year now, and it's
                  been an invaluable tool for me to stay on top of my work. The
                  interface is user-friendly and intuitive, making it easy for
                  me to manage my tasks and projects
                </Typography>
              </CardContent>
            </Card>
    </div>
  )
}

export default Customcard;


