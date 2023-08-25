import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AllUsers() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getData = async () => {
    await axios
      .get("https://investoxx-node.vercel.app/api/auth/get-all-user-data/")
      .then((res) => {
        setData(res.data.result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
        handleBack();
      });
  };

  React.useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
    {loading ? (
      <h1>Loading...</h1>
    ) : (
      <div className="container">
        <h1>All Users</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            padding: "2rem",
            gap: "1rem",
          }}
        >
          {data.map((item) => {
            return (
              <div style={{ background: "#eeeeee20", padding: "1rem" }}>
                <h3>Name : {item.name}</h3>
                <p>Email : {item.email}</p>
                <p>Created at : {item.created_at}</p>
              </div>
            );
          })}
        </div>
        <button
          style={{ width: 100, margin: "1rem auto" }}
          onClick={handleBack}
        >
          Back
        </button>
      </div>
    )}
  </>
  )
}
