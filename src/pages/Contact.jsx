import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import riceImg from "../assets/rice.jpg";
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <div className="contact-page">
            <Hero
                title={t.contact.title}
                subtitle={t.contact.subtitle}
                backgroundImage={riceImg}
                height="small"
            />

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-section">
                            <h2>{t.contact.formTitle}</h2>
                            <ContactForm />
                        </div>

                        {/* Contact Information */}
                        <div className="contact-info-section">
                            <h2>{t.contact.infoTitle}</h2>

                            <div className="contact-info-cards">
                                <div className="contact-info-card">
                                    <div className="contact-info-icon">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="contact-info-content">
                                       <h4>{t.contact.address}</h4>
<p>
  Kanth Road, Bhatavali, Near Photon Hospital, Moradabad – 244001, Uttar Pradesh, India
</p>
                                    </div>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-info-icon">
                                        <FaPhone />
                                    </div>
                                   <div className="contact-info-content">
                                   <h4>{t.contact.phone}</h4>
  
                                  <a href="tel:+919990805112">+91 9990805112</a>
                                 <br />
                                <a href="tel:+918630880926">+91 8630880926</a>

                                  </div>
                                </div>
                                <div className="contact-info-card">
                                    <div className="contact-info-icon">
                                        <FaEnvelope />
                                    </div>
                                    <div className="contact-info-content">
                                        <h4>{t.contact.email}</h4>
                                        <a href="mailto:info@nyjahexim.com">{t.contact.emailText}</a>
                                    </div>
                                </div>

                                <div className="contact-info-card">
                                    <div className="contact-info-icon">
                                        <FaClock />
                                    </div>
                                    <div className="contact-info-content">
                                        <h4>{t.contact.hours}</h4>
                                        <p>{t.contact.hoursText}</p>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp CTA */}
                            <a
                                href="https://wa.me/919990805112"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-cta"
                            >
                                <FaWhatsapp />
                                <span>{t.contact.whatsapp}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="map-placeholder">
                    <FaMapMarkerAlt />
                    <p>Google Maps Integration</p>
                    <small>Add your Google Maps API key and coordinates</small>
                </div>
            </section>
        </div>
    );
};

export default Contact;
