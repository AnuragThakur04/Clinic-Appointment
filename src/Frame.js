import React from "react";
import "./Frame.css";

function Frame() {
  const card = [
    {
      title: "New Arrivals",
      desc: "Shop our new collection of the latest glasses, including prescription and non-prescriptions. With 2 pairs from $199.",
      button: "Explore More",
      img: "https://dj3im2gm3txew.cloudfront.net/pub/media/wysiwyg/homepage/new__arrivals.jpeg",
    },
    {
      title: "Shop by Face Shape",
      desc: "No matter what your face shape is, there’s a flattering style for you. Learn how to choose the best glasses to suit your face shape!",
      button: "Learn More",
      img: "https://dj3im2gm3txew.cloudfront.net/pub/media/wysiwyg/homepage/new__arrivals.jpeg",
    },
  ];

  const thumb = [
    {
      title: "Iconic Range",
      button: "shop now",
    },
    {
      title: "Jelly Collection",
      button: "shop now",
    },
    {
      title: "Sunglasses",
      button: "shop now",
    },
  ];

  return (
    <div className="frame">
      <div class="aboutUs" id="about">
        <div class="heading wow fadeInLeft">
          <h1>
            Something <span>About</span>
          </h1>
          <h1>Us</h1>
        </div>
        <div class="about wow fadeInRight">
          <ul>
            <li>
              The Clinic is Open from 10:00 am to 5:00 pm from Monday to Friday{" "}
            </li>
            <li>
              {" "}
              And 10:00 am to 4:00 pm on Saturdays, while Sundays are OFF.{" "}
            </li>
          </ul>

          <a href="#">
            <h4>View More</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Frame;
