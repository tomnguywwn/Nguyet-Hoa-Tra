import React, { useMemo } from 'react';
import MugCard from "./MugCard.jsx";
import { Search } from 'lucide-react'
import nht3 from '../../images/nht3.jpg'
import nht1 from '../../images/nht1.jpg'
import nht2 from '../../images/nht2.jpg'
import kqtl1 from '../../images/kqtl1.jpg'
import kqtl2 from '../../images/kqtl1.jpg'
import kqtl3 from '../../images/kqtl1.jpg'
import tuichuom1 from '../../images/tuichuom.jpg'
export const mugs = [
        {
            "id": 1,
            "name": "Nguyệt Hoa Trà",
            "price": 65000,
            "originalPrice": 72000,
            "sellNumbers": 3000,
            "category": "Bổ huyết",
            "description": "Giảm đau bụng kinh, giúp bổ huyết, cải thiện tuần hoàn, giữ ấm và làm sáng da.",
            "features": [
                "100% thảo dược tự nhiên",
                "Không chất bảo quản",
                "Thơm nhẹ, dễ uống",
                "Hỗn hợp gừng, quế, ngải cứu, lá vối",
                "Các thành phần bổ huyết (như đinh lăng, bồ công anh, …)"
            ],
            "images": [nht1, nht2, nht3]
        },
        {
            "id": 2,
            "name": "Trà kim quất chanh leo",
            "price": 55000,
            "originalPrice": 60000,
            "sellNumbers": 1800,
            "currency": "VND",
            "category": "Tiêu hóa",
            "description": "Cải thiện chức năng đường ruột, giảm đầy hơi và khó tiêu.",
            "features": [
                "Chứa kim quất, chanh leo, cam thảo",
                "Có thể thêm vỏ quýt hoặc hoa cúc tùy khẩu vị",
                "Dùng sau bữa ăn"
            ],
            "images": [kqtl1, kqtl2, kqtl3]
        },
        //{
        //    "id": 3,
        //    "name": "Trà Detox",
        //    "price": 60000,
        //    "originalPrice": 66000,
         //   "sellNumbers": 2200,
        //    "currency": "VND",
        //    "category": "Thải độc",
        //    "description": "Hỗ trợ thải độc nhẹ nhàng, tăng cường chuyển hóa và làm đẹp da.",
        //    "features": [
        //        "Lá sen, rễ cam thảo, hoa cúc, cỏ ngọt",
        //        "Thải độc nhẹ",
        //        "Uống buổi sáng"
        //    ],
        //    "images": ["image3", "image3", "image3"]
        //},
        {
            "id": 3,
            "name": "Túi chườm thảo dược",
            "price": 40000,
            "originalPrice": 45000,
            "sellNumbers": 1500,
            "currency": "VND",
            "category": "Chườm bụng",
            "description": "Giữ ấm bụng, giảm đau bụng kinh và thư giãn cơ.",
            "features": [
                "Vỏ túi cotton",
                "Chứa muối thảo dược và ngải cứu khô",
                "Dùng 15–20 phút khi đau"
            ],
            "images": [tuichuom1, tuichuom1, tuichuom1]
        },
        //{
        //    "id": 5,
        //    "name": "Combo Chăm sóc kỳ kinh",
        //    "price": 255000,
        //    "originalPrice": 285000,
        //    "sellNumbers": 1200,
        //    "currency": "VND",
        //    "category": "Combo",
        //    "description": "Giảm đau, hỗ trợ tiêu hóa, giữ ấm và giảm co thắt trong kỳ kinh.",
        //    "features": [
        //        "3 hộp Nguyệt Hoa Trà",
        //        "1 Túi chườm",
        //        "1 hộp Trà hỗ trợ tiêu hóa"
        //    ],
        //    "images": ["image5", "image5", "image5"]
        //},
        //{
        //    "id": 6,
        //    "name": "Combo Thanh lọc cơ thể",
        //    "price": 215000,
        //    "originalPrice": 230000,
        //    "sellNumbers": 1000,
        //    "currency": "VND",
        //    "category": "Combo",
        //    "description": "Thải độc, cải thiện tiêu hóa và làn da, tặng kèm bình giữ nhiệt.",
        //    "features": [
        //        "2 hộp Trà detox",
        //        "2 hộp Trà hỗ trợ tiêu hóa",
        //        "Tặng 1 bình giữ nhiệt"
        //    ],
        //    "images": ["image6", "image6", "image6"]
        //},
        //{
        //    "id": 7,
        //    "name": "Combo Khởi đầu lành mạnh",
        //    "price": 200000,
        //    "originalPrice": 220000,
        //    "sellNumbers": 1100,
        //    "currency": "VND",
        //    "category": "Combo",
        //    "description": "Kết hợp cả ba loại trà và túi chườm để chăm sóc sức khỏe toàn diện trong kỳ kinh.",
        //    "features": [
        //        "1 hộp Nguyệt Hoa Trà",
        //        "1 hộp Trà detox",
        //        "1 hộp Trà hỗ trợ tiêu hóa",
        //        "1 Túi chườm"
        //    ],
        //    "images": ["image7", "image7", "image7"]
        //},
        //{
        //    "id": 8,
        //    "name": "Combo Quà tặng yêu thương",
        //    "price": 169000,
        //    "originalPrice": 178000,
        //    "sellNumbers": 1300,
        //    "currency": "VND",
        //    "category": "Combo quà tặng",
        //    "description": "Sản phẩm được đóng gói sang trọng, phù hợp làm quà tặng, hỗ trợ giảm đau và thải độc nhẹ.",
        //    "features": [
        //       "1 hộp Nguyệt Hoa Trà (hộp quà)",
        //        "1 hộp Trà detox (hộp quà)",
        //        "1 Túi chườm",
        //        "Thiệp chúc cá nhân"
        //    ],
        //    "images": ["image8", "image8", "image8"]
        //}
    ]
