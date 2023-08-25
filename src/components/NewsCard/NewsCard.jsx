import React from 'react'
import { useNavigate } from 'react-router-dom';
import Icon from '../Icon/Icon';
export default function NewsCard({data}) {

    const navigate = useNavigate();

    const [newsData, setNewsData] = React.useState([]);
    const [time,setTime] = React.useState("");

    React.useEffect(() => {
        setNewsData(data);
        setTime(timeAgo(data?.published_utc));
    }, [data]);

    const handelNewsAnalyse = () => {
        navigate("/dashboard/news-analyse", {state: {data: newsData}});
    }

    // convert date in utc to time ago
    const timeAgo = (date) => {
        const seconds = Math.floor((new Date() - new Date(date)) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) {
          return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
      };


    return (
        <div className='p-5'>
          <div className="w-full h-20 add-component-head" style={{backgroundImage:`url(${newsData?.length === 0?'https://picsum.photos/seed/finance/400/100': newsData?.image_url})`, backgroundSize:"contain", backgroundRepeat:"no-repeat",backgroundPosition:"center", height:"17vh"}}></div>
          <div
            className="flex flex-col items-center"
            style={{
              transform: "translate(0, -40px)",
            }}
          >

            <div style={{textAlign:"center",padding:"2rem 1rem 0 1rem"}} className="text-white font-bold mt-3">
              {newsData.length === 0 ? "News Titile" : newsData?.title}
            </div>
            <div
              className="flex items-center p-3 mt-3"
              style={{
                background: "#2f49d1",
                borderRadius: "15px",
                padding: "8px 16px",
                justifyContent: "center",
                color: "white",
                cursor: "pointer",
              }}
            >
              <Icon path="res-react-dash-search" className="w-5 h-5 text-white" />
              <div className="ml-2" onClick={handelNewsAnalyse}>Analyse</div>
            </div>

            posted on : {newsData.length === 0 ? "News Date" : time} ago
          </div>
        </div>
      );
}
