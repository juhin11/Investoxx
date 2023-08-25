import axios from 'axios'
import React from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Addblog() {
  
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [image, setImage] = React.useState('')
  const [author, setAuthor] = React.useState('')

  const handleSubmit = async () => {

    console.log(title, description, image, author)

    await axios.post("https://investoxx-node.vercel.app/blogs",{
    "title": title,
    "content": description,
    "author": author,
    "img_url": image
    }).then((res)=>{
        console.log(res)
        toast.success('Blog Added')
    }).catch((err)=>{
      console.log(err)
      toast.error('Something went wrong')
    })
  }

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className='container'>
      <h1>Add Blog</h1>

      <form onSubmit={(e)=>e.preventDefault()} style={{background:"#eeeeee20", padding:"1rem", marginTop:"2rem", width:"80vw", margin:" 2rem   auto", borderRadius:".5rem"}}> 
        <input  style={{width:"100%"}} type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Title" /> <br /><br />
        {/* <input  style={{width:"100%"}} type="text" onChange={(e)=>setDescription(e.target.value)} placeholder="Description" /> <br /><br /> */}
        <textarea required style={{width:"100%"}} name="description" id="" cols="30" rows="10" onChange={(e)=>setDescription(e.target.value)} placeholder="Description"></textarea><br /><br />
        <input  style={{width:"100%"}} type="text" onChange={(e)=>setImage(e.target.value)} placeholder="Image URL" /> <br /><br />
        <input  style={{width:"100%"}} type="text" onChange={(e)=>setAuthor(e.target.value)} placeholder='Author Name' /> <br /><br />

        <button onClick={handleSubmit}>Submit</button>
      </form>
      <button style={{width:100, margin:"1rem auto"}} onClick={handleBack}>Back</button>
    </div>
  )
}