;

export default function MugList({ searchTerm = '', filters = {} }) {
    // Use useMemo to only recalculate when inputs change
    const filteredAndSortedMugs = useMemo(() => {
        // Start with all mugs
        let result = [...mugs];

        // Apply search term filter
        if (searchTerm) {
            result = result.filter(mug =>
                mug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                mug.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Apply price range filter
        if (filters.priceRange && filters.priceRange !== 'all') {
            result = result.filter(mug => {
                if (filters.priceRange === 'dưới 100k') return mug.price < 100000;
                if (filters.priceRange === '100k-150k') return mug.price >= 100000 && mug.price <= 150000;
                if (filters.priceRange === 'trên 150k') return mug.price > 50;
                return true;
            });
        }

        // Apply category filter
        if (filters.category && filters.category !== 'all') {
            result = result.filter(mug => mug.category === filters.category);
        }

        // Apply sorting
        if (filters.sortBy && filters.sortBy !== 'featured') {
            result.sort((a, b) => {
                if (filters.sortBy === 'price_asc') return a.price - b.price;
                if (filters.sortBy === 'price_desc') return b.price - a.price;
                if (filters.sortBy === 'bestseller') return b.sellNumbers - a.sellNumbers;
                return 0;
            });
        }

        return result;
    }, [searchTerm, filters]);

    return (
        <>
            {filteredAndSortedMugs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredAndSortedMugs.map((mug) => (
                        <MugCard
                            key={mug.id}
                            id={mug.id}
                            name={mug.name}
                            price={mug.price}
                            originalPrice={mug.originalPrice}
                            image={mug.images[0]}
                            sellNumbers={mug.sellNumbers}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-white/80 backdrop-blur-sm rounded-lg">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-amber-100">
                        <Search className="w-8 h-8 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">No products found</h3>
                    <p className="text-gray-500">Try adjusting your search or filters</p>
                </div>
            )}
        </>
    );
}