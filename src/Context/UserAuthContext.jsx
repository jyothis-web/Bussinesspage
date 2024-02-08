import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { auth } from "../Firebase";
import { storage } from "../Firebase";
import { getToken,getMessaging } from "@firebase/messaging";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [userUid, setUserUid] = useState(null);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fcmToken, setFcmToken] = useState(null);
  const navigate = useNavigate();

  const storageKey = `userProfileImageUrl_${userUid}`;

  //for sign in
  const signupUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //for log in
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //for logout
  const logoutUser = () => {
    return signOut(auth, user);
  };

  //by using google account
  // const googleSignIn = () => {
  //   const googleauthprovider = new GoogleAuthProvider();
  //   return signInWithPopup(auth, googleauthprovider);
  // };
  const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();

    // Check if the user is on a mobile or tablet device
    const isMobileOrTablet = window.innerWidth <= 768; // You can adjust this threshold as needed

    // Use signInWithPopup for computers and signInWithRedirect for mobile and tablet devices
    if (isMobileOrTablet) {
      return signInWithRedirect(auth, googleAuthProvider);
    } else {
      return signInWithPopup(auth, googleAuthProvider);
    }
  };

  const handleRedirectResult = async () => {
    await getRedirectResult(auth)
      .then((result) => {
        // The signed-in user info is available in the result object
        const user = result.user;
        console.log(user);
        navigate("/UserHomepage");
      })
      .catch((error) => {
        // Handle errors during redirect
        console.error(error);
      });
  };

  //for forgot password by email
  const passwordResetForUser = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  //profile image
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setUrl(URL.createObjectURL(file));
    }
  };
  console.log("image", image);
  const handleProfileSubmit = () => {
    const imageref = ref(storage, `images/${userUid}`);
    // setUrl("https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png");
    uploadBytes(imageref, image).then(() => {
      getDownloadURL(imageref)
        .then((downloadURL) => {
          setUrl(downloadURL);
          localStorage.setItem(storageKey, downloadURL);
          console.log("updated successfully", downloadURL);
          toast.success(" profile image updated successfully");
        })
        .catch((error) => {
          console.log(error.message, "image url not found");
        });
    });
  };

  useEffect(() => {
    const storedUrl = localStorage.getItem(storageKey);

    if (storedUrl) {
      setUrl(storedUrl);
      setLoading(false); // Set loading to false when the URL is retrieved
    } else {
      const userPhotoUrl = user?.photoURL || "";
      setUrl(
        userPhotoUrl ||
          "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
      );
      setLoading(false); // Set loading to false even if the default URL is used
    }
  }, [storageKey, user]);


 

  useEffect(() => {
    const getFCMToken = async () => {
      try {
        const token = await getToken(getMessaging());
        setFcmToken(token);
      } catch (error) {
        console.error('Error getting FCM token:', error);
      }
    };

    getFCMToken();
  }, []);

  // useEffect(() => {
  //   const storedUrl = localStorage.getItem(storageKey);
  //   if (storedUrl) {
  //     // setUrl(storedUrl || "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png");
  //     setLoading(false); // Set loading to false when the URL is retrieved
  //   } else {
  //     setLoading(false); // Set loading to false even if the default URL is used
  //     setUrl((user?.photoURL ? user.photoURL : "") || storedUrl);
  //   }
  // }, [storageKey,user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      if (CurrentUser) {
        const userUid = CurrentUser.uid;
        console.log("User UID:", userUid);
        setUser(CurrentUser);
        setUserUid(userUid);
      } else {
        setUser(null);
        setUserUid(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // const userUid =() =>{
  //   return(userUid)
  // }
  return (
    <div>
      <UserAuthContext.Provider
        value={{
          user,
          userUid,
          url,
          loading,
          fcmToken,
          signupUser,
          loginUser,
          logoutUser,
          googleSignIn,
          passwordResetForUser,
          handleProfileSubmit,
          handleImageChange,
          handleRedirectResult,
        }}
      >
        {children}
      </UserAuthContext.Provider>
    </div>
  );
};

export default UserAuthContextProvider;
