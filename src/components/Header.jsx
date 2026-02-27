import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
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
              <div className="footer-logo-text">
                <h3 className="footer-title">Rice Export</h3>
                <p className="company-name">Nyjah Exim Pvt Ltd</p>
              </div>
            </div>

            <p className="footer-about">
              {t.footer.aboutText}
            </p>

            <div className="footer-social">
              <a href="https://facebook.com/NyjahExim" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/gaurav-vishnoi-b14530221"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.youtube.com/@Nyjahexim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
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
                <span>
                  Kanth Road, Bhatavali, Near Photon Hospital,
                  Moradabad – 244001, Uttar Pradesh, India
                </span>
              </li>

              <li>
                <FaPhone />
                <a href="tel:+919990805112">
                  +91 9990805112 / +91 8630880926
                </a>
              </li>

              <li>
                <FaEnvelope />
                <a href="mailto:info@nyjahexim.com">
                  info@nyjahexim.com
                </a>
              </li>

              <li>
                <FaWhatsapp />
                <a
                  href="https://wa.me/919990805112"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>
            © {currentYear} Nyjah Exim Pvt Ltd. All rights reserved. |
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

          <p className="footer-cin">
            Corporate Identification Number (CIN): U46209UP2026PTC243874
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;