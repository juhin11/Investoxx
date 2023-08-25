import React from 'react'
import { UserProvider } from './provider/Auth'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home/Home'
import Login from './screens/Auth/Login'
import Contact from './components/Contact/Contact'
import Dashboard from './screens/Dashboard/Dashboard'
import { ThemeProvider } from './components/Home/Context'
import { Toaster } from 'react-hot-toast'
import NotFound from './screens/NotFound/NotFound'
import './App.css'
import Blogs from './screens/Blogs/Blogs'
import Blog from './screens/Blog/Blog'
export default function App() {
  return (
    <UserProvider>

      <Toaster/>
      <Routes>
          
        {/* <ThemeProvider> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<Blog />} />


        {/* </ThemeProvider> */}
          
          <Route path="*" element={<NotFound/>} />
      </Routes>
    </UserProvider>
  )
}
