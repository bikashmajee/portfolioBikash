import React from 'react'
import './navbar.css'
import Logo from '../images/logo.png'
function navbar() {
  function myFunction(params) {
    console.log(params);
    // if(params==='icon'){
    //   document.getElementById("icon").style.display = "block";
    //   document.getElementById("crossicon").style.display = "none";
    // }else{
    //   document.getElementById("crossicon").style.display = "block";
    //   document.getElementById("icon").style.display = "none";
    // }
    var x = document.getElementById("myTopnav");
    if (x.className === "element") {
      x.className += " responsive";
    } else {
      x.className = "element";
    }
  };
  return (
    <div className='navBody'>
        <div className='leftelement'>
            <ul className='element' id="myTopnav">
                <li><a href=""><img src={Logo}/></a></li>
                <li className='rightelement'><a href="">Home</a></li>
                <li className='rightelement'><a href="">About</a></li>
                <li className='rightelement'><a href="">Contact</a></li>
                <li className='rightelement'><a href="">Services</a></li>
                <li className='rightelement icon' id='icon'>
                  <a href="javascript:void(0);" onClick={(() => myFunction('icon'))}>
                    <i className="fa fa-bars"></i>
                  </a>
                </li>
                {/* <li className='rightelement crossicon' id='crossicon'>
                  <a href="javascript:void(0);" onClick={(() => myFunction('crossicon'))}>
                    <i className="fa fa-times"></i>
                  </a>
                </li> */}

            </ul>
        </div>
    </div>
  )
}

export default navbar