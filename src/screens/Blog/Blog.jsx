import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Canvas from "../Home/Canvas";
import NavBar from "../Home/NavBar";
import Loading from "../Loading/Loading";
import "./Blog.css";
export default function Blog() {
  // get the id form the url

  const id = window.location.pathname.split("/")[2];
  const [blog, setBlog] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [date, setDate] = React.useState("");
  const navigate = useNavigate();

  const getBlog = async () => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/blogs/${id}`)
      .then((res) => {
        console.log(res.data[0]);
        setBlog(res.data[0]);
        setLoading(false);

        const date = new Date(res.data[0].created_at);
        const month = date.toLocaleString("default", { month: "long" });
        const day = date.getDate();
        const year = date.getFullYear();
        const newDate = `${day} ${month} ${year}`;
        setDate(newDate);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Something went wrong");
        navigate("/");
        console.log(err);
      });
  };

  React.useEffect(() => {
    getBlog();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div style={{position:"relative"}}>
          <NavBar />
            <Canvas />
          <div className="blogConatiner">
            <h1>{blog.title}</h1>
            <img src={blog.img_url} alt="" />
            <div>
              <div>
                <p>Author ~ {blog.author}</p>
                <p>Published At - {date}</p>
              </div>

              <p>{blog?.content}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
