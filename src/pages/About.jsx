import aboutImg from "../assets/rice.jpg";
import ricePlantImg from "../assets/riceplant.jpg";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEye, FaBullseye } from 'react-icons/fa';
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
                backgroundImage={aboutImg}
                height="medium"
            />

            {/* Company Story */}
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
                           <img src={ricePlantImg} alt="Rice Plant" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
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

        </div>
    );
};

export default About;