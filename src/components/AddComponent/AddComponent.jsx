import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../screens/Loading/Loading";
import Icon from "../Icon/Icon";

export default function AddComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const get_count = async () => {
    await axios
      .get(`http://localhost:5000/count`)
      .then((res) => {
        const data = res.data[0].count;
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    get_count();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
                src="https://assets.codepen.io/3685267/res-react-dash-rocket.svg"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="text-white font-bold mt-3">Our Database</div>
            <div className="mt-2 pl-5 pr-5 text-center">
              This project is enhancing day by day with the help of our users
            </div>
            <div className="mt-1">Thankyou❤️</div>
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
              <div className="ml-2">Total stocks</div>
              <div
                className="ml-2"
                style={{
                  background: "#4964ed",
                  borderRadius: "15px",
                  padding: "4px 8px 4px 8px",
                }}
              >
                {data}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
