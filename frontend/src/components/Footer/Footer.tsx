import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MainContent } from './styles';

const Footer: React.FC = () => {
  return (
    <MainContent>
      <div className="social-midia">
        <FaFacebookF className="icons" /> <FaTwitter className="icons" /> <FaGoogle className="icons" /> 
        <FaInstagram className="icons" /> <FaLinkedinIn className="icons" /> <FaGithub className="icons" />
      </div>
      <div className="copyright">
        <p>© 2022 Blog MCEC</p>
      </div>
    </MainContent>
  );
};

export default Footer;