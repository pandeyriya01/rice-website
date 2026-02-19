import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ProductCard.css';

const ProductCard = ({ image, title, description, index = 0 }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            className="product-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <div className="product-card-image-wrapper">
                <img src={image} alt={title} className="product-card-image" />
                <div className="product-card-overlay"></div>
            </div>
            <div className="product-card-content">
                <h3 className="product-card-title">{title}</h3>
                <p className="product-card-description">{description}</p>
            </div>
        </motion.div>
    );
};

export default ProductCard;
