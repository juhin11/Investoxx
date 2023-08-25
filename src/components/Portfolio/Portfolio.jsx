import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../provider/Auth";
import Loading from "../../screens/Loading/Loading";
import Icon from "../Icon/Icon";
import IconButton from "../IconButton/IconButton";

export default function Portfolio({onSidebarHide}) {
  const { user, updateUser } = React.useContext(UserContext);
  // format of date monthname day
  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const navigate = useNavigate();

  const [search , setSearch] = useState("");
  const handelSearch = (e) => {
    e.preventDefault();
    navigate(`/dashboard/search-result/${search}`, {state: {symbol: search}})
  }

  return (
    <div className="flex w-full">
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0"></div>
      <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
        
      <div className="w-full sm:flex p-2 items-end">
          <div className="sm:flex-grow flex justify-between">
            <div className="">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-white">Hello {user?.loginStatus? user.user.name : "Login!"}</div>

              </div>
              <div className="flex items-center">
                <Icon
                  path="res-react-dash-date-indicator"
                  className="w-3 h-3"
                />
                <div className="ml-2">{date}</div>
              </div>
            </div>
            <IconButton
              icon="res-react-dash-sidebar-open"
              className="block sm:hidden"
              onClick={onSidebarHide}
            />
          </div>
          <div className="w-full sm:w-56 mt-4 sm:mt-0 relative">
            <Icon
              path="res-react-dash-search"
              className="w-5 h-5 search-icon left-3 absolute"
            />
            <form onSubmit={handelSearch} >
              <input
                type="text"
                name="company_website"
                id="company_website"
                className="pl-12 py-2 pr-2 block w-full rounded-lg border-gray-300 bg-card"
                placeholder="search symbol"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
        </div>
        
        
        
        
        
        
        
        
        <div className="w-full sm:flex p-2 items-end">
          <div className="sm:flex-grow flex flex-wrap justify-between">
            <div className="text-3xl font-bold text-white">
              {user?.loginStatus ? user.user.name : "Login!"}'s Portfoilio
            </div>

            <div className="w-full mt-5 p-2 lg:w-3/3">
              <div className="rounded-lg bg-card h-80">
                <TopCountries email={user.user.email} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopCountries({ email }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const top_stock_data = async () => {
    await axios
      .get(`http://localhost:5000/api/portfolio/getPortfolio/${email}`)
      .then((res) => {
        const data = res.data.result;
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    top_stock_data();
  }, []);

  const navigate = useNavigate();

  const handelSymbolSearch = (symbol) => {
    navigate(`/dashboard/search-result/${symbol}`, {
      state: { symbol: symbol },
    });
  };

  const handelDelete = async (symbol) => {
    setLoading(true);
    await axios
      .post("http://localhost:5000/api/portfolio/deleteStock", {
        symbol: symbol,
        email: email,
      })
      .then(async (res) => {
        await top_stock_data();
        toast.success("Stock Deleted Successfully!");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong!");
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex p-4 flex-col h-full">
          <div className="flex items-center mt-3">
            <div className="">&nbsp;</div>
            <div className="ml-2">Symbol</div>
            <div className="flex-grow" />
            <div className="">Name</div>
            <div className="flex-grow" />
            <div className="">Predicted</div>
            <div className="flex-grow" />
            <div className="">Added on</div>
            <div className="flex-grow" />
            <div className="">Delete</div>
          </div>
          {data.map((i, index) => {
            const timestamp = new Date(i.added_date);
            const formatter = new Intl.DateTimeFormat("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            });
            const formattedDate = formatter.format(timestamp);
      

            return (
              <div className="flex items-center mt-3" key={index}>
                <div className="">{index + 1}</div>
                <div
                  onClick={() => handelSymbolSearch(i.symbol)}
                  className="ml-2"
                  style={{
                    background: "#82818185",
                    cursor: "pointer",
                    color: "#fff",
                    padding: ".1rem .5rem",
                    borderRadius: "100vw",
                  }}
                >
                  {i.symbol}
                </div>
                &nbsp;
                <Icon path="res-react-dash-tick" />
                <div className="flex-grow" />
                <div className="">{`${i.name}`}</div>
                <div className="flex-grow" />
                <div className="">{`$${i.predicted_price}`}</div>
                <div className="flex-grow" />
                <div className="">{`${formattedDate}`}</div>
                <div className="flex-grow" />
                <div
                  onClick={() => handelDelete(i.symbol)}
                  className=""
                  style={{
                    background: "red",
                    padding: ".25rem",
                    borderRadius: 5,
                    color: "white",
                    cursor: "pointer",
                  }}
                >
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
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              </div>
            );
          })}

          <div className="flex-grow" />
        </div>
      )}
    </>
  );
}
