import { motion } from 'framer-motion';
import './Hero.css';

const Hero = ({
    title,
    subtitle,
    description,
    backgroundImage,
    children,
    height = 'large' // 'small', 'medium', 'large'
}) => {
    return (
        <section className={`hero hero-${height}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {subtitle && (
                            <motion.p
                                className="hero-subtitle"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                {subtitle}
                            </motion.p>
                        )}
                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            {title}
                        </motion.h1>
                        {description && (
                            <motion.p
                                className="hero-description"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                {description}
                            </motion.p>
                        )}
                        {children && (
                            <motion.div
                                className="hero-actions"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                            >
                                {children}
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
