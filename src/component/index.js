import React from 'react'
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import './index.css'
import Logo from '../images/bpreview.png'



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
    <div className='bg'>
    <div class="container-fluid text-center ">
      <div class="row p-5 ">
        <div class="col d-flex align-items-center justify-content-center">
          <div className='heading'>
          <h2><samp>I'm</samp> Bikash</h2>
          <p>Software Enginner..</p>
        </div>
        </div>
        <div class="col d-flex align-items-center justify-content-center">
          <img src={Logo} class="rounded-circle " alt="..."/>

        </div>
      </div>
    </div>


    <div class="container-fluid text-center ">
      <div className='row border-top '>
        <p className='p-4 fs-3'>Results-driven Software Engineer with expertise in React.js, JavaScript, and Spring Boot. Sharp analytical acumen, adept at conquering intricate challenges. Seeking a pivotal role to drive transformative growth and deliver impeccable software solutions.</p>
        
      </div>
      {/* <div class="row ">
        <div class="col d-flex align-items-center justify-content-center">
          <div className='heading'>
          <h2><samp>I'm</samp> Bikash</h2>
          <p>Software Enginner..</p>
        </div>
        </div>
        <div class="col d-flex align-items-center justify-content-center">
          <img src={Logo} class="rounded-circle " alt="..."/>

        </div>
      </div> */}
    </div>
    </div>
    {/* <Footer/> */}

    </>
  )
}

export default index