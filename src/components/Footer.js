import React from 'react';
import logo from '../images/logo-adalab.svg';
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <img className="Footer__image" src={logo} alt="Adalab" title="Adalab" />
      <small className="Footer__copy">Developed by Grisel with <i className="fas fa-heart"></i></small>
    </footer>
  );
}

export default Footer;
