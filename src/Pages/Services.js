import React from 'react'
import Header from '../Component/Header'
import '../Styles/Home.css'
import '../Styles/Services.css'
const Services = () => {
   const cards = [
      { image: require('../Assets/image_1.jpg') },
      { image: require('../Assets/image_2.jpg') },
      { image: require('../Assets/image_3.jpg') },
      { image: require('../Assets/image_4.jpg') },
      { image: require('../Assets/image_5.jpg') },
      { image: require('../Assets/image_6.jpg') },
   ]
   return (
      <div>
         <Header />
         <div class="story" id="services">
            <div class="story_upper">
               <div class="story_icon wow heartBeat">
                  <div class="rectangle"></div>
                  <div class="rectangle"></div>
                  <div class="rectangle"></div>
                  <div class="line"></div>
               </div>
               <div class="story_heading">
                  <h1>Our Services</h1>
               </div>
            </div>
            <div className="cardSection">
               {cards.length > 0 && cards.map((item, index) => <div className="serviceCard" key={index}>
                  {/* <div class="story_lowerLow"> */}
                  <div className="story_box">
                     <div className="story_box1 glow" data-wow-delay="0.1s">
                        {/* <!-- <h2>Read More</h2> --> */}
                        <img src={item.image} alt="back" height="200px" width="100%" />
                        <h3>treatment 1 </h3>
                        <h1>About?</h1>
                        <p>We are experts in providing treatment 1 . </p>
                        <a href="#"><button>Book an Appointment</button></a>
                     </div>
                  </div>
                  {/* </div> */}
               </div>)}
            </div>

         </div>
      </div>
   )
}

export default Services