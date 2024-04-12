import React from "react";
import linkdin from "../assets/images/linkdin.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/Instagram.png";
import Copyright from "./Copyright";


    //Handle Onclick
    const handleLinkdin = () => {
      const linkdinUrl = process.env.PUBLIC_URL + 'https://www.linkedin.com/in/gideon-johnson-b09ba1219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
      window.open(linkdinUrl, '_blank')
      }

      const handleFacebook = () => {
        const facebookUrl = process.env.PUBLIC_URL + 'https://www.linkedin.com/in/gideon-johnson-b09ba1219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
        window.open(facebookUrl, '_blank')
        }
  
  
    const handleInstgram = () => {
      const instagramUrl = process.env.PUBLIC_URL + 'https://gideonthegre8t.github.io/portfolio-website-2/';
      window.open(instagramUrl, '_blank')
      }

function Footer() {
    return(
     <footer>
      <div className="footer-container">
        <div className="footer-top">
            <p className="footer-header">Feel free to contact me</p>
            <div className="logo logo-phone">
              <img className="linkdin" src={linkdin} alt="linkdin logo" onClick={handleLinkdin} />
              <img src={facebook} alt="facebook-logo"  onClick={handleFacebook} /> 
              <img src={instagram} alt="instagram-logo"   onClick={handleInstgram} /> 
            </div>
        </div>

        <div className="footer-bottom">
            <p className="email">Email: gideon24johnson@gmail.com</p>
            <p className="telegram">Telegram: @gideon24johnson</p>
            </div>

            <div className="logo logo-desktop">
              <img className="linkdin" src={linkdin} alt="linkdin logo" onClick={handleLinkdin} />
              <img src={facebook} alt="facebook-logo" onClick={handleFacebook} /> 
              <img src={instagram} alt="instagram-logo"  onClick={handleInstgram}/> 
            </div>
            
      </div>
      <Copyright />
     </footer>
    );
}

export default Footer;