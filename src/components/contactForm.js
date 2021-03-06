
import "../index.css";
import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "emailjs-com"

toast.configure()

function Contact() {


  function sendEmail(event) {
    event.preventDefault()
    emailjs.sendForm(
      "service_0rh699e",
      "template_gzw4gm3",
      event.target,
      "user_SXRK4FFJs2itWwzz0Ykvg"
    ).then(res => {
      console.log(res)
      toast.success('Mail Sent Successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      event.target = ""
    }).catch(error => {
      console.log(error)
      toast.error('Something Went Wrong', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
  }

  return (
    <>
      <div style={{ backgroundColor: "#03bac7" }} id="contactForm">
        <div className="container">
          <div className="row footerRow">
            <div className="col-lg-6">
              <div style={{ borderRadius: "0.4rem", overflow: "hidden", marginTop: "30px" }}>
                <h1 style={{color:"white",paddingBottom:"40px"}}>CONTACT INFO</h1>

             
                <h1><i class="fas fa-phone-alt"></i><span className="continfo" style={{ color: "white" }}> +91 9994064866</span></h1>
                <h1><i class="fas fa-map-marker-alt" style={{paddingRight:"10px"}}></i><span className="continfo" style={{ color: "white" ,textAlign:"center"}}>  Tiruppur,India-641652</span> </h1>
                <h1 ><i class="fas fa-envelope"></i><span className="continfo" style={{ color: "white" }}> Prasathgokul19gmail.com</span></h1>


              </div>
            </div>
            <div className="col-lg-6">
              <p className="title2" style={{ color: "white" }}>Say Hi</p>
              <form onSubmit={sendEmail}>
                <input type="text" className=" txt form-control" name="name" placeholder='Name' required /><br />
                <input type="email" className=" txt form-control" placeholder="Enter Your Email" name="user_email" required /><br />
                <textarea className="txt form-control" name="message" rows="4" placeholder="Message" required /><br />
                <button type="submit" className="btn btn-success">Send
                  <i className="fas fa-share-square" style={{ marginLeft: "15px" }}></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
