import React from 'react'
import { useLocation } from 'react-router-dom'
import './singlePage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
// import { IconName } from "react-icons/fa";

const SingleBlogPage = () => {
const location = useLocation();
const {title, img, description} = location.state;
console.log(title)
  return (
   <> <div className='single__page'>
   <h1>{title}</h1>
  
   <span className='icon'></span>
 
   <span id="social" > <a href="https://www.youtube.com/c/jamesqquick"
         className="youtube social">
         <FontAwesomeIcon icon={faYoutube} size="2x" />
       </a>
       <a href="https://www.facebook.com/learnbuildteach/"
         className="facebook social">
         <FontAwesomeIcon icon={faFacebook} size="2x" />
       </a>
       <a href="https://www.twitter.com/jamesqquick" className="twitter social">
         <FontAwesomeIcon icon={faTwitter} size="2x" />
       </a>
       <a href="https://www.instagram.com/learnbuildteach"
         className="instagram social">
         <FontAwesomeIcon icon={faInstagram} size="2x" />
       </a></span>
   

   <img src={img} alt="" />
   <p>{description}</p>

   
 


 {/* <span id='clap'></span> */}
</div>

   </>
  )
}

export default SingleBlogPage;