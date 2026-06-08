import { errorToast } from "../Components/Toaster";
import axios from "axios";

const API_key = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3`;
const FIREBASE_URL = "https://task-668b3-default-rtdb.firebaseio.com";

export const fetchData = async (apipath, queryTerm = "") => {
  const separator = apipath.includes("?") ? "&" : "?";
  const url = queryTerm
    ? `${BASE_URL}/search/movie?api_key=${API_key}&query=${queryTerm}`
    : `${BASE_URL}/${apipath}${separator}api_key=${API_key}`;
  //   console.log(url,"api url");

  try {
    const res = await axios.get(url);
    return res.data.results;
  } catch (error) {
    errorToast(error.message);
    throw error;
  }
};

export const Registeruser = async (uid, data) => {
  try {
    let res = await axios.put(
      `${FIREBASE_URL}/movieRegister/${uid}.json`,
      data,
    );
    return res.data;
  } catch (error) {
    errorToast(error.message);
    console.log(error.message);
    throw error;
  }
};

export const LoginUser = async (uid, data) => {
  try {
    let res = await axios.put(`${FIREBASE_URL}/movieLogin/${uid}.json`, data);
    return res.data;
  } catch (error) {
    errorToast(error.message);
    console.log(error.message);
    throw error;
  }
};

export const Userprofile = async (uid)=>{
    try{
        const res = await axios.get(`${FIREBASE_URL}/movieLogin.json`)
        const data=res.data
        let profileData=Object.values((data)).find((user)=>(
           user.uid === uid  
        ))
        return profileData
    }
    catch(error){
        errorToast(error.message)
        console.log(error.message); 
    }
}