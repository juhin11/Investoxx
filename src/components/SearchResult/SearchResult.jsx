import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../provider/Auth";
import Loading from "../../screens/Loading/Loading";
import AddComponent from "../AddComponent/AddComponent";
import Graph from "../Graph/Graph";
import Icon from "../Icon/Icon";
import IconButton from "../IconButton/IconButton";

export default function SearchResult({ onSidebarHide }) {
  const [loading, setLoading] = React.useState(true);
  const [found, setFound] = React.useState(false);
  const [data, setData] = React.useState({});
  const [date, setDate] = React.useState("");
  const location = useLocation();
  const receivedData = location.state.symbol;
  const {user , updateUser} = React.useContext(UserContext)
  const [mounted, setMounted] = useState(false);
  // const [dataMounted, setDataMounted] = useState(false);

  const update_performance = async () => {
    setLoading(true);
    await axios
      .post(`http://localhost:5000/api/prediction/update-prediction`, {
        symbol: receivedData,
      })
      .then((res) => {
        toast.success("Performance Updated");
        setMounted(true)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const get_data = async () => {
    await axios
      .get(
        `http://localhost:5000/api/prediction/get-prediction/${receivedData}`
      )
      .then((res) => {
        console.log(res.data);
        setFound(true);
        setData(res.data);
        const timestamp = new Date(res.data.result[0].analysis_date);
        const formatter = new Intl.DateTimeFormat("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });
        const formattedDate = formatter.format(timestamp);
        setDate(formattedDate);
        if(!mounted){
          setMounted(true)
          update_performance();
        }

        // setDate(res.data.result[0].analysis_date);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ticker Not Found in our database");
        setFound(false);
        setLoading(false);
      });
  };

  React.useEffect(() => {
    if(!mounted){
      setMounted(true)
      get_data();
    }
  }, [mounted]);

  const handelAddToPortfolio = async () => {
    setLoading(true);
    await axios.post('http://localhost:5000/api/portfolio/addStock', {
      "symbol":receivedData,
      "name":data.result[0].name,
      "predicted_price" : data.result[0].predicted_performance,
      "email" : user.user.email
    })
    .then((res) => {
      toast.success("Stock Added to Portfolio");
      setLoading(false);
    })
    .catch((err) => {
      toast.error("Stock Already in Portfolio");
      setLoading(false);
    });
  };

  const handelAddToWatchlist = async () => {
    setLoading(true);
    await axios.post('http://localhost:5000/api/watchlist/addStock', {
      "symbol":receivedData,
      "name":data.result[0].name,
      "email" : user.user.email
    })
    .then((res) => {
      toast.success("Stock Added to watchlist");
      setLoading(false);
    })
    .catch((err) => {
      toast.error("Stock Already in watchlist");
      setLoading(false);
    });
  };


  // format of date monthname day
  const dates = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const navigate = useNavigate();

  const [search , setSearch] = useState("");

  const satistfactionData = "Shares of XYZ company rose today after the company reported strong earnings in the latest quarter. The positive earnings report was driven by increased sales and cost-cutting measures, and analysts are optimistic about the company's future prospects. The company's CEO expressed confidence in the company's growth potential, and investors responded positively, pushing the stock price up by 5%."

  const handelSearch = (e) => {
    e.preventDefault();
    navigate(`/dashboard/search-result/${search}`, {state: {symbol: search}})
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : found ? (
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
              <div className="sm:flex-grow flex justify-between">
                <div className="text-3xl font-bold text-gray-400 mt5">
                  {data.result[0].name} : {receivedData}
                </div>
                <div className="text-1xl text-gray-400">Analysis : {dates}</div>
              </div>
            </div>

            <div className="w-full p-2 lg:w-3/3">
              <div className="rounded-lg bg-card sm:h-80 h-60">
                <Graph symbol={receivedData} name={data.result[0].name} />
              </div>
            </div>

            <div className="w-full p-2 lg:w-1/3">
              <div className="rounded-lg bg-card overflow-hidden h-80">
                <DetailComponent data={data.result[0]} date={date} />
              </div>
            </div>

            <div className="w-full p-2 lg:w-1/3">
              <div className="rounded-lg bg-card overflow-hidden h-80">
                <div
                  className="flex items-center p-5 mt-3"
                  style={{
                    background: "#2f49d1",
                    borderRadius: "15px",
                    padding: "8px 16px",
                    justifyContent: "center",
                    color: "white",
                    alignItems: "center",
                    width: "50%",
                    margin: "25% auto 0 auto",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zM10 8a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 0110 8z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <div onClick={handelAddToPortfolio} className="ml-2">Add to Portfolio</div>
                </div>
                <div
                  className="flex items-center p-3 mt-3"
                  style={{
                    background: "#2f49d1",
                    borderRadius: "15px",
                    padding: "8px 16px",
                    justifyContent: "center",
                    color: "white",
                    alignItems: "center",
                    width: "50%",
                    margin: "10% auto 0 auto",
                    cursor: "pointer",

                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path
                      fill-rule="evenodd"
                      d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <div onClick={handelAddToWatchlist} className="ml-2">Add to watchlist</div>
                </div>
              </div>
            </div>

            <div className="w-full p-2 lg:w-1/3">
              <div className="rounded-lg bg-card overflow-hidden h-80">
                <NewsComponent symbol={receivedData} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <TickerNotFound symbol={receivedData} />
      )}
    </>
  );
}

function TickerNotFound({ symbol }) {
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();
  const API = "http://localhost:5000/api/prediction/add-prediction";
  const handelAddStock = async () => {
    setLoading(true);
    await axios
      .post(API, {
        symbol: symbol,
      })
      .then((res) => {
        // console.log(res)
        toast.success("Stock Added Successfully");
        navigate("/dashboard");
        setLoading(false);
      })
      .catch((err) => {
        toast.error("No such stock found");
        navigate("/dashboard");
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex w-full">
          <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0"></div>
          <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
            <div className="w-full sm:flex p-2 items-end">
              <div className="sm:flex-grow flex-wrap flex justify-between">
                <div className="text-3xl font-bold text-gray-400 mt-5 text-center">
                  Ticker Not Found : {symbol}
                </div>

                <div className="w-full mt-10 p-2 lg:w-3/3">
                  <div className="rounded-lg bg-card overflow-hidden h-80">
                    <div>
                      <div className="w-full h-20 add-component-head" />
                      <div
                        className="flex flex-col items-center"
                        style={{
                          transform: "translate(0, -40px)",
                        }}
                      >
                        <div
                          className=""
                          style={{
                            background: "#414455",
                            width: "80px",
                            height: "80px",
                            borderRadius: "999px",
                          }}
                        >
                          <img
                            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/career-startup-1938733-1644958.png"
                            alt=""
                            className="w-full h-full"
                          />
                        </div>
                        <div className="text-2xl text-white font-bold mt-3">
                          Help up improve
                        </div>
                        <div className="mt-2">
                          Symbol of stock you reqested is currently not in our
                          database
                        </div>
                        <div className="mt-1">
                          Just click on the button to add.
                        </div>
                        <div
                          className="flex items-center p-3 mt-3"
                          style={{
                            background: "#2f49d1",
                            borderRadius: "15px",
                            padding: "8px 16px",
                            justifyContent: "center",
                            color: "white",
                          }}
                        >
                          <div
                            onClick={handelAddStock}
                            style={{ cursor: "pointer" }}
                            className="ml-2"
                          >
                            Add
                          </div>
                          <Icon
                            path="res-react-dash-add-component"
                            className="w-5 h-5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function DetailComponent({ data, date }) {
  return (
    <div className="p-5">
      <div className="text-2xl mt-2 font-bold text-white">
        Current Price : ${data.last_known_price}
      </div>
      <div
        className="text-1xl mt-2 font-bold"
        style={{
          color:
            data.last_known_price > data.predicted_performance
              ? "red"
              : "green",
        }}
      >
        Predicted Price : ${data.predicted_performance}
      </div>

      <br />
      <hr />

      <div className="text-1xl mt-2 text-grey-400">Other info</div>
      <div className="text-1xl mt-2 text-white">
        Market Cap : ${data.market_cap}
      </div>
      <div className="text-1xl mt-2 text-white">
        Market Size : {data.stock_type}
      </div>
      <div className="text-1xl mt-2 text-white">
        Last date of predeiction : {date}
      </div>
    </div>
  );
}

function NewsComponent({ symbol }) {

  const navigate = useNavigate();

  const handelGetNews = () => {
    navigate("/dashboard/news" , {state : {API : `https://api.polygon.io/v2/reference/news?ticker=${symbol}&apiKey=_UQ5h1LONGUswPwxAjNXISHMSwRoWAtH`}});
  };

  return (
    <div>
      <div className="w-full h-20 add-component-head" />
      <div
        className="flex flex-col items-center"
        style={{
          transform: "translate(0, -40px)",
        }}
      >
        <div
          className=""
          style={{
            background: "#414455",
            width: "80px",
            height: "80px",
            borderRadius: "999px",
          }}
        >
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/news-33-165315.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="text-white font-bold mt-3">Search for stock news</div>
        <div className="mt-2">Get the news related to this stock</div>
        <div className="mt-1">Just click on the button to search</div>
        <div
          className="flex items-center p-3 mt-3"
          style={{
            background: "#2f49d1",
            borderRadius: "15px",
            padding: "8px 16px",
            justifyContent: "center",
            color: "white",
          }}
        >
          {/* <Icon path="res-react-dash-add-component" className="w-5 h-5" /> */}
          <div style={{ cursor:"pointer" }} onClick={handelGetNews} className="ml-2">Get News</div>
        </div>
      </div>
    </div>
  );
}
