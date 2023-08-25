import React from 'react'
import './NavBar.css'
import { UserContext } from '../../provider/Auth'
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const [open, setOpen] = React.useState(false);
  
  const { user, updateUser } = React.useContext(UserContext);
  
  React.useEffect(() => {
      const check = JSON.parse(localStorage.getItem("user"));
      if (check == null) {
        updateUser({ loginStatus: false, user: {} });
        return;
      }
      updateUser(check);
  }, []);


  const navigate = useNavigate();

  const [width, setWidth] = React.useState(window.innerWidth);

  return (
    <>
      <div className="navContainer">
        <div className="logoConatiner" onClick={()=>navigate('/')}>
          <img src="https://investoxx-assets.oss-ap-south-1.aliyuncs.com/darkLogo.png" alt="" />
          Investoxx
        </div>

        <div className="menuOptions">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>

        <div className="signupOption">
          {user?.loginStatus ? (
            <button
              className="signUpBTN"
              onClick={() => navigate("/dashboard")}
            >
              <span style={{width:7, height:7, background:"#03C988", borderRadius:"50%",}}/>
              Dashboard
            </button>
          ) : (
            <button className="signUpBTN" onClick={() => navigate("/login")}>
              Sign up
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
          )}
        </div>

        <div
          className={`hamburger ${open ? "active" : " "}`}
          onClick={() => setOpen(!open)}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

  
          <div style={{display:`${(width<700)?(open?"flex":"none"):"none"}`}} className="mobileMenu">
            <ul>
              <li onClick={() => setOpen(!open)}>
                <a href="#home">Home</a>
              </li>
              <li onClick={() => setOpen(!open)}>
                <a href="#services">Our Services</a>
              </li>
              <li onClick={() => setOpen(!open)}>
                <a href="#contact">Contact Us</a>
              </li>
              <li onClick={() => setOpen(!open)}>
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>

            <div className="signupOption">
              {user?.loginStatus ? (
                <button
                  className="signUpBTN"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </button>
              ) : (
                <button
                  className="signUpBTN"
                  onClick={() => navigate("/login")}
                >
                  Sign up
                  <div className="arrow-wrapper">
                    <div className="arrow"></div>
                  </div>
                </button>
              )}
            </div>


          </div>



        </div>
    </>
  );
}


export default NavBar