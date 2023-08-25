import React from "react";
import { useNavigate } from "react-router-dom";
import "./OptionCard.css";
import addBlog from "../../assets/SVGS/addBlog.svg"
import addStock from "../../assets/SVGS/addStock.svg"
import addUser from "../../assets/SVGS/addUser.svg"
import allBlogs from "../../assets/SVGS/allBlogs.svg"
import allStock from "../../assets/SVGS/allStock.svg"
import allUsers from "../../assets/SVGS/allUsers.svg"
import blogCount from "../../assets/SVGS/blogCount.svg"
import deleteStock from "../../assets/SVGS/deleteStock.svg"
import deleteUser from "../../assets/SVGS/deleteUser.svg"
import stockCount from "../../assets/SVGS/stockCount.svg"
import updateStocks from "../../assets/SVGS/updateStocks.svg"
import userCount from "../../assets/SVGS/userCount.svg"
import viewCode from "../../assets/SVGS/viewCode.svg"

export default function OptionCard({option}) {
  const navigate = useNavigate()
  
  const handelRoute = () => {
        
    if(option.icon === "allBlogs"){
      window.location.href = "https://www.investoxx.tech/blogs"
    }
    if(option.icon === "viewCode"){
      window.location.href = "https://github.com/karankewat02/Investoxx"
    }
    navigate(`/adminOption${option.path}`)
  }



  return (
    <div style={{background:option.bgColor}} className="item" onClick={handelRoute}>

      {option.icon === "addBlog" && <img src={addBlog} alt="" />}
      {option.icon === "addStock" && <img src={addStock} alt="" />}
      {option.icon === "addUser" && <img src={addUser} alt="" />}
      {option.icon === "allBlogs" && <img src={allBlogs} alt="" />}
      {option.icon === "allStock" && <img src={allStock} alt="" />}
      {option.icon === "allUsers" && <img src={allUsers} alt="" />}
      {option.icon === "blogCount" && <img src={blogCount} alt="" />}
      {option.icon === "deleteStock" && <img src={deleteStock} alt="" />}
      {option.icon === "deleteUser" && <img src={deleteUser} alt="" />}
      {option.icon === "stockCount" && <img src={stockCount} alt="" />}
      {option.icon === "updateStocks" && <img src={updateStocks} alt="" />}
      {option.icon === "userCount" && <img src={userCount} alt="" />}
      {option.icon === "viewCode" && <img src={viewCode} alt="" />}


      <span style={{color:option.contentColor}} className="text"> {option.name} </span>
    </div>
  );
}
