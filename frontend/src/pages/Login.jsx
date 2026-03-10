import React, { useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { useEffect } from "react";
import axios  from 'axios'
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const {setUser,token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
  return regex.test(password);
};
  const onSubmithandler = async (event) => {
    event.preventDefault();
    try {

  // // Password validation only for Sign Up
  // if (currentState === "Sign Up") {
  //   if (!validatePassword(password)) {
  //     toast.error(
  //       "Password must be at least 8 characters and include uppercase, lowercase, special character"
  //     );
  //     return;
  //   }
  // }

      if (currentState === "Sign Up") {
         if (!validatePassword(password)) {
      toast.error(
        "Password must be at least 8 characters and include uppercase, lowercase, special character"
      );
      return;
    }
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        console.log("Sign Up Response:", response.data)
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        // if (response.data.success) {
        //   setToken(response.data.token);
        //   setUser(response.data.user); // store user info
        //   localStorage.setItem("token", response.data.token);
        // } 
        if (response.data.success) {

  const token = response.data.token;

  setToken(token);
  localStorage.setItem("token", token);

  const decoded = jwtDecode(token);
  setUser(decoded);
navigate("/");
}
        else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

//   useEffect(()=>{
// if(token){
//   navigate('/')
// }
//   },[token])

  useEffect(()=>{
if(!token && localStorage.getItem('token')){
  setToken(localStorage.getItem('token'))
}
  },[])


  return (
    <form
      onSubmit={onSubmithandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      action=""
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

    
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full px-3 py-2 border border-gray-800"
          type="text"
          placeholder="Name"
          required
        />
      )}

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="w-full px-3 py-2 border border-gray-800"
        type="email"
        placeholder="Email"
        required
      />
      <div className="relative w-full">
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="w-full px-3 py-2 border border-gray-800"
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        required
      />
       <span
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-2 cursor-pointer text-sm text-gray-600"
  >
    {showPassword ? <FaEye/>:<FaEyeSlash/>  }
  </span>
  </div>
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot Your Password </p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sign In" : "Sign Up "}
      </button>
    </form>
  );
};

export default Login;
