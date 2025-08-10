import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Using react-icons for social media

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-amb-dark text-amb-light p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="flex items-center space-x-2 mb-2">
            <Phone className="h-5 w-5 text-amb-accent" />
            <a href="tel:267-577-2253" className="text-amb-light hover:text-amb-accent transition-colors">
              267-577-2253
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-amb-accent" />
            <a href="mailto:info@ambhomecare.com" className="text-amb-light hover:text-amb-accent transition-colors">
              info@ambhomecare.com
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/AbleMindandBodyHomeCare" target="_blank" rel="noopener noreferrer" className="text-amb-light hover:text-amb-accent transition-colors">
              <FaFacebook className="h-7 w-7" />
            </a>
            <a href="https://x.com/ambhomecare" target="_blank" rel="noopener noreferrer" className="text-amb-light hover:text-amb-accent transition-colors">
              <FaTwitter className="h-7 w-7" />
            </a>
            <a href="https://www.instagram.com/ambhomecare/" target="_blank" rel="noopener noreferrer" className="text-amb-light hover:text-amb-accent transition-colors">
              <FaInstagram className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-4 border-t border-amb-primary text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Able Mind & Body. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;