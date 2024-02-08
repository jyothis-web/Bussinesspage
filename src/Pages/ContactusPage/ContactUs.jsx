// import React from 'react'
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import { IconButton } from '@mui/material';

// const ContactUs = () => {
//   return (
//     <div>
//         <IconButton>
//       <LocalPhoneIcon/> 9400300231
//       </IconButton>
//     </div>
//   )
// }

// export default ContactUs

import React from 'react';
import IconButton from '@mui/material/IconButton';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const ContactUs = () => {
  const phoneNumber = '9400300231';

  const handleButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div>
      <IconButton onClick={handleButtonClick}>
        <LocalPhoneIcon />
        {phoneNumber}
      </IconButton>
    </div>
  );
};

export default ContactUs;
