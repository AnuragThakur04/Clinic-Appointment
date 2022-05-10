import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigation = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;
  console.log(pathName);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          {/* <img src={require("../Assets/header.JPG")} /> */}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="header-right collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <p
              onClick={() => navigation("/")}
              style={{
                borderBottom: `${pathName === "/" && `3px solid black`}`,
                cursor: "pointer",
              }}
            >
              Home
            </p>
            <p
              onClick={() => navigation("/about")}
              style={{
                borderBottom: `${pathName === "/about" && `3px solid black`}`,
                cursor: "pointer",
              }}
            >
              About us
            </p>
            <p
              onClick={() => navigation("/services")}
              style={{
                borderBottom: `${
                  pathName === "/services" && `3px solid black`
                }`,
                cursor: "pointer",
              }}
            >
              Treatments
            </p>
            <p
              onClick={() => navigation("/about/doctor")}
              style={{
                borderBottom: `${
                  pathName === "/about/doctor" && `3px solid black`
                }`,
                cursor: "pointer",
              }}
            >
              About Doctor
            </p>
            <p
              onClick={() => navigation("/location")}
              style={{
                borderBottom: `${
                  pathName === "/location" && `3px solid black`
                }`,
                cursor: "pointer",
              }}
            >
              Location
            </p>
            <button onClick={() => navigation("book")}>Book appointment</button>
          </div>
        </div>
      </div>
    </nav>
    // <div className="header">
    //   <div className="header-left">
    //     <img src={require("../Assets/header.JPG")} />
    //   </div>
    //   <div className="header_center">
    //     <p
    //       onClick={() => navigation("/")}
    //       style={{
    //         borderBottom: `${pathName === "/" && `3px solid black`}`,
    //         cursor: "pointer",
    //       }}
    //     >
    //       Home
    //     </p>
    //     <p
    //       onClick={() => navigation("/about")}
    //       style={{
    //         borderBottom: `${pathName === "/about" && `3px solid black`}`,
    //         cursor: "pointer",
    //       }}
    //     >
    //       About us
    //     </p>
    //     <p
    //       onClick={() => navigation("/services")}
    //       style={{
    //         borderBottom: `${pathName === "/services" && `3px solid black`}`,
    //         cursor: "pointer",
    //       }}
    //     >
    //       Treatments
    //     </p>
    //     <p
    //       onClick={() => navigation("/about/doctor")}
    //       style={{
    //         borderBottom: `${
    //           pathName === "/about/doctor" && `3px solid black`
    //         }`,
    //         cursor: "pointer",
    //       }}
    //     >
    //       About Doctor
    //     </p>
    //     <p
    //       onClick={() => navigation("/location")}
    //       style={{
    //         borderBottom: `${pathName === "/location" && `3px solid black`}`,
    //         cursor: "pointer",
    //       }}
    //     >
    //       Location
    //     </p>
    //     <button onClick={() => navigation("book")}>Book appointment</button>
    //   </div>
    // </div>
  );
}

export default Header;
