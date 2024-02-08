// import React, { useState } from 'react';
// import {ref, push,set} from 'firebase/database';
// import { database } from '../../Firebase';

// //import { getStorage } from "firebase/storage";// Import your Firebase configuration

// const UserAppoiment = () => {
//   const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate form data
//     if (!name || !phoneNumber || !date || !time) {
//       alert('Please fill in all fields');
//       return;
//     }

//     try {
//         const appointmentsRef = ref(database, 'appointments');

//         // Push a new appointment to the database, generating a unique key
//         const newAppointmentRef = push(appointmentsRef);

//         // Set the appointment data
//         const appointmentData = {
//           name,
//           phoneNumber,
//           date,
//           time,
//         };
//         set(newAppointmentRef, appointmentData);

//         console.log('Appointment data uploaded.');

//         // Clear the form
//         setName('');
//         setPhoneNumber('');
//         setDate('');
//         setTime('');
//       } catch (error) {
//         console.error('Error uploading appointment data:', error.message);
//       }
//     };
//   return (
//     <div style={{padding:"50px"}}>
//       <h2>Make an Appointment</h2>
// <form onSubmit={handleSubmit}>
//   <label>
//     Name:
//     <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//   </label>
//   <br />
//   <label>
//     Phone Number:
//     <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//   </label>
//   <br />
//   <label>
//     Date:
//     <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//   </label>
//   <br />
//   <label>
//     Time:
//     <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
//   </label>
//   <br />
//   <button type="submit">Submit</button>
// </form>
//     </div>
//   );
// };

// export default UserAppoiment;

import React, { useContext, useState } from "react";
import { ref, push, set } from "firebase/database";
import { database, messaging } from "../../Firebase";
import { getMessaging } from "@firebase/messaging";
import { UserAuthContext } from "../../Context/UserAuthContext";

const UserAppointment = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");



  const { fcmToken } = useContext(UserAuthContext);
console.log('FCM Token from context:', fcmToken);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!name || !phoneNumber || !date || !time) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const appointmentsRef = ref(database, "appointments");

      // Push a new appointment to the database, generating a unique key
      const newAppointmentRef = push(appointmentsRef);

      // Set the appointment data
      const appointmentData = {
        name,
        phoneNumber,
        date,
        time,
      };
      set(newAppointmentRef, appointmentData);

      console.log("Appointment data uploaded.");

      // Send push notification
      const payload = {
        notification: {
          title: "Appointment Scheduled",
          body: "Your appointment has been scheduled successfully.",
        },
        token: await getMessaging.getToken(),
      };

      // Send the push notification
      await messaging.send(payload);

      // Clear the form
      setName("");
      setPhoneNumber("");
      setDate("");
      setTime("");
    } catch (error) {
      console.error(
        "Error uploading appointment data or sending push notification:",
        error.message
      );
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Make an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserAppointment;
