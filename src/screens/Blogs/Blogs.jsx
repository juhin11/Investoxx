import axios from 'axios'
import React from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import BlogCard from '../../components/BlogCard/BlogCard'
import Canvas from '../Home/Canvas'
import NavBar from '../Home/NavBar'
import Loading from '../Loading/Loading'
import './Blogs.css'

export default function Blogs() {

    const [blogs, setBlogs] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const navigate = useNavigate();

    const getBlogs = async () => {
        setLoading(true);
        axios.get("http://localhost:5000/blogs")
        .then((res) => {
            console.log(res.data);
            setBlogs(res.data);
            setLoading(false);
        })
        .catch((err) => {
            setLoading(false);
            toast.error("Something went wrong");
            navigate("/");
            console.log(err);
        })
    }

    React.useEffect(() => {
        getBlogs();
    }, [])



  return (
    <>
        {
        
        loading ? <Loading/> :

        <>
        <NavBar/>  
        <div className="blogsContainer" style={{position:"relative"}}>
          <Canvas/>
          <div style={{zIndex:100}}>

            <h1>Blogs</h1>
            <div className="blogCardConatiner">

                {
                    blogs?.map((blog) => {
                        return <BlogCard blog={blog}/>
                    })
                }

            </div>
            </div>

        
        </div>
        </>
        }
    </>
  )
}
