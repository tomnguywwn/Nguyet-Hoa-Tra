import React, { useState } from 'react';
import { ChevronRight, Phone, Mail, MapPin, ShoppingCart, Moon, Heart, Send } from 'lucide-react';
import nht1 from '../../images/nht1.jpg'
import nht2 from '../../images/nht2.jpg'
import nht3 from '../../images/nht3.jpg'
import kqtl3 from '../../images/kqtl3.jpg'
import tc from '../../images/tuichuom.jpg'
import home_mug from '../../images/nguyethoatra_logo.jpg'
import useCart from '../../components/cart/CartContext'; // Adjust path as needed
import './HomeStyles.css'

export default function Home() {
    const [messageSent, setMessageSent] = useState(false);
    const [favorites, setFavorites] = useState(new Set());
    const { addToCart, itemCount } = useCart();

    // Product data with IDs for cart functionality
    const products = [
        {
            id: 1,
            title: 'Nguyệt hoa trà',
            image: nht3,
            description: 'Trà bổ huyết, lưu thông máu, hỗ trợ giảm đau bụng kinh cho phụ nữ, 30 gói một sản phẩm, khối lượng tịnh 40g',
            price: 230000, // Store as number for calculations
            priceDisplay: '230.000 VND'
        },
        {
            id: 2,
            title: 'Trà detox kim quất',
            image: kqtl3,
            description: 'Trà detox, thanh mát, tốt cho hệ tiêu hóa, 20 gói một sản phẩm, khối lượng tịnh 40g',
            price: 139000,
            priceDisplay: '139.000 VND'
        },
        {
            id: 3,
            title: 'Túi chườm',
            image: tc,
            description: 'Túi chườm giảm đau bụng, thư giãn',
            price: 40000,
            priceDisplay: '40.000 VND'
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageSent(true);
        setTimeout(() => setMessageSent(false), 2000);
    };

    const toggleFavorite = (index) => {
        const newFavorites = new Set(favorites);
        if (newFavorites.has(index)) {
            newFavorites.delete(index);
        } else {
            newFavorites.add(index);
        }
        setFavorites(newFavorites);
    };

    const handleAddToCart = (product) => {
        addToCart({
            id: product.id,
            name: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });

        // Optional: Show success feedback
        // You could replace this with a toast notification
        alert(`${product.title} đã được thêm vào giỏ hàng!`);
    };

    return (
        <main>
            {/* Hero Section */}
            <section className="pt-20 bg-gradient-to-r from-amber-50 via-white to-amber-50 relative overflow-hidden">
                <Moon className="hero-flower flower-spin w-20 h-20 left-10 top-40" />
                <Moon className="hero-flower flower-spin w-16 h-16 right-20 bottom-20" />

                <div className="container mx-auto px-4 py-20">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0 relative">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                Premium Tea for <span className="text-amber-500">Mindful Moments</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Hãy khám phá những sản phẩm trà cao cấp của Nguyệt Hoa Trà ✨
                            </p>
                            <button className="bg-amber-500 text-white px-8 py-3 rounded-full flex items-center hover:bg-amber-600 transition-all hover:transform hover:scale-105 hover:shadow-lg">
                                Shop Now <ChevronRight className="ml-2" />
                            </button>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src={home_mug}
                                alt="Beautiful Tea Cup"
                                className="rounded-lg shadow-xl image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Collection Section */}
            <section id="collection" className="py-20 bg-gradient-to-b from-amber-50 to-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Our <span className="text-amber-500">Tea Collection</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <div key={product.id} className="collection-card bg-white rounded-lg shadow-lg overflow-hidden relative">
                                <Moon className="card-flower w-8 h-8 text-amber-500" />
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-semibold">{product.title}</h3>
                                        <button
                                            onClick={() => toggleFavorite(index)}
                                            className="text-amber-500 hover:scale-125 transition-transform"
                                        >
                                            <Heart
                                                className={`w-6 h-6 ${favorites.has(index) ? 'fill-current' : ''}`}
                                            />
                                        </button>
                                    </div>
                                    <p className="text-gray-600 mb-4">{product.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-amber-600 font-bold">{product.priceDisplay}</span>
                                        <button
                                            onClick={() => handleAddToCart(product)}
                                            className="bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-all hover:scale-105 flex items-center"
                                        >
                                            Add to Cart <ShoppingCart className="ml-2 w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-gradient-to-t from-amber-50 to-white py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Get in <span className="text-amber-500">Touch</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            {[
                                { Icon: Phone, text: '+84 982 242 881', label: 'Phone' },
                                { Icon: Mail, text: 'hello@nguyethoatra.com', label: 'Email' },
                                { Icon: MapPin, text: 'Hoa Lac, Hanoi, Vietnam', label: 'Address' }
                            ].map(({ Icon, text, label }, index) => (
                                <div key={index} className="contact-item flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <Icon className="contact-icon w-6 h-6 text-amber-500 mr-4" />
                                    <div>
                                        <h3 className="font-semibold">{label}</h3>
                                        <p className="text-gray-600">{text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {['Name', 'Email'].map((placeholder, index) => (
                                <div key={index} className="input-wrapper">
                                    <input
                                        type={placeholder.toLowerCase()}
                                        placeholder={`Your ${placeholder}`}
                                        className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:border-amber-500 transition-all"
                                    />
                                </div>
                            ))}
                            <div className="input-wrapper">
                                <textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:border-amber-500 transition-all"
                                ></textarea>
                            </div>
                            <button
                                className={`bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 
                                          transition-all hover:shadow-lg flex items-center justify-center gap-2
                                          ${messageSent ? 'send-animation' : ''}`}
                            >
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}