import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <div className="section" id="contact">

      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
          </Fade>

          <div className="social-icons">
            <a className="icn" href="https://github.com/kjsbot" target="_blank"><SiGithub size="1.7em" /></a>
            <a className="icn" href={`mailto:wang.fiona03@gmail.com`}><SiGmail size="1.7em" /></a>
            <a className="icn" href="https://www.linkedin.com/in/fionaw03/" target="_blank"><SiLinkedin size="1.7em" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
