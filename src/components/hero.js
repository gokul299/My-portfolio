
import "../index.css"

function Hero(){
    return(
        <>
        
    <div className="container" id="homeDiv">
      <div className="row firstRow">
        <div className="col-lg-6">
          <div className="aboutDiv">
            <p className="title1"><span style={{color:"tomato"}}> Hi, </span>I'm Gokul Prasath</p>
            <p className="title2">A Fullstack Developer</p>
            <p className="about">I design amazing websites which can give a great 
               digital experiences to the client.
              I can be relied upon to help your company achieve its goals
              by providing sustainable and scalable solutions.</p>
            <div style={{marginTop:"30px" , display:"flex"}}>
            <a href="https://github.com/gokul299" target="blank" className="anchor" style={{ marginRight:"25px" ,color:"black",fontSize:"40px"}}>
            <i class="fab fa-github"></i></a>
             <a  href="https://www.linkedin.com/in/gokul-prasath-g-77581318a/" target="blank" className="heroicons" style={{color:"black",fontSize:"40px"}}><i class="fab fa-linkedin 5x"></i></a>
  

            </div>
          </div>
          
        </div>
        <div className="col-lg-6 heroImage">
          <img src="./images/devop.png"alt="devop" style={{width:"100%"}}/>
        </div>
      </div>
    </div>
    <hr style={{marginTop:"0px" , marginBottom:"30px"}} id="aboutMe"/>
        </>
    )
}

export default Hero;
