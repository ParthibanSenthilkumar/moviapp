import React, { useEffect, useState } from "react";
import { userContext } from "./Createcontectprofile";
import { Userprofile } from "../Services/Api";

const UserProfileProvider = ({ children }) => {
  const [userProfile, setuserProfile] = useState(()=>{
    let storedprofile=localStorage.getItem("profile")
    return storedprofile ? JSON.parse(storedprofile):[]
  });
  useEffect(()=>{
    localStorage.setItem("profile",JSON.stringify(userProfile))
  },[userProfile])
  return (
    <>
      <userContext.Provider value={{userProfile,setuserProfile}}>
        {children}
      </userContext.Provider>
    </>
  );
};

export default UserProfileProvider;
