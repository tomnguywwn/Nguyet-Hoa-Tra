import { ShoppingCart } from 'lucide-react';
import useCart from "../cart/CartContext.jsx";
import { Link } from 'react-router-dom';

// Utility function to format VND currency
const formatVND = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " VND";
};

export default function MugCard({ id, image, name, price, originalPrice }) {
    const { addToCart } = useCart();

    return (
        <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
            <Link to={`/mug/${id}`}>
                <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </Link>
            <div className="p-4">
                <Link to={`/mug/${id}`}>
                    <h3 className="text-gray-800 font-medium text-lg mb-2 group-hover:text-amber-500 transition-colors">
                        {name}
                    </h3>
                </Link>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-green-700 font-bold text-lg">{formatVND(price)}</span>
                        {originalPrice && (
                            <span className="ml-2 text-gray-400 line-through text-sm">
                                {formatVND(originalPrice)}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={() => addToCart({ id, name, price, image })}
                        className="bg-amber-500 text-white p-2 rounded-full hover:bg-amber-600 transition-colors"
                    >
                        <ShoppingCart className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}