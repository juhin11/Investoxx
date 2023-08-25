import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

export default function BlogCard({blog}) {

    const date = new Date(blog?.created_at);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    const newDate = `${day} ${month} ${year}`;


  return (
    <div className="blogCard">
      <div className="image">
        <img src={blog?.img_url} alt="" />
      </div>
      <div className="content">
        <a href="#">
          <span className="title">
            {blog?.title}
          </span>
        </a>
        <br />
        <Link to={`/blogs/${blog.id}`} className="action">
          Read More
          <span aria-hidden="true">→</span>
        </Link>

        <p>by ~ {blog?.author}</p>

        <p>{newDate}</p>
      </div>
    </div>
  );
}
