import { Box, Typography } from "@mui/material";
import React from "react";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper.css";

const Section5 = () => {
  return (
    <Box  marginLeft={".5cm"} marginTop={{xs:"2cm",sm:"6.5cm",md:"9cm"}}>
      <Typography variant="h3" marginBottom={3} textAlign={"center"}>
        What they say about us
      </Typography>

      <Box marginBottom={2}  marginRight={{lg:".3cm",md:".2cm",sm:".2cm",xs:"1cm"}} >
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            320: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            770: {
              slidesPerView: 3,
            },
          }}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card
              sx={{
                minWidth: 275,
                marginBottom: "1cm",
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <CardContent>
                <img
                  src="../Images/ruben.webp"
                  alt=""
                  style={{ width: "50px", borderRadius: "50%" }}
                />
                <Typography
                  sx={{ fontSize: 18, fontWeight: "400" }}
                  gutterBottom
                >
                  Ruben Dokidis
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
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                minWidth: 275,
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
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
          </SwiperSlide>

          <SwiperSlide>
            <Card
              sx={{
                minWidth: 275,
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <CardContent>
                <img
                  src="../Images/ruben.webp"
                  alt=""
                  style={{ width: "50px", borderRadius: "50%" }}
                />
                <Typography
                  sx={{ fontSize: 18, fontWeight: "400" }}
                  gutterBottom
                >
                  Ruben Dokidis
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
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                minWidth: 275,
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
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
          </SwiperSlide>

          <SwiperSlide>
            <Card
              sx={{
                minWidth: 275,
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <CardContent>
                <img
                  src="../Images/ruben.webp"
                  alt=""
                  style={{ width: "50px", borderRadius: "50%" }}
                />
                <Typography
                  sx={{ fontSize: 18, fontWeight: "400" }}
                  gutterBottom
                >
                  Ruben Dokidis
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
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                minWidth: 275,
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
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
          </SwiperSlide>

          <SwiperSlide>
            <Card
              sx={{
                minWidth: 275,
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <CardContent>
                <img
                  src="../Images/ruben.webp"
                  alt=""
                  style={{ width: "50px", borderRadius: "50%" }}
                />
                <Typography
                  sx={{ fontSize: 18, fontWeight: "400" }}
                  gutterBottom
                >
                  Ruben Dokidis
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
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                minWidth: 275,
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
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
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box marginLeft={{lg:"-3cm",md:"-2cm",sm:"-1cm",xs:".5cm"}}
       marginRight={{lg:".3cm",md:".2cm",sm:".2cm",xs:"1cm"}}>

        <Swiper
         breakpoints={{
          // when window width is >= 640px
          320: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          770: {
            slidesPerView: 3,
          },
        }}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card
              sx={{
                minWidth: 275,
                marginBottom: "1cm",
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <CardContent>
                <img
                  src="../Images/ruben.webp"
                  alt=""
                  style={{ width: "50px", borderRadius: "50%" }}
                />
                <Typography
                  sx={{ fontSize: 18, fontWeight: "400" }}
                  gutterBottom
                >
                  Ruben Dokidis
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
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                minWidth: 275,
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
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
          </SwiperSlide>

          <SwiperSlide>
            <Card
              sx={{
                minWidth: 275,
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <CardContent>
                <img
                  src="../Images/ruben.webp"
                  alt=""
                  style={{ width: "50px", borderRadius: "50%" }}
                />
                <Typography
                  sx={{ fontSize: 18, fontWeight: "400" }}
                  gutterBottom
                >
                  Ruben Dokidis
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
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                minWidth: 275,
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
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
          </SwiperSlide>

          <SwiperSlide>
            <Card
              sx={{
                minWidth: 275,
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <CardContent>
                <img
                  src="../Images/ruben.webp"
                  alt=""
                  style={{ width: "50px", borderRadius: "50%" }}
                />
                <Typography
                  sx={{ fontSize: 18, fontWeight: "400" }}
                  gutterBottom
                >
                  Ruben Dokidis
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
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                minWidth: 275,
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
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
          </SwiperSlide>

          <SwiperSlide>
            <Card
              sx={{
                minWidth: 275,
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <CardContent>
                <img
                  src="../Images/ruben.webp"
                  alt=""
                  style={{ width: "50px", borderRadius: "50%" }}
                />
                <Typography
                  sx={{ fontSize: 18, fontWeight: "400" }}
                  gutterBottom
                >
                  Ruben Dokidis
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
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                minWidth: 275,
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
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
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default Section5;
