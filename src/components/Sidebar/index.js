import './index.scss'
// import LogoW from '../../assets/images/logo-w.png'
// import LogoSubtitle from '../../assets/images/logo_subtitle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faHackerrank
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faWonSign } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import "animate.css"

const Sidebar = () => {
    return (
        <div className="nav-bar">
          <Link className="logo" to="/">
            {/* <img src={LogoW} alt="Logo" /> */}
            <FontAwesomeIcon className="logo logoW logo-below animate__animated animate__pulse" icon={faWonSign} />
            <FontAwesomeIcon className="logo logoW logo-above animate__animated animate__pulse" icon={faWonSign} />
            {/* <img className="sub-logo" src={LogoSubtitle} alt="Wajid" /> */}
            <span className="logo-subtitle left-side animate__animated animate__backInRight">Mohd</span>
            <span className="logo-subtitle right-side animate__animated animate__backInLeft">Wajid</span>
          </Link>
          <nav>
            <NavLink exact="true" activeclassname="active" dataAttr="HOME" to="/">
              <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <NavLink activeclassname="active" className="about-link" dataAttr="USER" to="/about">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink activeclassname="active" className="contact-link" dataAttr="CONTACT" to="/contact">
              <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
          </nav>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/mohd-wajid-681495214/" dataAttr="Linkedin" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
                <div></div>
              </a>
            </li>
            <li>
              <a href="https://github.com/mohdWajid19" dataAttr="Github" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
                <div></div>
              </a>
            </li>
            <li>
              <a href="https://www.hackerrank.com/mohdwajeed1919" dataAttr="HackerRank" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faHackerrank} />
                <div></div>
              </a>
            </li>
          </ul>
        </div>
      )
}

export default Sidebar;
