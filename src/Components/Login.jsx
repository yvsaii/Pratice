import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Login.css'
export default function Login() {
  return (
   <div style={{display:"flex", flexDirection:"column"}}>
    <Header />
     <div className='loginForm'>
      <div className="form">
        <h1>Sign in to Green Cart</h1>
        <p>Use your mobile number to login</p>
        <form action="">
          <input type="number" placeholder='Mobile No' />
          <input type="password" placeholder='Password' />
          <button>Sign in</button>
        </form>
      </div>
      <div className="formimage">
        <h1>Hello,</h1>
        <p>Enter your Details and start your journey with us</p>

      </div>
    </div>
    <Footer />
   </div>
  )
}
