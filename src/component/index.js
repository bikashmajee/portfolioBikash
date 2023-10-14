import React from 'react'
import Navbar from '../common/navbar'
// import Footer from '../common/footer'
import './index.css'
// import Logo from '../images/bpreview.png'
import kingImg from '../images/kingImg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  Facebook  from '../images/facebook.svg'
import  Instagram  from '../images/instagram.svg'
import  Linkedin  from '../images/linkedin.svg'
import  Github  from '../images/github.svg'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


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
    {/* <div class="container-fluid text-center ">
      <div class="row p-5 ">
        <div class="col d-flex align-items-center justify-content-center">
          <div className='heading'>
          <h2><samp>I'm</samp> Bikash</h2>
          <p>Software Enginner..</p>
          <button>About Me</button>
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
    </div> */}

      <div class="container-fluid">
        <div class="row align-items-start mt-3">
          <div class="col height d-flex align-items-center">
          <div className='border rounded-circle  h-75 w-100 d-flex align-items-center light shadow-lg'>

          <div className='border rounded-circle  h-75 w-75 white  d-flex align-items-center shadow-lg'>
              <div className='container text-center'>
                <div className='heading '>
                  <h2><samp>I'm</samp> Bikash</h2>
                  <p className=''>Software Enginner</p>
                </div>
                <div class="container px-4">
              <div class="row gx-5 d-flex justify-content-around">
                <div class="col-2">
                <div class=""><img src={Github} width="25" height="30"/></div>
                </div>
                <div class="col-2">    
                  <div class="  "><img src={Linkedin} width="25" height="30"/></div>
                </div>
                <div class="col-2">
                  <div class="  "><img src={Instagram} width="25" height="30"/> </div>
                </div>
                <div class="col-2">
                  <div class="  "><img src={Facebook} width="25" height="30"/> </div>
                </div>
              </div>
            </div>
              </div>
           
          </div>
          </div>
          {/* <div class="border border-info"></div> */}

          </div>
          {/* <div class="col border"> */}
          <div class="col height d-flex align-items-center d-flex justify-content-center">
          <div className=' d-flex align-items-center light '>
            <img  className ='fit' src={kingImg}/>
          </div>
          </div>
        </div>
      </div>
    </div>
    {/* <Footer/> */}

    </>
  )
}

export default index