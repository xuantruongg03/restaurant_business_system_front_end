import { formatPrice } from '@/lib/utils';
import React from 'react';

interface FoodOrderProps {
    idFood?: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
    paid: string;
}

const FoodOrder: React.FC<FoodOrderProps> = ({ idFood, name, image, price, quantity, paid }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row items-start gap-6">
                <span data-id={idFood} id={idFood}></span>
                <div className="relative w-full sm:w-32 h-40 sm:h-32">
                    <img
                        className="absolute inset-0 w-full h-full rounded-lg object-cover"
                        src={image}
                        alt={name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                </div>
                <div className="flex-1 space-y-4 w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <h5 className="font-semibold text-xl mb-1 sm:mb-0 text-gray-800">{name}</h5>
                        <span className="text-orange font-semibold text-lg">{formatPrice(price)}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 border-y border-gray-100">
                        <div className="flex items-center gap-2 mb-1 sm:mb-0">
                            <span className="text-gray-500">Số lượng:</span>
                            <span className="font-medium text-gray-700">{quantity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500">Tổng tiền:</span>
                            <span className="font-medium text-gray-700">{formatPrice(price * quantity)}</span>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <span className={`${paid === "Paid"
                            ? "bg-green-100 text-green-600"
                            : "bg-orange/10 text-orange"
                            } px-4 py-1.5 rounded-full text-sm font-medium`}>
                            {paid === "Paid" ? "Đã thanh toán" : "Chưa thanh toán"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodOrder;
