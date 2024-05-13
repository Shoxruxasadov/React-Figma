import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div id="footer">
      <div className="containerfoo">
        <div className="content-foo">
          <div className="contacts">
            <img className="logofoo" src="section-one-images/logo.svg" />
            <div className="contact">
              <img src="footer/Location.svg" />
              <span>Bukhara, Uzbekistan</span>
            </div>
            <div className="contact">
              <img src="footer/Message.svg" />
              <span>Shoxruxasadov.uz</span>
            </div>
            <div className="contact">
              <img src="footer/Calling.svg" />
              <span>+998 91 415 78 33</span>
            </div>
            <div className="social-site">
              <a href="#">
                <img src="footer/facebook.svg" />
              </a>
              <a href="#">
                <img src="footer/twitter.svg" />
              </a>
              <a href="#">
                <img src="footer/instagram.svg" />
              </a>
              <a href="#">
                <img src="footer/pinterest.svg" />
              </a>
            </div>
          </div>
          <div className="footerbars">
            <div className="footerbar">
              <li>
                <a href="#"><b>Service</b></a>
              </li>
              <li>
                <a href="#">Order Management</a>
              </li>
              <li>
                <a href="#">Social Assistant</a>
              </li>
              <li>
                <a href="#">Crypto Platform</a>
              </li>
              <li>
                <a href="#">Analyzer of the News</a>
              </li>
            </div>
            <div className="footerbar">
              <li>
                <a href="#"><b>Company</b></a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Our trusted partner</a>
              </li>
              <li>
                <a href="#">New users FAQ</a>
              </li>
            </div>
            <div className="footerbar">
              <li>
                <a href="#"><b>Supports</b></a>
              </li>
              <li>
                <a href="#">Help center</a>
              </li>
              <li>
                <a href="#">Feedbcak</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Terms conditins</a>
              </li>
            </div>
            <div className="footerbar">
              <li>
                <a href="#"><b>Resources</b></a>
              </li>
              <li>
                <a href="#">Download app</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">What’s new</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </div>
          </div>
        </div>
        <div className="hr"></div>
        <div className="reversed">
          <p>© 2021 Zone. - All rights reserved.</p>
          <div>
            <a href="#">Privacy</a>
            <a href="#">Security</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
