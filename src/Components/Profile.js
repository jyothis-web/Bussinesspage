// function Profile() {
//     return (
//       <img
//         src="https://i.imgur.com/MK3eW3As.jpg"
//         alt="Katherine Johnson"
//       />

import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
//import SettingsIcon from '@mui/icons-material/Settings';
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";

import React from "react";
import "./Profile.css";
import styled from "styled-components";

const Profile = () => {
  const Yellowbtn=styled(Button)({
    backgroundColor: "yellow",
          color: "black",
          margin: "100px",
          padding: "20px",
          "&:hover":{backgroundColor:"red"}
  })
  return (
    <div>
      <Button variant="text" size="small">
        Text
      </Button>
      <Button
        className="b1"
        startIcon={<DeleteIcon />}
        variant="contained"
        size="large"
      >
        Contained
      </Button>
      <Button
        className="b2"
        endIcon={<SendIcon />}
        variant="contained"
        size="medium"
      >
        settings
      </Button>
      <Button variant="outlined" size="medium">
        Outlined
      </Button>
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
      <Button
        variant="Contained"
        sx={{
          backgroundColor: "yellow",
          color: "black",
          margin: "100px",
          padding: "20px",
          "&:hover":{backgroundColor:"red"}
        }}
      >
        <h2> customize</h2>
      </Button>
      <Yellowbtn>HELLO</Yellowbtn>
    </div>
  );
};

export default Profile;

//     );

//   }

//   export function Gallery() {
//     return (
//       <section>
//         <h1>Amazing scientists</h1>
//          <Profile />
//         <Profile />
//         <Profile />
//       </section>
//     );
//   }

//   export default   function TodoList() {
//     return (
//       <>
//         <h1>Hedy Lamarr's Todos</h1>
//         <img
//           src="https://i.imgur.com/yXOvdOSs.jpg"
//           alt="Hedy Lamarr"
//           className="photo"
//         />
//         <ul>
//           <li>Invent new traffic lights</li>
//           <li>Rehearse a movie scene</li>
//           <li>Improve spectrum technology</li>
//         </ul>
//         <Profile/>

//       </>
//     );
//  }
//  export default TodoList;

// const today = new Date();

// function formatDate(date) {
//   return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
// }

// export default function TodoList() {
//   return <h1>To Do List for {formatDate(today)}</h1>;
// }

// const person = {
//     name: 'Gregorio Y. Zara',
//     img:'https://i.imgur.com/7vQD0fPs.jpg',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
//   };

//   export default function TodoList() {
//     return (
//       <div style={person.theme}>
//         <h1>{person.name}'s Todos</h1>
//         <img
//           className="avatar"
//           src={person.img}
//           alt="Gregorio Y. Zara"
//         />
//         <ul>
//           <li>Improve the videophone</li>
//           <li>Prepare aeronautics lectures</li>
//           <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//       </div>
//     );
//   }
