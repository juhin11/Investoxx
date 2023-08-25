import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../screens/Loading/Loading";
import NewsCard from "../NewsCard/NewsCard";
import { useLocation, useNavigate } from "react-router-dom";
import Satisfication from "../Satisfication/Satisfication";
import Icon from "../Icon/Icon";
import IconButton from "../IconButton/IconButton";
import { UserContext } from "../../provider/Auth";

export default function NewsAnalyse({ onSidebarHide }) {
  const [loading, setLoading] = React.useState(false);

  const location = useLocation();
  const receivedData = location.state.data;
  const timestamp = new Date(receivedData.published_utc);
  const formatter = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const formattedDate = formatter.format(timestamp);

  const current_time = formattedDate

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
    <>
      {loading ? (
        <Loading />
      ) : (
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
                <div className="text-3xl font-bold text-gray-400">
                  News Analysis
                </div>
                <div className="text-sm text-gray-400">
                  Last Updated: {current_time}
                </div>
              </div>
            </div>

            <div className="p-2">
              <div className="text-2xl mt-5 font-bold text-white">
                {receivedData.length === 0 ? "News Titile" : receivedData.title}
              </div>
              <div className="text-1xl mt-5 font-bold text-grey-400">
                ~
                {receivedData.length === 0
                  ? "News Titile"
                  : receivedData.author}
              </div>
            </div>

            <img
              className="p-2"
              style={{ width: "100%", padding: "2rem" }}
              src={
                receivedData?.length === 0
                  ? "https://picsum.photos/seed/finance/400/200"
                  : receivedData.image_url
              }
              alt=""
            />
            <div className="p-2">
              <div className="text-2xl mt-5 font-bold text-white">
                Description
              </div>
              <div className="text-1xl mt-5  text-white">
                {receivedData.length === 0
                  ? "News Titile"
                  : receivedData.description}
              </div>
              <div className="text-1xl mt-5 mb-5 text-white">
                <a
                  style={{
                    padding: ".5rem 2rem",
                    background: "#111",
                    borderRadius: "100vw",
                    cursor: "pointer",
                  }}
                  href={
                    receivedData.length === 0 ? "" : receivedData.article_url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read full article
                </a>
              </div>
            </div>

            <div className="w-full p-2 lg:w-1/3">
              <div className="rounded-lg bg-card h-80">
                <TopCountries tickers={receivedData.tickers} />
              </div>
            </div>

            <div className="w-full p-2 lg:w-1/3">
              <div className="rounded-lg bg-card h-80">
                <Satisfication description={receivedData.description} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function TopCountries({ tickers }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handelSymbolSearch = (symbol) => {
    navigate(`/dashboard/search-result/${symbol}`, {
      state: { symbol: symbol },
    });
  };

  const top_stock_data = async () => {
    await axios
      .get("http://localhost:5000/api/prediction/get-top-stocks")
      .then((res) => {
        const data = res.data.resultData
          .sort(() => Math.random() - 0.5)
          .slice(0, 5);
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    top_stock_data();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex p-4 flex-col h-full">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold">Stocks In News</div>
            {/* <Icon path="res-react-dash-plus" className="w-5 h-5" /> */}
          </div>
          <br />
          {/* <div className="">favourites</div> */}
          <div className="flex items-center mt-3 flex-wrap content-start">
            <div className="">&nbsp;</div>
            {tickers.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handelSymbolSearch(item)}
                  className="mr-2 mt-2"
                  style={{
                    background: "#82818185",
                    cursor: "pointer",
                    color: "#fff",
                    padding: ".1rem .5rem",
                    borderRadius: "100vw",
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>

          <div className="flex-grow" />
        </div>
      )}
    </>
  );
}
