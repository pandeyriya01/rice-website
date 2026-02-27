import { motion } from 'framer-motion';
import ricePlantImg from "../assets/rawrice.jpg";
import { FaHandshake, FaLeaf, FaSeedling, FaClock, FaDollarSign, FaHeadset } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import Hero from '../components/Hero';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const { t } = useLanguage();

    const reasons = [
        { icon: <FaHandshake />, title: t.whyChooseUs.reason1Title, description: t.whyChooseUs.reason1Desc },
        { icon: <FaLeaf />, title: t.whyChooseUs.reason2Title, description: t.whyChooseUs.reason2Desc },
        { icon: <FaSeedling />, title: t.whyChooseUs.reason3Title, description: t.whyChooseUs.reason3Desc },
        { icon: <FaClock />, title: t.whyChooseUs.reason4Title, description: t.whyChooseUs.reason4Desc },
        { icon: <FaDollarSign />, title: t.whyChooseUs.reason5Title, description: t.whyChooseUs.reason5Desc },
        { icon: <FaHeadset />, title: t.whyChooseUs.reason6Title, description: t.whyChooseUs.reason6Desc },
    ];

    return (
        <div className="why-choose-us-page">
            <Hero
                title={t.whyChooseUs.title}
                subtitle={t.whyChooseUs.subtitle}
                backgroundImage={ricePlantImg}
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="reasons-grid">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                className="reason-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="reason-icon">{reason.icon}</div>
                                <h3>{reason.title}</h3>
                                <p>{reason.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChooseUs;