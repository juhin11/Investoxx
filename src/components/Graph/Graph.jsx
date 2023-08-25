import React, { useState } from "react";
import clsx from "clsx";
import 'cors'
import { useSpring, animated, config } from "react-spring";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import Icon from "../Icon/Icon";
import CustomTooltip from "../CustomTooltip/CustomTooltip";

const BASE_URL = "http://localhost:5000";




export default function Graph(props) {
    let GraphData =[
      {
          "name": "Nov",
          "revenue": 2184.538662627729,
          "expectedRevenue": 1426.7474564063473,
          "sales": 315
      },
      {
          "name": "Dec",
          "revenue": 1739.9306603123698,
          "expectedRevenue": 1312.1732694560656,
          "sales": 303
      },
      {
          "name": "Jan",
          "revenue": 2123.964575874785,
          "expectedRevenue": 1961.5405477418042,
          "sales": 80
      },
      {
          "name": "Feb",
          "revenue": 1059.558635447704,
          "expectedRevenue": 1534.586869182477,
          "sales": 255
      },
      {
          "name": "Mar",
          "revenue": 1694.0561891535006,
          "expectedRevenue": 1154.2303032889554,
          "sales": 387
      },
      {
          "name": "Apr",
          "revenue": 2494.684699462153,
          "expectedRevenue": 1983.3390819154192,
          "sales": 215
      },
      {
          "name": "May",
          "revenue": 2346.6202585942747,
          "expectedRevenue": 2138.2018664111374,
          "sales": 228
      },
      {
          "name": "June",
          "revenue": 2428.1139144911376,
          "expectedRevenue": 2365.134445234903,
          "sales": 235
      },
      {
          "name": "July",
          "revenue": 1102.3016592261442,
          "expectedRevenue": 176.25653636402262,
          "sales": 461
      }
  ]

    const [symbol, setSymbol] = useState();
    const [data, setData] = useState(GraphData);
  
    const monthlyDataAPI = `${BASE_URL}/index`;
  
   
    const getMonthlyData = async (symbol) => {
      await axios.post(monthlyDataAPI,{
        "symbol": symbol,
      })
      .then((res) => {
        const responceData = res.data.result
        const resultData =[]
        responceData.map((item) => {
          resultData.push({
            "name": item?.date,
            "revenue": item?.close,
            "expectedRevenue": item?.open,
            "sales": item?.volume
          })
        })
        setData(resultData)
      })
      .catch((err) => {
        console.log(err);
      });
  
    };
  
    // console.log(data)
  
    React.useEffect(() => {
      setSymbol(props?.symbol);
      getMonthlyData(props?.symbol);
    }, []);
  
  
    return (
      <div className="flex p-4 h-full flex-col">
        <div className="">
          <div className="flex items-center">
            <div className="font-bold text-white">{props.name}</div>
            <div className="flex-grow" />
  
            <Icon path="res-react-dash-graph-range" className="w-4 h-4" />
            <div className="ml-2">Last 2 Months</div>
            <div className="ml-6 w-5 h-5 flex justify-center items-center rounded-full icon-background">
              ?
            </div>
          </div>
          <div className="font-bold ml-5"></div>
        </div>
  
        <div className="flex-grow">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={300} data={data}>
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
                  <stop stopColor="#6B8DE3" />
                  <stop offset="1" stopColor="#7D1C8D" />
                </linearGradient>
              </defs>
              <CartesianGrid
                horizontal={false}
                strokeWidth="6"
                stroke="#252525"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tickMargin={10}
              />
              <YAxis axisLine={false} tickLine={false} tickMargin={10} interval='preserveStartEnd' type="number" domain={['auto', 'auto']} />
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Line
                activeDot={false}
                type="monotone"
                dataKey="revenue"
                stroke="#242424"
                strokeWidth="3"
                dot={false}
                strokeDasharray="8 8"
              />
              <Line
                type="monotone"
                dataKey="expectedRevenue"
                stroke="url(#paint0_linear)"
                strokeWidth="4"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
  