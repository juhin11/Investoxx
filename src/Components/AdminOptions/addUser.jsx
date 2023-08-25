import axios from 'axios'
import React from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function AddUser() {
    
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [author, setAuthor] = React.useState('')

  const handleSubmit = async () => {

    await axios.post("https://investoxx-node.vercel.app/api/auth/register",{
    "name": title,
    "password": description,
    "email": author,
    }).then((res)=>{
        console.log(res)
        toast.success('User Added')
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
    <h1>Add User</h1>

    <form onSubmit={(e)=>e.preventDefault()} style={{background:"#eeeeee20", padding:"1rem", marginTop:"2rem", width:"500px", margin:" 2rem   auto", borderRadius:".5rem"}}>
      <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Name" /> <br />
      <br />
      <input type="password" onChange={(e)=>setDescription(e.target.value)} placeholder="Password" /> <br />
      <br />
      <input type="email" onChange={(e)=>setAuthor(e.target.value)} placeholder='Email' /> <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
    <button style={{width:100, margin:"1rem auto"}} onClick={handleBack}>Back</button>
  </div>
  )
}
