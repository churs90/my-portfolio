import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import classes from './Footer.module.css'





const Footer = () => {
  return (
      <footer className={classes.footer}>
          <nav className={classes.nav}>
              <ul>
                  <li><a href=""><FontAwesomeIcon icon={faVk}/></a></li>
              </ul>
              <ul>
                  <li><a href=""><FontAwesomeIcon icon={faInstagram}/></a></li>
              </ul>
              <ul>
                  <li><a href=""><FontAwesomeIcon icon={faFacebook}/></a></li>
              </ul>
              <ul>
                  <li><a href=""><FontAwesomeIcon icon={faLinkedin}/></a></li>
              </ul>
              <ul>
                  <li><a href=""><FontAwesomeIcon icon={faGithub}/></a></li>
              </ul>
          </nav>
          <p>© Vadim Chursin - 2020</p>
      </footer>
  );
};

export default Footer;