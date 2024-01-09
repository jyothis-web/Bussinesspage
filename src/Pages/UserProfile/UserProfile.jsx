import React, { useContext } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Avatar, Button, Card } from "@mui/material";
import { UserAuthContext } from "../../Context/UserAuthContext";

const UserProfile = () => {
  const {
    userUid,
    user,
    url,
    loading,
    handleProfileSubmit,
    handleImageChange,
  } = useContext(UserAuthContext);

  // const storageKey = `userProfileImageUrl_${userUid}`;
  // console.log(userUid, user, url);

  const displayName = user?.displayName || "";
  const orginalurl =url  ||" https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png";
  //console.log( 'orginal image',orginalurl);
  //  console.log(user);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
       
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}>
          <Card
            sx={{
              position: "relative",
              width: "250px",
              display: "flex",
              alignItems: "center",
              flexDirection:"column",
              paddingTop:"30px",
              gap:"20px",
              marginTop:"10%",
            }}
          >
            <Avatar
              src={ orginalurl}
              alt=""
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                // marginBottom: "30px",
              }}
            />
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id={`avatar-input-${userUid}`}
              onChange={handleImageChange}
            />
            <label htmlFor={`avatar-input-${userUid}`}>
              <AddAPhotoIcon
                className="addphotoicon"
                sx={{
                  position: "absolute",
                  left: "155px",
                  top: "100px",
                  color: "#00A264",
                }}
              />
            </label>
            <div>welcome {displayName}</div>
            <Button onClick={handleProfileSubmit}>update</Button>
          </Card>
        </div>

      )}
    </div>
  );
};

export default UserProfile;
