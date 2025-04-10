
import React, { useState } from 'react';
import { StarIcon } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Food } from '@/interfaces/food';
import { formatPrice } from '@/lib/utils';
import useUserOrder from '@/hooks/user-order';

interface FoodCardProps {
  food: Food;
  idTable: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ food, idTable }) => {

  const [quantity, setQuantity] = useState(1);
  const { order, isPendingOrder } = useUserOrder();

  const handleOrder = () => {
    order({ idTable: idTable, idFood: food.idFood, quantity: 1 }).then((res) => {
      alert('Đặt món thành công');
      window.location.reload();
      window.scrollTo(0, window.scrollY);
    });
  }

  const handleAddQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  }

  const handleSubQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="h-40 overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="pt-4 flex-grow">
        <h3 className="font-bold text-lg mb-1">{food.name}</h3>
        <p className="text-sm text-gray-500 mb-1">{food.type}</p>
        <p className="text-sm text-gray-500">{formatPrice(food.price)}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-0 pb-4">
        {/* <div className="flex items-center">
          <StarIcon className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
          <span className="text-sm">5 sao</span>
        </div> */}
        <div className="flex items-center gap-2">
          <button className="bg-gray-200 hover:bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center" onClick={handleSubQuantity}>-</button>
          <span className="text-sm">{quantity}</span>
          <button className="bg-gray-200 hover:bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center" onClick={handleAddQuantity}>+</button>
        </div>

        {
          isPendingOrder ? (
            <button className="bg-orange hover:bg-orange-light text-white text-sm py-1 px-4 rounded transition-all duration-300" disabled>
              <span className="inline-block w-4 h-4 border-2 border-white border-b-transparent rounded-full animate-spin"></span>
            </button>
          ) : (
            <button className="bg-orange hover:bg-orange-light text-white text-sm py-1 px-4 rounded transition-all duration-300" onClick={handleOrder}>
              ĐẶT MÓN
            </button>
          )
        }
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
