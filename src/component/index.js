import React from 'react'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import './index.css'
// import Logo from '../images/logo.png'
// import Logo from '../images/body-logo.png'
import Logo from '../images/bpreview.jpg'



function index() {
  return (
    <>
    <Navbar/>
    <div className='row'>
      <div className='column right'>
        <div className='heading'>
          <h2><samp>I'm</samp> Bikash</h2>
          <p>Software Enginner..</p>
        </div>
          
      </div>
      <div className='column left'>
        <div className='leftbody'>
          <img src={Logo}/>
        </div> 
      </div>
    </div>
    {/* <Footer/> */}

    </>
  )
}

export default index