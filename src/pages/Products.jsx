import { useLanguage } from '../context/LanguageContext';
import parboiledImg from "./parboiled.jpg";
import brokenImg from "./broken.jpg";
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = () => {
    const { t } = useLanguage();

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
            image: parboiledImg,
            title: t.products.parboiledTitle,
            description: t.products.parboiledDesc,
        },
        {
            image: brokenImg,
            title: t.products.brokenTitle,
            description: t.products.brokenDesc,
        },
    ];

    return (
        <div className="products-page">
            <Hero
                title={t.products.title}
                subtitle={t.products.subtitle}
                backgroundImage="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1920"
                height="medium"
            />

            <section className="section">
                <div className="container">
                    <div className="products-grid-page">
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
                </div>
            </section>
        </div>
    );
};

export default Products;
