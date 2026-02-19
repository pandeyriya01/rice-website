import { motion } from 'framer-motion';
import { FaShip, FaCheckCircle, FaTruck } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import Hero from '../components/Hero';
import './ExportMarkets.css';

const ExportMarkets = () => {
    const { t } = useLanguage();

    return (
        <div className="export-markets-page">
            <Hero
                title={t.exportMarkets.title}
                subtitle={t.exportMarkets.subtitle}
                backgroundImage="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920"
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="export-content">
                        <motion.div
                            className="export-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2>{t.exportMarkets.dubaiTitle}</h2>
                            <p>{t.exportMarkets.dubaiDesc}</p>
                        </motion.div>
                        <motion.div
                            className="export-image"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800" alt="Dubai" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section bg-beige">
                <div className="container">
                    <div className="strengths-grid">
                        <motion.div
                            className="strength-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="strength-icon"><FaTruck /></div>
                            <h3>{t.exportMarkets.logisticsTitle}</h3>
                            <p>{t.exportMarkets.logisticsDesc}</p>
                        </motion.div>

                        <motion.div
                            className="strength-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="strength-icon"><FaCheckCircle /></div>
                            <h3>{t.exportMarkets.qualityTitle}</h3>
                            <p>{t.exportMarkets.qualityDesc}</p>
                        </motion.div>

                        <motion.div
                            className="strength-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="strength-icon"><FaShip /></div>
                            <h3>Efficient Shipping</h3>
                            <p>Fast and reliable shipping to all major ports</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container text-center">
                    <h2>{t.exportMarkets.statsTitle}</h2>
                    <div className="export-stats">
                        <motion.div
                            className="export-stat"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="export-stat-number">10,000+</div>
                            <div className="export-stat-label">{t.exportMarkets.stat1}</div>
                        </motion.div>

                        <motion.div
                            className="export-stat"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="export-stat-number">500+</div>
                            <div className="export-stat-label">{t.exportMarkets.stat2}</div>
                        </motion.div>

                        <motion.div
                            className="export-stat"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="export-stat-number">15+</div>
                            <div className="export-stat-label">{t.exportMarkets.stat3}</div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExportMarkets;
