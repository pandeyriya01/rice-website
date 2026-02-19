import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle, FaGlobeAsia, FaCertificate, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import './Home.css';

const Home = () => {
    const { t } = useLanguage();
    const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [productsRef, productsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const features = [
        {
            icon: <FaCheckCircle />,
            title: t.home.feature1Title,
            description: t.home.feature1Desc,
        },
        {
            icon: <FaGlobeAsia />,
            title: t.home.feature2Title,
            description: t.home.feature2Desc,
        },
        {
            icon: <FaCertificate />,
            title: t.home.feature3Title,
            description: t.home.feature3Desc,
        },
    ];

    const products = [
        {
            image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800',
            title: t.products.basmatiTitle,
            description: t.products.basmatiDesc,
        },
        {
            image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800',
            title: t.products.nonBasmatiTitle,
            description: t.products.nonBasmatiDesc,
        },
        {
            image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800',
            title: t.products.parboiledTitle,
            description: t.products.parboiledDesc,
        },
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <Hero
                title={t.home.heroTitle}
                subtitle={t.home.heroSubtitle}
                description={t.home.heroDescription}
                backgroundImage="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1920"
                height="large"
            >
                <Link to="/contact">
                    <Button variant="primary" icon={<FaArrowRight />}>
                        {t.home.ctaContact}
                    </Button>
                </Link>
                <Link to="/products">
                    <Button variant="white">
                        {t.home.ctaProducts}
                    </Button>
                </Link>
            </Hero>

            {/* Features Section */}
            <section className="section bg-beige" ref={featuresRef}>
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>{t.home.featuresTitle}</h2>
                    </motion.div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-card"
                                initial={{ opacity: 0, y: 50 }}
                                animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Preview Section */}
            <section className="section" ref={productsRef}>
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={productsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>{t.home.productsPreviewTitle}</h2>
                        <p className="section-description">{t.home.productsPreviewDesc}</p>
                    </motion.div>

                    <div className="products-grid">
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                image={product.image}
                                title={product.title}
                                description={product.description}
                                index={index}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-xl">
                        <Link to="/products">
                            <Button variant="primary" icon={<FaArrowRight />}>
                                {t.common.viewAll}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="overlay"></div>
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2>Ready to Experience Premium Quality?</h2>
                        <p>Contact us today for the best rice export solutions</p>
                        <Link to="/contact">
                            <Button variant="white" icon={<FaArrowRight />}>
                                {t.common.getQuote}
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
