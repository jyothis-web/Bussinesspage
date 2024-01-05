import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import { UserAuthContext } from '../../Context/UserAuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function UserProfileMenu() {
  const { user,url ,logoutUser } = React.useContext(UserAuthContext);
  const userEmail = user ? user.email : '';
  console.log(userEmail);
  const naviagte = useNavigate()
const handleLogout = ()=>{
  try {
    logoutUser();
    naviagte("/");
  } catch (error) {
    console.log(error.message);
  }
}


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const orginalurl =url  || (user?.photoURL ? user.photoURL : "");
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <Avatar  alt={userEmail} src={orginalurl} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       <Link to="/UserProfile"> <MenuItem onClick={handleClose}>My account</MenuItem></Link>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}