import "./Footer.css";
import { useState } from "react";

const Footer = (props) => {
  const state = props.state;
  let passed = false;
  if(state !== undefined){
    passed = true
  }
  return (
    <div className={passed ? "privacy-footer" : "footer"}>
      <div className="frame-parent21">
        <div className="frame-parent22">
          <div className="vector-parent">
            <img className="vector-icon" alt="" src="/vector@2x.png" />
            <div className="sublink">
              <div className="destinations">
                <p className="barrackpore-kolkata">Barrackpore, Kolkata,</p>
                <p className="barrackpore-kolkata">West Bengal- 700 122</p>
                <p className="barrackpore-kolkata">&nbsp;</p>
                <p className="barrackpore-kolkata">+91 81001 29292</p>
                <p className="barrackpore-kolkata">&nbsp;</p>
                <p className="barrackpore-kolkata">
                  <a
                    className="contactclikintechcom1"
                    href="mailto:contact@clikintech.com"
                    target="_blank"
                  >
                    <span className="contactclikintechcom2">
                      contact@clikintech.com
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="frame-parent23">
            <div className="footer-link-title-parent">
              <div className="sublink">
                <b className="destinations">Services</b>
              </div>
              <div className="vector-parent">
                <div className="sublink">
                  <div className="destinations">Digital Marketing</div>
                </div>
                <div className="sublink">
                  <div className="destinations">Web Development</div>
                </div>
                <div className="sublink">
                  <div className="destinations">Mobile App Development</div>
                </div>
              </div>
            </div>
            <div className="footer-link-title-parent">
              <div className="sublink">
                <b className="destinations">Resources</b>
              </div>
              <div className="vector-parent">
                <div className="sublink">
                  <div className="destinations">Support</div>
                </div>
                <div className="sublink">
                  <div className="destinations">Privacy</div>
                </div>
                <div className="sublink">
                  <div className="destinations">{`Terms & Conditions`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="follow-us-parent">
            <div className="follow-us">FOLLOW US</div>
            <div className="sublink7">
              <div className="destinations">We are Available</div>
            </div>
            <div className="icons8-facebook-1-1-parent">
              <img
                className="icons8-facebook-1-1"
                alt=""
                src="/icons8-facebook-1-1@2x.png"
              />
              <img
                className="icons8-facebook-1-1"
                alt=""
                src="/icons8-linkedin-2-1@2x.png"
              />
              <img
                className="icons8-facebook-1-1"
                alt=""
                src="/icons8-twitter-circled-4-1@2x.png"
              />
              <img
                className="icons8-facebook-1-1"
                alt=""
                src="/icons8-instagram-1-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="line" />
        <div className="icons8-copyright-all-rights-re-parent">
          <img
            className="icons8-copyright-all-rights-re"
            alt=""
            src="/icons8-copyright-all-rights-reserved-1@2x.png"
          />
          <div className="destinations">
            2023 Clicktech. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
