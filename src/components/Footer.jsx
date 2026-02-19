import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* About Section */}
                    <div className="footer-section">
                        <div className="footer-logo">
                            <div className="footer-logo-icon">🌾</div>
                            <h3>Rice Export</h3>
                        </div>
                        <p className="footer-about">{t.footer.aboutText}</p>
                        <div className="footer-social">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4>{t.footer.quickLinks}</h4>
                        <ul className="footer-links">
                            <li><Link to="/">{t.nav.home}</Link></li>
                            <li><Link to="/about">{t.nav.about}</Link></li>
                            <li><Link to="/products">{t.nav.products}</Link></li>
                            <li><Link to="/export-markets">{t.nav.exportMarkets}</Link></li>
                            <li><Link to="/quality">{t.nav.quality}</Link></li>
                            <li><Link to="/why-choose-us">{t.nav.whyChooseUs}</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="footer-section">
                        <h4>{t.footer.products}</h4>
                        <ul className="footer-links">
                            <li><Link to="/products">{t.products.basmatiTitle}</Link></li>
                            <li><Link to="/products">{t.products.nonBasmatiTitle}</Link></li>
                            <li><Link to="/products">{t.products.parboiledTitle}</Link></li>
                            <li><Link to="/products">{t.products.brokenTitle}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4>{t.footer.contactInfo}</h4>
                        <ul className="footer-contact">
                            <li>
                                <FaMapMarkerAlt />
                                <span>{t.contact.addressText}</span>
                            </li>
                            <li>
                                <FaPhone />
                                <a href="tel:+919990805112">{t.contact.phoneText}</a>
                            </li>
                            <li>
                                <FaEnvelope />
                                <a href="mailto:info@riceexport.com">{t.contact.emailText}</a>
                            </li>
                            <li>
                                <FaWhatsapp />
                                <a href="https://wa.me/919990805112" target="_blank" rel="noopener noreferrer">
                                    {t.contact.whatsapp}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <div className="footer-bottom">
  <p>
    © {currentYear} Nyjah Exim. All rights reserved. | 
    Developed and Design by{' '}
    <a
      href="https://zentrixinfotech.com"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link"
    >
      Zentrix Infotech
    </a>
  </p>
</div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
