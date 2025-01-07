import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './pages/user'
import UserProfile from './pages/userprofile'
import Forgotpassword from './pages/forgotpassword'
import Login from './pages/login'
import Register from './pages/register'
import Resetpw from './pages/resetpw'
import Admin from './pages/admin'
import AdminUsers from './pages/adminusers'
import AdminProducts from './pages/adminproduct'
import UserOrders from './pages/userorder'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/reset" element={<Resetpw />} />
          <Route path="/home" element={<User />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/orders" element={<UserOrders />} />
          <Route path="/forgot" element={<Forgotpassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/users" element={<AdminUsers />} />
          <Route path="/products" element={<AdminProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App