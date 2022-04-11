import React from "react";
import "../css/ContactUs.css";
import logo from "../images/character1.png";

console.log(logo);
function ContactUs() {
  return (
    <div>
      <div className="row" id="entire-body">
        <div className="col-md-12" id="column-12">
          <div className="col-md-6" id="entire-left-side">
            <h2 id="left-heading">Get in Touch</h2>
            <p id="left-p1">
              Want to get in touch ? We'd like to hear from you.....
            </p>
            <p id="left-p2">Here's how you can reach us....</p>
          </div>
          <div className="col-md-6" id="entire-right-side">
            <img id="contact-us-img" src={logo} alt="NA" />
          </div>
        </div>
      </div>
      <hr />
      <div className="row" id="entire-body">
        <div className="col-md-12" id="column-12">
          <div className="col-md-6" id="entire-left-card">
            <div class="card-body ">
              <h5 class="card-title">Talk to Us.</h5>
              <p class="card-text">Contact Number : 022-2635963</p>
              <p class="card-text">Mobile Number : 9896589663</p>
              <div class="card-text-box">
                <p class="card-text1">Operating hours: 10 a.m to 11 p.m</p>
                <p class="card-text1">Operating Days: Mon to Sat</p>
              </div>
            </div>
          </div>
          <div className="col-md-6" id="entire-right-card">
            <div class="card-body">
              <h5 class="card-title">E-mail Us.</h5>
              <p class="card-text">
                Email Id : <a href="mailto:john@example.com">john@gmail.com</a>
              </p>
              <p class="card-text">
                Email Id :{" "}
                <a href="mailto:john@example.com">jonney@gmail.com</a>
              </p>
              <div class="card-text-box">
                <p class="card-text1">Operating hours: 10 a.m to 11 p.m</p>
                <p class="card-text1">Operating Days: Mon to Sat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" id="entire-body">
        <div className="col-md-12" id="column-12">
          <span>
            <a href="/home" style={{ float: "right" }}>
              Return back Home
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
