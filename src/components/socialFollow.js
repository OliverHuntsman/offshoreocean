import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faTiktok,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Follow Us On Social Media</h3>
      <a href="https://www.youtube.com/" className="youtube social" target="_blank">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/" className="facebook social" target="_blank">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a 
        href="https://www.twitter.com/offshoreocean"
        className="twitter social" target="_blank"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/offshoreocean"
        className="instagram social" target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.tiktok.com/@offshoreocean" className="tiktok social" target="_blank">
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/company/offshore-ocean"
        className="linkedin social" target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  )
}
