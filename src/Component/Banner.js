import React from "react";
// import { useNavigate } from "react-router-dom";
import "./Banner.css";
import WOW from 'wowjs';
function Banner() {
  // const navigate = useNavigate()
  new WOW.WOW({
    live: false
  }).init()
  return (
    <div>
      <div data-cycle="go" class="cycle slide wow fadeInRight" data-wow-delay="1s">
        <div class="cycle-inner">
          <div class="item st1 active">
            <h1>Treatment type 1</h1>
          </div>
          <div class="item st2">
            <h1>Treatment type 2</h1>
          </div>
          <div class="item st3">
            <h1>Treatment type 3</h1>
          </div>
          <div class="item st4">
            <h1>Treatment type 4</h1>
          </div>
        </div>
      </div>
      <div class="parallax_content wow fadeInUp" data-wow-delay="0.8s">
      </div>
    </div>
  );
}

export default Banner;
