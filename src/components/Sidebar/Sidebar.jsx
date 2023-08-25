import clsx from "clsx";
import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import IconButton from "../IconButton/IconButton";
import Icon from "../Icon/Icon";
import MenuItem from "../MenuItem/MenuItem";
import Image from "../Image/Image";
import { UserContext } from "../../provider/Auth";
import Loading from "../../screens/Loading/Loading";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ onSidebarHide, showSidebar }) {
  const { user, updateUser } = React.useContext(UserContext);
  const navigate = useNavigate()

  const sidebarItems = [
    [
      { id: "0", title: "Dashboard", notifications: false, link: "/dashboard" },
      { id: "1", title: "News", notifications: false, link: "/dashboard/news" },
      {
        id: "2",
        title: "Portfolio",
        notifications: false,
        link: "/dashboard/portfolio",
      },
      {
        id: "3",
        title: "Watchlist",
        notifications: false,
        link: "/dashboard/watchlist",
      },
    ],
    [
      { id: "4", title: "Tasks", notifications: false },
      { id: "5", title: "Reports", notifications: false },
      { id: "6", title: "Settings", notifications: false },
    ],
  ];

  const [loading, setLoading] = React.useState(false);

  const handelLogout = () => {
    setLoading(true);
    updateUser(null);
    localStorage.removeItem("user");
    toast("Logged out successfully", {icon: "👋"});
    navigate("/");
  };

  const [selected, setSelected] = useState("0");
  const { dashOffset, indicatorWidth, precentage } = useSpring({
    dashOffset: 26.015,
    indicatorWidth: 70,
    precentage: 77,
    from: { dashOffset: 113.113, indicatorWidth: 0, precentage: 0 },
    config: config.molasses,
  });
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className={clsx(
            "fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col z-10",
            showSidebar ? "flex" : "hidden"
          )}
        >
          <div className="flex-shrink-0 overflow-hidden p-2">
            <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-top" style={{cursor:"pointer"}} onClick={()=>navigate('/')} >
              {/* <IconButton icon="res-react-dash-logo" className="w-10 h-10" /> */}
              <img width={50} src="https://investoxx-assets.oss-ap-south-1.aliyuncs.com/lightLogo.png" alt="" />
              <div className="block sm:hidden xl:block ml-2 font-bold text-xl text-white">
                Investoxx
              </div>
              <div className="flex-grow sm:hidden xl:block" />
              <IconButton
                icon="res-react-dash-sidebar-close"
                className="block sm:hidden"
                onClick={onSidebarHide}
              />
            </div>
          </div>
          <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
            {sidebarItems[0].map((i) => (
              <MenuItem
                key={i.id}
                item={i}
                onClick={setSelected}
                selected={selected}
                link={i.link}
              />
            ))}

            <div className="flex-grow" />
          </div>

          <div className="flex-shrink-0 overflow-hidden p-2">
            <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-bottom">
              <Image path="mock_faces_8" className="w-10 h-10" />
              <div className="block sm:hidden xl:block ml-2 font-bold ">
                {user?.loginStatus ? user.user.name : "Login!"} <span style={{color:"green"}}>•</span>
              </div>
              <div className="flex-grow block sm:hidden xl:block" />
              {/* Icon for logout */}
              <svg
                style={{ cursor: "pointer" }}
                onClick={handelLogout}
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
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
