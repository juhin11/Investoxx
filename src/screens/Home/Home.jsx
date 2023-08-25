import React, { useContext, useEffect } from "react";
import "./Home.css";
import "./NavBar.css";
import "./HomeBackground.css";
import Card from "./Card";
import Login from "./Login";
import Used from "./Used";
import Footer from "../../components/Footer/Footer";
import { UserContext } from "../../provider/Auth";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import axios from "axios";
import NavBar from "./NavBar";

export default function Home() {
  const [data, setData] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const getCategoryData = async () => {
    await axios
      .get("http://localhost:5000/categorycount")
      .then((res) => {
        const data = res.data;
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const get_count = async () => {
    await axios
      .get(`http://localhost:5000/count`)
      .then((res) => {
        const data = res.data[0].count;
        setTotal(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getCategoryData();
    get_count();
  }, []);

  const { user, updateUser } = React.useContext(UserContext);
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    if (mounted) {
      const check = JSON.parse(localStorage.getItem("user"));
      console.log(check)
      if (check == null) {
        updateUser({ loginStatus: false, user: {} });
        return;
      }
      setMounted(true);
      updateUser(check);
    }
  }, []);



  return (
    <div style={{overflowX:"hidden"}}>
      {loading ? (
        <Loading />
      ) : (
        <div style={{ position: "relative" }}>
          <span className="goToTop">
            <a href="#home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                />
              </svg>
            </a>
          </span>

          <NavBar />
          <div className="homeContainer" id="home">
            <video autoPlay muted loop>
              <source
                src="https://investoxx-assets.oss-ap-south-1.aliyuncs.com/heroBG.mp4"
                type="video/mp4"
              />
            </video>

            <div className="hero">
              <h2>
                Invest with <br /> Confidence
              </h2>
              <p>Unlock the future of investing with accurate stock market forecasts. 
                <br />
                 Investoxx is a investment platform that leverages advanced technology and analytics to provide all users with reliable stock predictions and expert market analysis</p>
              <br />
              <div>
                <a href="#services">
                  <button id="bottone1">
                    <strong>Discover features</strong>
                  </button>
                </a>
              </div>
              {/* <HomeBackground/> */}

              <div className="terminal">
                <div className="terminalContainer">
                  <div className="terminal_toolbar">
                    <div className="butt">
                      <button className="btn btn-color"></button>
                      <button className="btn"></button>
                      <button className="btn"></button>
                    </div>
                    <p className="user"></p>
                    <div className="add_tab">+</div>
                  </div>
                  <div className="terminal_body">
                    <div className="terminal_promt">
                      <div>
                        <span className="terminal_user">investoxx@admin:</span>
                        <span className="terminal_location">~</span>
                        <span className="terminal_bling">
                          $ stocks in DB : {total}
                        </span>
                        <br />
                      </div>

                      <div>
                        <span className="terminal_user">investoxx@admin:</span>
                        <span className="terminal_location">~</span>
                        <span className="terminal_bling">
                          $ large in DB : {data[0]?.stock_count}
                        </span>
                        {/* <span className="terminal_cursor"></span> */}
                        <br />
                      </div>
                      <div>
                        <span className="terminal_user">investoxx@admin:</span>
                        <span className="terminal_location">~</span>
                        <span className="terminal_bling">
                          $ mid in DB : {data[1]?.stock_count}
                        </span>
                        {/* <span className="terminal_cursor"></span> */}
                        <br />
                      </div>
                      <div>
                        <span className="terminal_user">investoxx@admin:</span>
                        <span className="terminal_location">~</span>
                        <span className="terminal_bling">
                          $ small in DB : {data[2]?.stock_count}
                        </span>
                      </div>
                      <div>
                        <span className="terminal_user">investoxx@admin:</span>
                        <span className="terminal_location">~</span>
                        <span className="terminal_bling">$</span>
                        <span className="terminal_cursor"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="macCard">
                <div className="card">
                  <div className="tools">
                    <div className="circle">
                      <span className="red box"></span>
                    </div>
                    <div className="circle">
                      <span className="yellow box"></span>
                    </div>
                    <div className="circle">
                      <span className="green box"></span>
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: "#171717" }}
                    className="card__content"
                  >
                    <h1>Analyse</h1>
                    <h1>Predict</h1>
                    <h1>invest</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Card />
          <Used />
          <Login />
          <Footer />
        </div>
      )}
    </div>
  );
}



// function NavBar() {
//   const [open, setOpen] = React.useState(false);
  
//   const { user, updateUser } = React.useContext(UserContext);
  
//   React.useEffect(() => {
//       const check = JSON.parse(localStorage.getItem("user"));
//       if (check == null) {
//         updateUser({ loginStatus: false, user: {} });
//         return;
//       }
//       updateUser(check);
//   }, []);


//   const navigate = useNavigate();

//   const [width, setWidth] = React.useState(window.innerWidth);

//   return (
//     <>
//       <div className="navContainer">
//         <div className="logoConatiner">
//           <img src="https://investoxx-assets.oss-ap-south-1.aliyuncs.com/darkLogo.png" alt="" />
//           Investoxx
//         </div>

//         <div className="menuOptions">
//           <ul>
//             <li>
//               <a href="#home">Home</a>
//             </li>
//             <li>
//               <a href="#services">Our Services</a>
//             </li>
//             <li>
//               <a href="#contact">Contact Us</a>
//             </li>
//             <li>
//               <Link to="/blogs">Blogs</Link>
//             </li>
//           </ul>
//         </div>

//         <div className="signupOption">
//           {user?.loginStatus ? (
//             <button
//               className="signUpBTN"
//               onClick={() => navigate("/dashboard")}
//             >
//               <span style={{width:7, height:7, background:"#03C988", borderRadius:"50%",}}/>
//               Dashboard
//             </button>
//           ) : (
//             <button className="signUpBTN" onClick={() => navigate("/login")}>
//               Sign up
//               <div className="arrow-wrapper">
//                 <div className="arrow"></div>
//               </div>
//             </button>
//           )}
//         </div>

//         <div
//           className={`hamburger ${open ? "active" : " "}`}
//           onClick={() => setOpen(!open)}
//         >
//           <div className="line"></div>
//           <div className="line"></div>
//           <div className="line"></div>
//         </div>

  
//           <div style={{display:`${(width<700)?(open?"flex":"none"):"none"}`}} className="mobileMenu">
//             <ul>
//               <li onClick={() => setOpen(!open)}>
//                 <a href="#home">Home</a>
//               </li>
//               <li onClick={() => setOpen(!open)}>
//                 <a href="#services">Our Services</a>
//               </li>
//               <li onClick={() => setOpen(!open)}>
//                 <a href="#contact">Contact Us</a>
//               </li>
//               <li onClick={() => setOpen(!open)}>
//                 <Link to="/blogs">Blogs</Link>
//               </li>
//             </ul>

//             <div className="signupOption">
//               {user?.loginStatus ? (
//                 <button
//                   className="signUpBTN"
//                   onClick={() => navigate("/dashboard")}
//                 >
//                   Dashboard
//                 </button>
//               ) : (
//                 <button
//                   className="signUpBTN"
//                   onClick={() => navigate("/login")}
//                 >
//                   Sign up
//                   <div className="arrow-wrapper">
//                     <div className="arrow"></div>
//                   </div>
//                 </button>
//               )}
//             </div>


//           </div>



//         </div>
//     </>
//   );
// }
