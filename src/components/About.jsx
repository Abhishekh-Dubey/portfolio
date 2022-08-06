
import React from "react";
import "./About.css";
// import aboutImg from "./img/about.jpg";
import aboutImg from '../Img/roundedpic.png'
function About() {
  //  Up To Top Btn
    // window.addEventListener("scroll", function(){
    //   const upToTop = document.querySelector("a.bottom__to__top");
    //    upToTop.classList.toggle("active", window.scrollY > 0)
    // });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">I am a Full-stack developer with a good knowledge 
              of JavaScript, HTML, CSS, ReactJS and NodeJS. Looking for a challenging work environment where I can develop a deeper understanding of web development.
              </p>
              
              <div className="about__button d__flex align__items__center">
                <a href="https://drive.google.com/file/d/1CvDN9Va-CInVhp8Q44QmMPN81KSxkISw/view?usp=sharing">
                  <button className="about btn pointer">Resume</button>
                </a>
                <a href="https://drive.google.com/file/d/16xqQUZoCe5Z_cf2972Nl95_JwO5023vy/view?usp=sharing">
                  <button className="about btn pointer">Certificate</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      {/* <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div> */}
    </div>
  );
}

export default About;