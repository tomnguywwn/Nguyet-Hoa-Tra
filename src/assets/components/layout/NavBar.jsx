// NavBar.jsx
import React, {useEffect, useRef, useState} from 'react';
import {Flower2, Heart, LogOut, Menu, Moon, Settings, ShoppingBag, ShoppingCart, User, X} from 'lucide-react';
import {Link} from 'react-router-dom';
import logo from '../../images/nguyethoatra_logo.jpg';
import useCart from "../cart/CartContext.jsx";
import {useAuth} from "../user/AuthContext.jsx";
import './NavbarStyles.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const {itemCount} = useCart();
    const {user, logout} = useAuth();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsUserDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        logout();
        setIsUserDropdownOpen(false);
    };

    return (
        <header className="fixed w-full navbar-gradient shadow-lg z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20 relative">
                    {/* Decorative flowers */}
                    <Moon className="flower-icon left-2"/>
                    <Moon className="flower-icon right-2"/>

                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-10 rounded-full shadow-md" alt="Muggie Logo"/>
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap text-amber-300 hover:text-amber-500 transition-colors">
                        Nguyệt Hoa Trà
                    </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        <Link to="/" className="nav-link text-amber-300 hover:text-amber-500">Trang chủ</Link>
                        <Link to="/mugs" className="nav-link text-amber-300 hover:text-amber-500">Cửa hàng</Link>
                        <Link to="/mugs/bestsellers" className="nav-link text-amber-300 hover:text-amber-500">Bán chạy</Link>
                        <Link to="/contact" className="nav-link text-amber-300 hover:text-amber-500">Liên hệ</Link>

                        {user && (
                            <span className="text-amber-500 font-medium">
                            Welcome, {user.name}!
                        </span>
                        )}

                        <Link to="/cart"
                              className="text-amber-300 hover:text-amber-500 relative transition-transform hover:scale-110">
                            <ShoppingCart className="w-6 h-6"/>
                            {itemCount > 0 && (
                                <span
                                    className="absolute -top-2 -right-2 bg-amber-300 text-green-950 text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                                {itemCount}
                            </span>
                            )}
                        </Link>

                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                                className={`text-amber-300 hover:text-amber-500 transition-all rounded-full p-1
                                     ${user ? 'bg-amber-100' : ''} ${isUserDropdownOpen ? 'ring-2 ring-amber-500' : ''}`}
                            >
                                <User className="w-6 h-6"/>
                            </button>

                            {isUserDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-50
                                          border-2 border-amber-100 animate-fadeIn">
                                    {user ? (
                                        <>
                                            <div className="px-4 py-2 border-b border-amber-100">
                                                <p className="text-sm font-medium text-gray-700">{user.name}</p>
                                                <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                            </div>
                                            <Link to="/profile"
                                                  className="px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 flex items-center">
                                                <User className="w-4 h-4 mr-2 text-amber-400"/>
                                                Hồ sơ của tôi
                                            </Link>
                                            <Link to="/orders"
                                                  className="px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 flex items-center">
                                                <ShoppingBag className="w-4 h-4 mr-2 text-amber-400"/>
                                                Đơn hàng của tôi
                                            </Link>
                                            <Link to="/wishlist"
                                                  className="px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 flex items-center">
                                                <Heart className="w-4 h-4 mr-2 text-amber-400"/>
                                                Yêu thích
                                            </Link>
                                            <Link to="/settings"
                                                  className="px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 flex items-center">
                                                <Settings className="w-4 h-4 mr-2 text-amber-400"/>
                                                Cài đặt
                                            </Link>
                                            <div className="border-t border-amber-100 mt-1"></div>
                                            <button
                                                onClick={handleLogout}
                                                className="px-4 py-2 text-sm text-red-600 hover:bg-amber-50 flex items-center w-full text-left"
                                            >
                                                <LogOut className="w-4 h-4 mr-2"/>
                                                Đăng xuất
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <Link to="/login"
                                                  className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-amber-50 flex items-center">
                                                Đăng nhập
                                            </Link>
                                            <Link to="/register"
                                                  className="px-4 py-3 text-sm font-medium text-amber-600 hover:bg-amber-50 flex items-center">
                                                Tạo tài khoản
                                            </Link>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-amber-600 hover:text-amber-700 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X/> : <Menu/>}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden navbar-gradient border-t border-amber-200">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link to="/"
                              className="block px-3 py-2 text-amber-700 hover:text-amber-500 hover:bg-amber-100 rounded-lg transition-colors">Trang chủ</Link>
                        <Link to="/mugs"
                              className="block px-3 py-2 text-amber-700 hover:text-amber-500 hover:bg-amber-100 rounded-lg transition-colors">Bộ sưu tập</Link>
                        <Link to="/mugs/bestsellers"
                              className="block px-3 py-2 text-amber-700 hover:text-amber-500 hover:bg-amber-100 rounded-lg transition-colors">Bán chạy</Link>
                        <Link to="/contact"
                              className="block px-3 py-2 text-amber-700 hover:text-amber-500 hover:bg-amber-100 rounded-lg transition-colors">Liên hệ</Link>

                        {user ? (
                            <>
                                <div className="block px-3 py-2 text-amber-700 font-medium">Welcome, {user.name}!</div>
                                <Link to="/profile"
                                      className="block px-3 py-2 text-amber-700 hover:text-amber-500 hover:bg-amber-100 rounded-lg transition-colors">My
                                    Profile</Link>
                                <Link to="/orders"
                                      className="block px-3 py-2 text-amber-700 hover:text-amber-500 hover:bg-amber-100 rounded-lg transition-colors">My
                                    Orders</Link>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-3 py-2 text-red-600 hover:text-red-700 hover:bg-amber-100 rounded-lg transition-colors"
                                >
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login"
                                      className="block px-3 py-2 text-amber-700 hover:text-amber-500 hover:bg-amber-100 rounded-lg transition-colors">Sign
                                    In</Link>
                                <Link to="/register"
                                      className="block px-3 py-2 text-amber-700 hover:text-amber-500 hover:bg-amber-100 rounded-lg transition-colors">Create
                                    Account</Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}