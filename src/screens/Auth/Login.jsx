import React from "react";
import "./Login.css";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../../provider/Auth"
import Loading from "../Loading/Loading"

const BASE_URL = "http://localhost:5000";

export default function Login() {

  const {user, updateUser} = React.useContext(UserContext)

  const navigate = useNavigate();

  const [name , setName] = React.useState("");
  const [email , setEmail] = React.useState("");
  const [password , setPassword] = React.useState("");
  const [loading , setLoading] = React.useState(false);


  const loginBtnRef = React.useRef();
  const signupBtnRef = React.useRef();

  const handelLoginClick = (e) => {
    let parent = e.target.parentNode.parentNode;
    Array.from(e.target.parentNode.parentNode.classList).find((element) => {
      if (element !== "slide-up") {
        parent.classList.add("slide-up");
      } else {
        signupBtnRef.current.parentNode.classList.add("slide-up");
        parent.classList.remove("slide-up");
      }
    });
  };

  const handelSignupClick = (e) => {
    let parent = e.target.parentNode;
    Array.from(e.target.parentNode.classList).find((element) => {
      if (element !== "slide-up") {
        parent.classList.add("slide-up");
      } else {
        loginBtnRef.current.parentNode.parentNode.classList.add("slide-up");
        parent.classList.remove("slide-up");
      }
    });
  };

  const handelSignup = () => {
    if(name === "" || email === "" || password === ""){
      toast.error("Please fill all the fields")
      return
    }
    
    setLoading(true)
    axios.post(`${BASE_URL}/api/auth/register`,{
      name: name,
      password:password,
      email:email
    }).then((res)=>{
      toast.success(res.data.message)
      loginBtnRef.current.click();
      setLoading(false)
    }
    ).catch((err)=>{
      err.response?.data?.message ? toast.error(err.response.data.message) :toast.error("Something went wrong")
      console.log(err)
      setLoading(false)
    })

  }

  const handelLogin = () => {
    if(email === "" || password === ""){
      toast.error("Please fill all the fields")
      return
    }
    setLoading(true)

    axios.post(`${BASE_URL}/api/auth/login`,{
      password:password,
      email:email
    }).then((res)=>{
      var userData = res.data.result[0]
      updateUser({ loginStatus: true, user: userData })
      localStorage.setItem("user", JSON.stringify({ loginStatus:true,user:userData }));
      toast.success(res.data.message)
      navigate("/dashboard")
      setLoading(false)
    }
    ).catch((err)=>{
      err.response?.data?.message ? toast.error(err.response.data.message) :toast.error("Something went wrong")
      console.log(err)
      setLoading(false)
    })

  }



  return (
    <>
    {loading && <Loading />}
    <div className="loginPageContainer">
      <div className="form-structor">
        <div className="signup">
          <h2 ref={signupBtnRef} className="form-title" id="signup" onClick={(e)=>handelSignupClick(e)}>
            <span>or</span>Sign up
          </h2>
          <div className="form-holder">
            <input required type="text" className="input" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
            <input required type="email" className="input" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
            <input required type="password" className="input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <button  className="submit-btn" onClick={handelSignup}>Sign up</button>
        </div>
        <div className="login slide-up">
          <div className="center">
            <h2 ref={loginBtnRef} className="form-title" id="login" onClick={(e)=>handelLoginClick(e)}>
              <span>or</span>Log in
            </h2>
            <div className="form-holder">
              <input required type="email" className="input" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
              <input required type="password" className="input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button className="submit-btn" onClick={handelLogin} >Log in</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
