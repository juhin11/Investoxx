import React from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import './Entry.css'

export default function Entry() {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

    const navigate = useNavigate();
    const handelLogin = () => {
        if(username === '' || password === ''){
            toast.error('Please fill all the fields') 
            return
        }
        if(username === 'admin' && password === 'investoxx'){
          navigate('/home')
          toast.success('Login Successfull')
        }else{
          toast.error('Invalid Credentials')
        }
    }

  return (
    <div className='container EntryConatiner'>
        <h1>Welcome Admin</h1>
        <form onSubmit={handelLogin}>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Username" /> <br />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" /> <br />
            <button onClick={handelLogin}>Login</button>
        </form>
        <img src="https://investoxx-assets.oss-ap-south-1.aliyuncs.com/footer.svg" alt="" />
    </div>
  )
}
