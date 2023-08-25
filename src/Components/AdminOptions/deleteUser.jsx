import axios from 'axios'
import React from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function DeleteUser() {
  const [title, setTitle] = React.useState('')

  const handleSubmit = async () => {
    await axios.post("https://investoxx-node.vercel.app/api/auth/delete-user",{
      email: title,
    }).then((res)=>{
        console.log(res)
        toast.success('User Deleted')
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
    <h1>Delete User</h1>

    <form onSubmit={(e)=>e.preventDefault()} style={{background:"#eeeeee20", padding:"1rem", marginTop:"2rem", width:"500px", margin:" 2rem   auto", borderRadius:".5rem"}}>
      <input type="email" onChange={(e)=>setTitle(e.target.value)} placeholder="User Email" /> <br />
        <br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
    <button style={{width:100, margin:"1rem auto"}} onClick={handleBack}>Back</button>
  </div>
  )
}
