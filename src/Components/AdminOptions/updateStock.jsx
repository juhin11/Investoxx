import axios from 'axios'
import React from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function UpdateStock() {
  const [title, setTitle] = React.useState('')

  const handleSubmit = async () => {
    await axios.post("https://investoxx-node.vercel.app/api/prediction/update-prediction",{
      symbol: title,
    }).then((res)=>{
        console.log(res)
        toast.success('Stock Performance Updated')
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
    <h1>Update Stock Performance</h1>

    <form onSubmit={(e)=>e.preventDefault()} style={{background:"#eeeeee20", padding:"1rem", marginTop:"2rem", width:"500px", margin:" 2rem   auto", borderRadius:".5rem"}}>
      <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Symbol" /> <br />
        <br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
    <button style={{width:100, margin:"1rem auto"}} onClick={handleBack}>Back</button>
  </div>
  )
}
