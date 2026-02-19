import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEye, FaBullseye, FaGlobeAmericas } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import Hero from '../components/Hero';
import './About.css';

const About = () => {
    const { t } = useLanguage();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="about-page">
            <Hero
                title={t.about.title}
                subtitle={t.about.subtitle}
                backgroundImage="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920"
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="about-content">
                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2>{t.about.companyStory}</h2>
                            <p>{t.about.storyText}</p>
                        </motion.div>
                        <motion.div
                            className="about-image"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800" alt="Rice Fields" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section bg-beige" ref={ref}>
                <div className="container">
                    <div className="vision-mission-grid">
                        <motion.div
                            className="vm-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="vm-icon"><FaEye /></div>
                            <h3>{t.about.vision}</h3>
                            <p>{t.about.visionText}</p>
                        </motion.div>

                        <motion.div
                            className="vm-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="vm-icon"><FaBullseye /></div>
                            <h3>{t.about.mission}</h3>
                            <p>{t.about.missionText}</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="stats-grid">
                        <motion.div
                            className="stat-card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="stat-number">25+</div>
                            <div className="stat-label">{t.about.experience}</div>
                        </motion.div>

                        <motion.div
                            className="stat-card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="stat-icon"><FaGlobeAmericas /></div>
                            <div className="stat-label">{t.about.globalPresence}</div>
                            <p>{t.about.presenceText}</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
