import React from 'react'
import Navbar from '../common/navbar'
// import Footer from '../common/footer'
import './index.css'
// import Logo from '../images/bpreview.png'
import kingImg from '../images/king.png'
import iexceesd from '../images/iexceedlogo.png'
import vmokshaLogo from '../images/vmokshaLogo.jpg'
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
        <div class="row align-items-start mt-3 p-3">
          <div class="col height d-flex align-items-center">
          <div className='border rounded-circle  h-75 w-100 d-flex align-items-center light shadow-lg'>

          <div className='border rounded-circle  h-75 w-75 white  d-flex align-items-center shadow-lg'>
              <div className='container text-center'>
                <div className='heading '>
                  <h2><samp className='firstLetter'>I'm</samp> Bikash</h2>
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
          </div>
          {/* <div class="col border"> */}
            <div class="col height d-flex align-items-center d-flex justify-content-center">
            <div className=' d-flex align-items-center '>
              <img  className ='fit' src={kingImg}/>
            </div>
          </div>

        </div>
        {/* Exprience */}
        <div class="row mt-3 p-3 ">
          {/* 1nd col */}
          <div class="col ">
            <div className='h-auto '>
              <div className="h1"> <samp className='firstLetter'>E</samp>xprience</div>
              <div className='row p-4'>
                <div className='col-auto '>
                  <img src={iexceesd}  height='40'/>
                </div>
                <div className='col'>
                  <h5>Software Engineer</h5>
                  <span>i-exceed · Full-time</span>
                  <br/>
                  <span>Jun 2022 - Present · 1 yr 5 months <br/>Bengaluru, Karnataka, India · On-site</span>
                  <br/>
                  <br/>
                  <span>In my current role at i-exceed , I specialize in the Banking domain, contributing to the development and maintenance of cutting-edge applications. </span> <br/>
                  <br/>
                  <span>• Successfully designed and implemented applications with robust business logic using JavaScript, Java and Spring Boot.
                  <br/>• Implemented efficient front-end interfaces using JavaScript and frameworks like React.js, enhancing user experience and interactivity 
                  <br/><b>Skills:</b> Continuous Integration (CI) · Javascript · Tomcat · Jira Align · REST APIs · PostgreSQL · Postman · MySQL · Core Java · Cascading Style Sheets (CSS)</span>
                  {/* </div> */}
                </div>
              </div>    
              <div className='row p-4'>
                <div className='col-auto '>
                  <img src={vmokshaLogo}  height="40" width='60'/>
                </div>
                <div className='col'>
                  <h5>Trainee</h5>
                  <span>Vmoksha Technologies Pvt. Ltd · Full-time</span>
                  <br/>
                  <span>Nov 2021 - Apr 2022 · 6 months<br/>Bengaluru, Karnataka, India · On-site</span>
                  <br/>
                  <br/>
                  <span>• Made invaluable contributions to the development and maintenance of the Slotly tickets booking application, playing a pivotal role in its resounding success 
                  <br/>• Skillfully harnessed the power of cutting-edge technologies such 
                  as ReactJs, Redux, Ant, formic, and JSX to elevate the application's functionality and deliver an unparalleled user experience </span>
                  <br/><span><b>Skills:</b> React.js · JavaScript · MySQL</span>
                </div>
              </div>                   

            </div>
          </div>
          {/* <div class="col border"> */}
          {/* 2nd col  skill*/}
            <div class="col ">
            <div className='h-auto '>
              <div className="h1"> <samp className='firstLetter'>S</samp>kills</div>
              <div className='container h-25 w-auto lightPink  p-0 '>
                <div className='container h-100 w-100 light  transform p-2'>
                  <h5 className=''> <samp className='firstLetter'>J</samp>avaScript </h5>
                  <div className='font-weight-light'> JavaScript is a versatile and widely-used programming language that allows you to add interactivity and dynamic behavior to websites.  </div>
                </div>
              </div>
              <br></br>
              <div className='container h-25 w-auto lightPink p-0'>
              <div className='container h-100 w-100 light  transform p-2'>
                  <h5 className=''> <samp className='firstLetter'>R</samp>eactJS </h5>
                  <div className=''> ReactJS is a popular JavaScript library for building user interfaces, particularly for single-page applications where user experience is crucial. </div>
                </div>
              </div>

              <br></br>
              <div className='container h-25 w-auto lightPink p-0'>
              <div className='container h-100 w-100 light  transform p-2'>
                  <h5 className=''> <samp className='firstLetter'>C</samp>ss  </h5>
                  <div className=''> CSS is a stylesheet language used for describing the presentation of a web page written in HTML or XML. It controls the layout.  </div>
                </div>
              </div>

              <br></br>
              <br></br>
              <div className='container h-25 w-auto lightPink p-0'>
              <div className='container h-100 w-100 light  transform p-2'>
                  <h5 className=''> <samp className='firstLetter'>J</samp>ava </h5>
                  <div className=''> Java is a versatile and widely-used object-oriented programming language. It's known for its platform independence. </div>
                </div>
              </div>

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