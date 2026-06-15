import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../Services/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { errorToast, SuccessToast } from "../Components/Toaster";
import { LoginUser,Userprofile } from "../Services/Api";
import { userContext } from "../Context/Createcontectprofile";
import { create } from "axios";

const Login = () => {
  let [Loginemail, setLoginemail] = useState("");
  let [password, setPassword] = useState("");
  let [Loading, setloading] = useState(false);
  
  let {setuserProfile}=useContext(userContext)
  let navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const loginAuth = await signInWithEmailAndPassword(
        auth,
        Loginemail,
        password,
      );
      let loginId = loginAuth.user;
      let uid = loginId.uid;
      await LoginUser(uid, {
        uid,
        Loginemail,
        password,
        createDateTime:new Date().toISOString()    
      });
     let profile= await Userprofile(uid)
      setuserProfile(profile)
      console.log(profile,"profile");
      
      setLoginemail("");
      setPassword("");
      SuccessToast("Login Successfull")
      navigate("/home");
    } catch (error) {
      errorToast(error.message);
    } finally {
      setloading(false);
    }
  };


  return (
    <>
      <section className="auth_section">

          <div className="form_container">
            <h1>Sign In</h1>
            <form onSubmit={handlesubmit}>
              <div className="form_item">
                <input type="email" placeholder="Email " onChange={(e)=>setLoginemail(e.target.value)}  />
              </div>

              <div className="form_item">
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
              </div>

              <button type="submit">Sign In</button>
            </form>

            <p className="signup_text">
              New to Movieapp? <Link to="/register">Sign up now</Link>
            </p>
          </div>
      </section>
    </>
  );
};

export default Login;
