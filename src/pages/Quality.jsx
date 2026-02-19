import { motion } from 'framer-motion';
import { FaCheckCircle, FaFlask, FaCog, FaClipboardCheck } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import Hero from '../components/Hero';
import './Quality.css';

const Quality = () => {
    const { t } = useLanguage();

    const processSteps = [
        { icon: <FaCheckCircle />, title: t.quality.step1, description: t.quality.step1Desc },
        { icon: <FaFlask />, title: t.quality.step2, description: t.quality.step2Desc },
        { icon: <FaCog />, title: t.quality.step3, description: t.quality.step3Desc },
        { icon: <FaClipboardCheck />, title: t.quality.step4, description: t.quality.step4Desc },
    ];

    const certifications = [
    { 
        title: t.quality.isoTitle, 
        description: t.quality.isoDesc, 
        image: "/iso.png"
    },
    { 
        title: t.quality.fssaiTitle, 
        description: t.quality.fssaiDesc, 
        image: "/fassai.png"
    },
    { 
        title: t.quality.apedaTitle, 
        description: t.quality.apedaDesc, 
        image: "/apeda.png"
    },
];

    return (
        <div className="quality-page">
            <Hero
                title={t.quality.title}
                subtitle={t.quality.subtitle}
                backgroundImage="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920"
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>{t.quality.processTitle}</h2>
                    </div>

                    <div className="process-timeline">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="process-step"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="process-step-icon">{step.icon}</div>
                                <div className="process-step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                                
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-beige">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>{t.quality.certificationsTitle}</h2>
                    </div>

                    <div className="certifications-grid">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="certification-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <img src={cert.image} alt={cert.title} className="cert-logo" />
                                <h3>{cert.title}</h3>
                                <p>{cert.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Quality;
