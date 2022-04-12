
import "../index.css";
import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  // offset: 130,
  duration: 1000
});

function Project() {



  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "35px" }} >
        <p className="title1">FEATURED <span style={{ color: "tomato" }} >PROJECTS</span></p>
      </div>
      <div className="credentials">
<span style={{listStyleType:"none"}}>
       <p className="demoCred" style={{ color: "tomato", fontWeight: "bold" }}>CREDENTIALS</p>
       <p className="demoCred" style={{ color: "black" }}>UserID:<span>  user321demo@gmail.com</span> </p>
        
        <p className="demoCred" style={{ color: "black" }}>  Password :<span> 12345</span></p>
        
</span>
      </div>

      {/* project 1 */}

      <div style={{ textAlign: "center" }}>
        <p className="title2 project2"><span style={{ color: "tomato" }}>HYPER CAR</span> RENT PORTAL</p>
      </div>

      <div className="container" data-aos="zoom-in">
        <div className="row secondDiv">
          <div className="col-lg-6" style={{ padding: "0px" }}>
            <div style={{ width: "100%", height: "100%" }}>
              <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicators2" data-slide-to="3"></li>
                  <li data-target="#carouselExampleIndicators2" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="./images/rental/rent1.png" alt=" slide1" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="./images/rental/rent2.png" alt=" slide2" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="./images/rental/rent3.png" alt=" slide3" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="./images/rental/rent4.png" alt=" slide4" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="./images/rental/rent5.png" alt=" slide5" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

            </div>

          </div>
          <div className="col-lg-6 projectInfo" style={{ padding: " 0px 20px 20px 20px" }}>

            <p className="para1"><span className="imp">HYPER CAR RENTAL</span>is a <span className="imp">Car rental portal </span>
              where client can purchase a car of his
              choice on rent .Portal is easy to use, client just have to insert his trip's <span className="imp"> start </span> and
              <span className="imp"> end date </span>
              as well as the <span className="imp">pickup time</span> and <span className="imp">location</span> and select car from
              the available cars and pay accordingly.

            </p>
            <div className="usedIcons">

              <div className="pop">
                <div className="prjDiv">
                  <img src="./images/reactIcon.png" alt="icon1" className="prjIcons" />
                </div>
                <div className="softIcon">
                  <p className="smallName">React</p>
                </div>
              </div>

              <div className="pop">
                <div className="prjDiv">
                  <img src="./images/mongoDBicon.png" alt="icon1" className="prjIcons" />
                </div>
                <div className="softIcon">
                  <p className="smallName">MongoDB</p>
                </div>
              </div>

              <div className="pop">
                <div className="prjDiv">
                  <img src="./images/nodeJsIcon.png" alt="icon1" className="prjIcons" />
                </div>
                <div className="softIcon">
                  <p className="smallName">NodeJs</p>
                </div>
              </div>

              <div className="pop">
                <div className="prjDiv">
                  <img src="./images/bootstrapIcon.png" alt="icon1" className="prjIcons" />
                </div>
                <div className="softIcon">
                  <p className="smallName">Bootstrap</p>
                </div>
              </div>

              <div className="pop">
                <div className="prjDiv">
                  <img src="./images/materialUiIcon.png" alt="icon1" className="prjIcons" />
                </div>
                <div className="softIcon">
                  <p className="smallName">MaterialUi</p>
                </div>
              </div>

              <div className="pop">
                <div className="prjDiv">
                  <img src="./images/express.png" alt="icon1" className="prjIcons" />
                </div>
                <div className="softIcon">
                  <p className="smallName">Express</p>
                </div>
              </div>

            </div>
            <div style={{ display: "flex", marginTop: '15px', flexWrap: "wrap", position: "relative" }}>

              <a href="https://github.com/gokul299/rental-frontend" target="blank" className="anchor">
                <button className="codeBtn">FrontEnd <i className="fab fa-github" style={{ marginLeft: "8px" }}></i></button>
              </a>
              <a href="https://github.com/gokul299/rental-backend" target="blank" className="anchor">
                <button className="codeBtn">BackEnd <i className="fab fa-github" style={{ marginLeft: "8px" }}></i></button>
              </a>
              <div className="ee">
                <a href="https://hyper-cars-rental.herokuapp.com/login" target="blank" className="anchor">
                  <button className="codeBtn" >  Live Demo <i className="fas fa-level-down-alt" style={{ marginLeft: "8px" }}></i></button></a>


              </div>
            </div>
          </div>

        </div>
      </div>
      <hr style={{ marginTop: "0px" }} />


      {/* project 2 */}
      <div style={{ textAlign: "center" }}>
        <p className="title2 project2"><span style={{ color: "tomato" }}>NEWS </span>24 X 7</p>
      </div>

      <div className="container" data-aos="zoom-in">
        <div className="row secondDiv">
          <div className="col-lg-6" style={{ padding: "0px" }}>
            <div style={{ width: "100%", height: "100%" }}>
              <div id="carouselExampleIndicators4" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="./images/news/News1.png" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="./images/news/News2.png" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="./images/news/News3.png" alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators4" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators4" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>

          </div>
          <div className="col-lg-6 projectInfo" style={{ padding: " 0px 20px 20px 20px" }}>
            <p className="para1"><span className="imp">NEWS 24 X 7 </span>
            is to develop an application self uploading the news and which will display news
           articles and <span className="imp">uploaded news feeds</span>, verified and approved at backend . 
           App will enable user to view news details, <span className="imp">images.this application is very easy for use.</span> 
      
            </p>
            <div className="usedIcons" >

              <div className="pop">
                <div className="prjDiv">
                  <img src="./images/reactIcon.png" alt="icon1" className="prjIcons" />
                </div>
                <div className="softIcon">
                  <p className="smallName">React</p>
                </div>
              </div>

              <div className="pop">
                <div className="prjDiv">
                  <img src="./images/mongoDBicon.png" alt="icon1" className="prjIcons" />
                </div>
                <div className="softIcon">
                  <p className="smallName">MongoDB</p>
                </div>
              </div>

              <div className="pop">
                <div className="prjDiv">
                  <img src="./images/nodeJsIcon.png" alt="icon1" className="prjIcons" />
                </div>
                <div className="softIcon">
                  <p className="smallName">NodeJs</p>
                </div>
              </div>

              <div className="pop">
                <div className="prjDiv">
                  <img src="./images/bootstrapIcon.png" alt="icon1" className="prjIcons" />
                </div>
                <div className="softIcon">
                  <p className="smallName">Bootstrap</p>
                </div>
              </div>

              <div className="pop">
                <div className="prjDiv">
                  <img src="./images/express.png" alt="icon1" className="prjIcons" />
                </div>
                <div className="softIcon">
                  <p className="smallName">Express</p>
                </div>
              </div>

            </div>
            <div style={{ display: "flex", marginTop: '15px', flexWrap: "wrap", position: "relative" }}>
              <a href="https://github.com/gokul299/news-frontend" target="blank" className="anchor">
                <button className="codeBtn">FrontEnd <i className="fab fa-github" style={{ marginLeft: "8px" }}></i></button>
              </a>
              <a href="https://github.com/gokul299/news-backend" target="blank" className="anchor">
                <button className="codeBtn">BackEnd<i className="fab fa-github" style={{ marginLeft: "8px" }}></i></button>
              </a>
              <div className="ee">
                <a href="https://demonews.herokuapp.com/" target="blank" className="anchor">
                  <button className="codeBtn">Live Demo <i className="fas fa-level-down-alt" style={{ marginLeft: "8px" }}></i></button>
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
      <hr style={{ marginTop: "0px" }} />

      {/* project 3 */}

      <div style={{ textAlign: "center" }}>
        <p className="title2 project2"><span style={{ color: "tomato" }}>CAR WASH </span> EXPRESS</p>
      </div>

      <div className="container" data-aos="zoom-in">
        <div className="row secondDiv">
          <div className="col-lg-6" style={{ padding: "0px" }}>
            <div style={{ width: "100%", height: "100%" }}>
              <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators3" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicators3" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="./images/carWash/car1.png" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="./images/carWash/car2.png" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="./images/carWash/car3.png" alt="Third slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="./images/carWash/car4.png" alt="f slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>

          </div>
          <div className="col-lg-6 projectInfo" style={{ padding: " 0px 20px 20px 20px" }}>
            <p className="para1"><span className="imp">Car wash express </span> is a website developed with all neccessary features,
              as well as with <span className="imp">authorization</span> and <span className="imp">authentication </span>
              user can book an appointment for different types of car wash ,
              as well as he can  cancel his appointment if needed.

            </p>
            <div className="usedIcons">

              <div className="pop">
                <div className="prjDiv">
                  <img src="./images/reactIcon.png" alt="icon1" className="prjIcons" />
                </div>
                <div className="softIcon">
                  <p className="smallName">React</p>
                </div>
              </div>

              <div className="pop">
                <div className="prjDiv">
                  <img src="./images/mongoDBicon.png" alt="icon1" className="prjIcons" />
                </div>
                <div className="softIcon">
                  <p className="smallName">MongoDB</p>
                </div>
              </div>

              <div className="pop">
                <div className="prjDiv">
                  <img src="./images/nodeJsIcon.png" alt="icon1" className="prjIcons" />
                </div>
                <div className="softIcon">
                  <p className="smallName">NodeJs</p>
                </div>
              </div>

              <div className="pop">
                <div className="prjDiv">
                  <img src="./images/bootstrapIcon.png" alt="icon1" className="prjIcons" />
                </div>
                <div className="softIcon">
                  <p className="smallName">Bootstrap</p>
                </div>
              </div>

              <div className="pop">
                <div className="prjDiv">
                  <img src="./images/materialUiIcon.png" alt="icon1" className="prjIcons" />
                </div>
                <div className="softIcon">
                  <p className="smallName">MaterialUi</p>
                </div>
              </div>

              <div className="pop">
                <div className="prjDiv">
                  <img src="./images/express.png" alt="icon1" className="prjIcons" />
                </div>
                <div className="softIcon">
                  <p className="smallName">Express</p>
                </div>
              </div>

            </div>
            <div style={{ display: "flex", marginTop: '15px', flexWrap: "wrap", position: "relative" }}>

              <a href="https://github.com/gokul299/carwash-frontend" target="blank" className="anchor">
                <button className="codeBtn">FrontEnd <i className="fab fa-github" style={{ marginLeft: "8px" }}></i></button>
              </a>
              <a href="https://github.com/gokul299/carwash-backend" target="blank" className="anchor">
                <button className="codeBtn">BackEnd <i className="fab fa-github" style={{ marginLeft: "8px" }}></i></button>
              </a>
              <div className="ee">
                <a href="https://carwash-express.netlify.app/" target="blank" className="anchor">
                  <button className="codeBtn">Live Demo <i className="fas fa-level-down-alt" style={{ marginLeft: "8px" }}></i></button>
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
      <hr style={{ marginTop: "0px" }} />


    

          
            {/*project 4 */}

            <div style={{ textAlign: "center" }}>
              <p className="title2 project2"><span style={{ color: "tomato" }}>LIVE-GOLD</span> CALCULATOR</p>
            </div>

            <div className="container" data-aos="zoom-in">
              <div className="row secondDiv">
                <div className="col-lg-6" style={{ padding: "10px" }}>
                  <div style={{ width: "100%", height: "100%" }}>
                 
                 
      <div className="container" data-aos="zoom-in">
        <div className="row secondDiv">
          <div className="col-lg-6" style={{ padding: "0px" }}>
            <div style={{ width: "100%", height: "100%" }}>
              <div id="carouselExampleIndicators4" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img src="./images/Delivery 1.png" alt="Frist slide" style={{ width: "100%", height: "100%" }} />
                    </div>
                  <div className="carousel-item">
                
                     <img src="./images/Delivery 2.png" alt="Scocend slide" style={{ width: "100%", height: "100%" }} />
                      
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="./images/Delivery 3" alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators4" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators4" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>

          </div>


                  </div>

                </div>
                <div className="col-lg-6 projectInfo" style={{ padding: " 0px 20px 20px 20px" }}>

                  <p className="para1"><span className="imp">GOLD CALCULATOR </span> is an app where a user can get his
                    <span className="imp"> gold price details </span> just by entering the value you got price details
                    as well as its . It's simple to understand and can be used easily.
                  </p>

                  <div style={{ display: "flex" }}>

                    <div className="pop">
                      <div className="prjDiv">

                        <img src="./images/reactIcon.png" alt="icon1" className="prjIcons" />

                      </div>
                      <div className="softIcon">
                        <p className="smallName">React</p>
                      </div>
                    </div>

                    <div className="pop">
                      <div className="prjDiv">
                        <img src="./images/bootstrapIcon.png" alt="icon1" className="prjIcons" />
                      </div>
                      <div className="softIcon">
                        <p className="smallName">Bootstrap</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", marginTop: '40px', flexWrap: "wrap" }}>
                    <a href="https://github.com/gokul299/gold-calculator" target="blank" className="anchor">
                      <button className="codeBtn">FrontEnd <i className="fab fa-github" style={{ marginLeft: "8px" }}></i></button>
                    </a>
                    <a href="https://live-gold-calculator.netlify.app" target="blank" className="anchor">
                      <button className="codeBtn">Live Demo <i className="fas fa-level-down-alt" style={{ marginLeft: "8px" }}></i></button>
                    </a>
                  </div>
                </div>

              </div>
            </div>
            <hr style={{ marginTop: "0px" }} />

            {/* extra project 1 */}

            <hr style={{ marginTop: "0px" }} />

          
     


    </>
  )
}

export default Project;
