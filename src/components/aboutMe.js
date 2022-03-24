
import "../index.css"

function AboutMe(){
    return(
        <>
        <div className="container" >
      <div className="row aboutMeDiv" >
        <div className="col-lg-6">
          <div className="aboutDiv">
            <p className="title1">About <span style={{color:"tomato"}}> me</span></p>

           
             
            <p className="about about2"> Hello! My name is Gokul and I enjoy creating things that live on the internet 
              and also love to solve the complex problems . My
              interest in web development started when i decided to switch my career to Developer,
              and decided to start my journey as a Full-stack
              Developer. I completed Fullstack developer program from <span className="imp"> GUVI (IIT Madaras). </span> </p>
            <p className="about about2">Fast-forward to today, I am looking for a challenging, respectable and responsible work, that can form out my personal
              and professional growth and helps me to contribute effectively  to the company growth .</p>
              <img src="./images/resume.png" alt="resume"/>
              <a href="https://drive.google.com/file/d/1ZaBb4PzmpEAhyUN-LwcouPkZHfttKtfm/view?usp=sharing" target="blank" className="anchor" style={{color:"white"}}> <button type="button" class="btn btn-warning">RESUME</button></a>
          </div>
          
        </div>
        <div className="col-lg-6 aboutMeHeroImg" style={{textAlign:"center"}}>
          <img src="./images/avatar.jpg"alt="devop" style={{ marginTop:"85px",borderRadius:"50%",height:"350px",width:"350px",border:"5px solid skyblue"}}/>
        </div>
      </div>
    </div>
    <hr style={{marginTop:"0px" , marginBottom:"0px"}}  id="myskills"/>

        </>
    )
}

export default AboutMe;
