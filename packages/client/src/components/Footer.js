import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeetup, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="container-fluid">
        <div className="row">
          <div className="col">
            <p>
              This page is brought to you by volunteers from <a href="https://openmaine.org/" target="_BLANK" rel="noreferrer">OpenMaine</a>, an official <a href="https://brigade.codeforamerica.org/" target="_BLANK" rel="noreferrer">Code for America Brigade</a>.
            </p>
          </div>
          <div className="col">
              <a href="https://www.meetup.com/OpenMaine/" target="_BLANK" rel="noreferrer" alt="meetup logo" ><FontAwesomeIcon className="icon" icon={faMeetup} /></a>
              <a href="https://www.facebook.com/openmaine/" target="_BLANK" rel="noreferrer" alt="facebook logo"><FontAwesomeIcon className="icon" icon={faFacebook} /></a>
          </div>
          <div className="col">
            <p>Got questions about this page? <a href="mailto:hello@openmaine.org">Contact us.</a></p>
          </div>
        </div>
    </footer>
  )
}

export default Footer;