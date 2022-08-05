
import React from "react";
import "./Project.css";
import Project1 from '../Img/project1.jpg'
import Project2 from '../Img/project2.png'
import Project4 from '../Img/project2.1.png'
import opt from '../Img/project22.png'

function Project() {
  return (
    <div className="project component__space" id="Project">
      <div className="heading">
        <h1 className="heading title">My Latest Project</h1>
        <p className="heading p__color">
        If you can dream it. You can do it.
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
             <div class='cent'>
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img image1" />
                         </div>
                     
                     </div>
                   
                     
                     <p className="project__text skill-11"><h4 className="project__text1">Election System</h4>
                     <h5 className="project__text3">Tech Used: - Python, MySQL</h5><br />
                     <h5 className="project__text2">
                                Election system design for filing the nomination,
                                fixing the time of voting time from the admin side
                                and vote to candidate from voter side.</h5></p>
                     </div>
                 </div>
             </div>


             

                <div className="col__3">
             <div class='cent'>
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={opt} alt="" className="project__img1 image3" />
                         </div>
                     
                     </div>
                   
                     
                     <p className="project__text skill-11"><h4 className="project__text1">Student Result System</h4>
                     <h5 className="project__text3">Tech Used: - Python, MySQL</h5><br />
                     <h5 className="project__text2">
                        This system is used to generate report of student
                        where we can view student academic details.</h5></p></div>
                 </div>
             </div>
             <div className="col__3">
             <div class='cent'>
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img2 image1 " />
                             <img src={Project4} alt="" className="project__img2 image2" />
                         </div>
                         
                     </div>
                    
                     <p className="project__text skill-11"><h4 className="project__text1">My Portfolio</h4>
                     <h5 className="project__text3">Tech Used : - Html, Css, Js, <br /> </h5>
                     <h5 className="project__text4">ReactJS and ExpressJS </h5><br />
                     <h5 className="project__text2">
                     An online portfolio (may also be called a digital 
                     portfolio or e-portfolio) is an online representation 
                     of work you have created, as well as your skills and 
                     experiences. It could be a website.</h5></p>
                     
                 </div>
             </div>
                </div>


             {/* <div className="col__3">
             <div class='cent'>
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={opt} alt="" className="project__img img__size image3" />
                         </div>
                      
                     </div>
                     
                     <div class='cent'>
                     <p className="project__text skill-11"><h4 className="project__text1">Clone of optimizely</h4><br /><h5 className="project__text2">Optimizely is an American company that provides A/B testing and multivariate testing tools, website personalization, and feature toggle capabilities, as well as web content management and digital commerce.</h5></p>
                     </div>
                 </div>
             </div>
             </div> */}

           </div>
       </div>
    </div>
  );
}

export default Project;