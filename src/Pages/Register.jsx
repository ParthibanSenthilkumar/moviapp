import React, { useState } from "react";
import { auth } from "../Services/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { errorToast, SuccessToast } from "../Components/Toaster";
import Loader from "../Components/Loader";
import { Registeruser } from "../Services/Api";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form'


const Register = () => {

  // const [isLoading, setLoading] = useState(false);
  // const [formdata, setformData] = useState({
  //   UserName: "",
  //   Password: "",
  //   Email: "",
  //   Phonenumber: "",
  // });

  // const handleChance = (e) => {
  //   let { name, value } = e.target;
  //   setformData({
  //     ...formdata,
  //     [name]: value,
  //   });
  // };

    let { register,handleSubmit,formState:{errors},reset }=useForm()
    const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const regsiterAuth = await createUserWithEmailAndPassword(
        auth,
        data.Email,
        data.Password,
      );
      let resgisId = regsiterAuth.user;
      let uid = resgisId.uid;
      await Registeruser(uid, data);
      SuccessToast("regsiter Successfully");
      // setformData({
      //   UserName: "",
      //   Password: "",
      //   Email: "",
      //   Phonenumber: "",
      // });
      reset();
      console.log(data, "formdata");
    } catch (error) {
      errorToast(error.message);
    } finally {
      setLoading(false);
    }
  };
  if (isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100 vw-100">
        <Loader />
      </div>
    );
  }




  return (
    <>
      <section className="auth_section">
        <div className="form_container">
          <h1>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form_item">
                <input
                  type="text"
                  name="UserName"
                  // value={formdata.UserName}
                  // onChange={handleChance}
                  placeholder="enter your name"
                  {...register(
                    "UserName",{
                      required:"Enter Your Name"
                    }
                  )}
                />
                {
                errors.UserName && 
                <p className="text-danger"> {errors.UserName.message}</p>
                }
              </div>

              <div className="form_item">
                <input
                  type="password"
                  name="Password"
                  placeholder="enter your password"
                  {
                    ...register("Password",{
                      required:"Enter your Password",
                      minLength:{
                        value:6,
                        message:"Minimum 6 characters"
                      }
                    })
                  }
                />
                {
                  errors.Password && 
                  <p className="text-danger"> {errors.Password.message} </p>
                }
              </div>

              <div className="form_item">
                <input
                  type="email"
                  name="Email"
                  placeholder="enter your email"
                  {
                    ...register( "Email",{
                      required:"enter Your Email",
                      pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message:"Enter the vaild email"

                    } )
                  }
                />
                {
                  errors.Email && 
                  <p className="text-danger">{errors.Email.message}</p>
                }
              </div>

              <div className="form_item">
                <input
                  type="text"
                  name="Phonenumber"
                  placeholder="enter your number"
                  {
                    ...register("Phonenumber",{
                      required:"enter the phone Number",
                      pattern:{
                        value:/^[0-9]{10}$/,
                        message:"Enter Valid 10 Digit Number"
                      }
                    })
                  }
                />
                {
                  errors.Phonenumber && 
                  <p className="text-danger">{errors.Phonenumber.message}</p>
                }
              </div>

              <button type="submit">Register Now</button>

              <p className="signup_text">
                Already have an account? <Link to="/">Login now</Link>
              </p>
            </form>
          </div>
      </section>
    </>
  );
};

export default Register;
