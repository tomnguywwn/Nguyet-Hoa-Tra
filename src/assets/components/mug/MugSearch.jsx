import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, Flower2, X } from 'lucide-react';
import './MugSearchStyles.css';

export default function MugSearch({ onSearch, onFilter }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [filters, setFilters] = useState({
        priceRange: 'all',
        category: 'all',
        sortBy: 'featured'
    });

    // Handle search input change
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Call the parent component's onSearch function if provided
        if (onSearch) {
            onSearch(value);
        }
    };

    const clearSearch = () => {
        setSearchTerm('');
        if (onSearch) {
            onSearch('');
        }
    };

    // Update filters and notify parent component
    const handleFilterChange = (filterType, value) => {
        const updatedFilters = {
            ...filters,
            [filterType]: value
        };

        setFilters(updatedFilters);

        if (onFilter) {
            onFilter(updatedFilters);
        }
    };

    // Apply filters when component mounts
    useEffect(() => {
        if (onFilter) {
            onFilter(filters);
        }
    }, []);

    return (
        <div className="search-container p-6 rounded-2xl shadow-sm mb-8 relative overflow-hidden">
            <Flower2 className="search-flower flower-1 w-6 h-6" />
            <Flower2 className="search-flower flower-2 w-6 h-6" />
            <Flower2 className="search-flower flower-3 w-5 h-5" />

            <div className="flex gap-4 items-center">
                <div className="flex-1 relative">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search for your perfect product..."
                        className="search-input w-full pl-12 pr-10 py-3 border-2 border-gray-700 rounded-xl
                                 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200
                                 bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400 w-5 h-5" />
                    {searchTerm && (
                        <button
                            onClick={clearSearch}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`filter-button flex items-center gap-2 px-6 py-3 border-2 
                             rounded-xl transition-all
                             bg-white/80 backdrop-blur-sm text-gray-700
                             ${isOpen ? 'border-amber-400 bg-pink-50' : 'border-gray-700'}`}
                >
                    <SlidersHorizontal className="w-5 h-5 text-amber-400" />
                    <span>Filters</span>
                </button>
            </div>

            {/* Filter Panel */}
            {isOpen && (
                <div className="mt-4 p-4 bg-white/90 backdrop-blur-sm rounded-xl border-2 border-pink-100 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Giá</label>
                            <select
                                value={filters.priceRange}
                                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                                className="w-full p-2 border border-gray-700 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                            >
                                <option value="tất cả">Tất cả</option>
                                <option value="dưới 100k">dưới 100k</option>
                                <option value="100k-150k">100k-150k</option>
                                <option value="trên 150k">trên 150k</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Mặt hàng</label>
                            <select
                                value={filters.category}
                                onChange={(e) => handleFilterChange('category', e.target.value)}
                                className="w-full p-2 border border-gray-700 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                            >
                                <option value="all">Tất cả</option>
                                <option value="Chườm bụng">Chườm bụng</option>
                                <option value="Tiêu hóa">Tiêu hóa</option>
                                <option value="Bổ huyết">Bổ huyết</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Sort By</label>
                            <select
                                value={filters.sortBy}
                                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                                className="w-full p-2 border border-gray-700 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                            >
                                <option value="featured">Sắp xếp</option>
                                <option value="price_asc">Giá: Thấp đến cao</option>
                                <option value="price_desc">Giá: Cao đến thấp</option>
                                <option value="bestseller">Bán chạy</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button
                            onClick={() => {
                                const defaultFilters = {
                                    priceRange: 'all',
                                    category: 'all',
                                    sortBy: 'featured'
                                };
                                setFilters(defaultFilters);
                                if (onFilter) onFilter(defaultFilters);
                            }}
                            className="px-4 py-2 text-sm text-amber-600 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors"
                        >
                            Bỏ lọc
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}