import React from "react";
import { useNavigate } from "react-router-dom";
import OptionCard from "../../Components/OptionCard/OptionCard";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const options = [
    {
      name: "Add New Stock",
      icon: "addStock",
      path: "/addStock",
      contentColor: "#fff",
      bgColor: "#2532a9",
    },
    {
      name: "Update Stock Performance",
      icon: "updateStocks",
      path: "/updateStocks",
      contentColor: "#fff",
      bgColor: "#1f2b90",
    },
    {
      name: "Delete Stock",
      icon: "deleteStock",
      path: "/deleteStock",
      contentColor: "#fff",
      bgColor: "#1b247c",
    },
    {
      name: "View All Stocks",
      icon: "allStock",
      path: "/allStock",
      contentColor: "#fff",
      bgColor: "#141c5e",
    },
    {
      name: "Get All Users",
      icon: "allUsers",
      path: "/allUsers",
      contentColor: "#fff",
      bgColor: "#0f1648",
    },
    {
      name: "Delete User",
      icon: "deleteUser",
      path: "/deleteUser",
      contentColor: "#fff",
      bgColor: "#2532a9",
    },
    {
      name: "Add New User",
      icon: "addUser",
      path: "/addUser",
      contentColor: "#fff",
      bgColor: "#1f2b90",
    },
    {
      name: "View All Blogs",
      icon: "allBlogs",
      path: "/allBlogs",
      contentColor: "#fff",
      bgColor: "#1b247c",
    },
    {
      name: "Add Blog",
      icon: "addBlog",
      path: "/addBlog",
      contentColor: "#fff",
      bgColor: "#141c5e",
    },
    {
      name: "View Code",
      icon: "viewCode",
      path: "/viewCode",
      contentColor: "#fff",
      bgColor: "#0f1648",
    },
  ];

  return (
    <div className="container HomeConatiner">
      <h1>Admin Page</h1>

      <div className="HomePageContainer">
        <div>
          <h2>Options</h2>
          <div className="options">
            {options.map((option, index) => {
              return <OptionCard key={index} option={option} />;
            })}
          </div>
        </div>

        <div>
          <h2>Status</h2>
          <div className="status">
            <div class="s-card">
              <div class="s-img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </div>
              <div class="s-textBox">
                <div class="s-textContent">
                  <p class="h1">Frontend</p>
                </div>
                <p class="p">
                  React: <span>Running</span>
                </p>
                <div></div>
              </div>
            </div>
            <div class="s-card">
              <div class="s-img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                  />
                </svg>
              </div>
              <div class="s-textBox">
                <div class="s-textContent">
                  <p class="h1">Backend</p>
                </div>
                <p class="p">
                  Node: <span>Running</span>
                </p>
                <div></div>
              </div>
            </div>
            <div class="s-card">
              <div class="s-img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                  />
                </svg>
              </div>
              <div class="s-textBox">
                <div class="s-textContent">
                  <p class="h1">Backend</p>
                </div>
                <p class="p">
                  Django: <span>Running</span>
                </p>
                <div></div>
              </div>
            </div>
            <div class="s-card">
              <div class="s-img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                  />
                </svg>
              </div>
              <div class="s-textBox">
                <div class="s-textContent">
                  <p class="h1">Database</p>
                </div>
                <p class="p">
                  PolarDb: <span>Running</span>
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
