import React from 'react'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import './index.css'
import Logo from '../images/bpreview.jpg'



function index() {
  return (
    <>
    <Navbar/>
    {/* <div className='row'>
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
    </div> */}
    <div class="container-fluid text-center">
      <div class="row border">
        <div class="col border">
          <div className='heading'>
          <h2><samp>I'm</samp> Bikash</h2>
          <p>Software Enginner..</p>
        </div>
        </div>
        <div class="col border">
          <img src={Logo} class="rounded-circle" alt="..."/>

        </div>
      </div>
    </div>
    {/* <Footer/> */}

    </>
  )
}

export default index