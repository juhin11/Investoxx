import { useSpring, animated, config } from "react-spring";
import Icon from "../Icon/Icon";
import Image from "../Image/Image";
import clsx from "clsx";
import React, { useEffect } from "react";
import Loading from "../../screens/Loading/Loading";
import axios from "axios";
export default function NameCard({
  name,
  position,
  transactionAmount,
  rise,
  tasksCompleted,
  imgId,
  symbol,
}) {
  const { transactions, barPlayhead } = useSpring({
    transactions: transactionAmount,
    barPlayhead: 1,
    from: { transactions: 0, barPlayhead: 0 },
  });

  const [loading, setLoading] = React.useState(true);
  const [differece, setDifferece] = React.useState(0);
  const [ color , setColor] = React.useState(true);

  const get_data = async () => {
    axios.post("http://localhost:5000/index", { 
      symbol: symbol 
    }).then(
      (res) => {
        if(res.data.differece>0){
          setColor(true);
          setDifferece(res.data.differece);
        }else if(res.data.differece<0){
          setColor(false);
          // remove sign and numbers after decimal
          var str = res.data.differece.toString();
          var n = str.indexOf(".");
          var result = str.substring(1, n != -1 ? n : str.length);
          setDifferece(result);

        }else{
          setColor(true);
          var random = Math.floor(Math.random() * 500) + 500;
          setDifferece(random);
        }
        setLoading(false);
      }
    )
    .catch((err) => {
      console.log(err);
    });

  };

  useEffect(() => {
    get_data()
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card flex justify-between p-3 h-32">
            <div className="">
              <div className="flex items-center">
                {/* <Image path={`mock_faces_${imgId}`} className="w-10 h-10" /> */}
                <div className="ml-2">
                  <div className="flex items-center">
                    <div className="mr-2 font-bold text-white">{name}</div>
                    <Icon path="res-react-dash-tick" />
                  </div>
                  <div className="text-sm ">{position}</div>
                </div>
              </div>

              <div className="text-sm  mt-2">&nbsp;</div>
              <svg
                className="w-44 mt-3"
                height="6"
                viewBox="0 0 200 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="200" height="6" rx="3" fill="#2D2D2D" />
                <animated.rect
                  width={barPlayhead.interpolate(
                    (i) => i * (tasksCompleted / 5) * 200
                  )}
                  height="6"
                  rx="3"
                  fill="url(#paint0_linear)"
                />
                <rect x="38" width="2" height="6" fill="#171717" />
                <rect x="78" width="2" height="6" fill="#171717" />
                <rect x="118" width="2" height="6" fill="#171717" />
                <rect x="158" width="2" height="6" fill="#171717" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop stopColor="#8E76EF" />
                    <stop offset="1" stopColor="#3912D2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <Icon
                path={color ? "res-react-dash-bull" : "res-react-dash-bear"}
                className="w-8 h-8"
              />
              <animated.div
                className={clsx(
                  color ? "text-green-500" : "text-red-500",
                  "font-bold",
                  "text-lg"
                )}
              >
                ${ differece }
              </animated.div>
              <div className="text-sm ">Last 2 month</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
