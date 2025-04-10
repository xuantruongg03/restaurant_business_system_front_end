import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FoodCard from '../components/FoodCard';
import ContactInfo from '../components/ContactInfo';
import AppDownload from '../components/AppDownload';
import { Card } from '@/components/ui/card';
import restaurantApi from '@/services/restaurant';
import ordersApi from '@/services/orders';
import { useQuery } from '@tanstack/react-query';
import { Food } from '@/interfaces/food';
import FoodOrder from '@/components/FoodOrder';
import { useNavigate } from 'react-router-dom';
import usePayment from '@/hooks/use-payment';
import Loading from '@/components/Loading';

const getInfoResReq = async (idTable: string) => {
  const res = await restaurantApi.getNameRestaurant({
    table_id: idTable,
  });
  return res;
};

const getFoodReq = async (idMenu: string) => {
  const res = await ordersApi.getFoodByMenu({ idMenu: idMenu });
  return res;
};

const checkBillReq = async (idTable: string) => {
  const res = await ordersApi.checkBill({ idTable: idTable });
  return res;
};

const getAllOrderClientReq = async (idTable: string) => {
  const res = await ordersApi.getAllOrderClient({ idTable: idTable });
  return res;
};

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const idMenu = urlParams.get("a");
  const idRestaurant = urlParams.get("b");
  const idTable = urlParams.get("c");
  const { payment, isPending } = usePayment();

  if (idMenu === null || idRestaurant === null || idTable === null) {
    window.location.href = "/not-found";
  }

  // const [food, setFood] = useState([]);
  // const [order, setOrder] = useState([]);

  const { data: nameRestaurant, isLoading: isLoadingNameRestaurant, error: errorNameRestaurant } = useQuery({
    queryKey: ["getInfoResReq", idTable],
    queryFn: () => getInfoResReq(idTable!),
    enabled: !!idTable,
  });

  const { data: food, isLoading: isLoadingFood } = useQuery({
    queryKey: ["getFoodReq", idMenu],
    queryFn: () => getFoodReq(idMenu!),
    enabled: !!idMenu,
  });

  const { data: checkBill, isLoading: isLoadingCheckBill, error: errorCheckBill } = useQuery({
    queryKey: ["checkBillReq", idTable],
    queryFn: () => checkBillReq(idTable!),
    enabled: !!idTable,
  });

  const { data: order, isLoading: isLoadingGetAllOrderClient, error: errorGetAllOrderClient } = useQuery({
    queryKey: ["getAllOrderClientReq", idTable],
    queryFn: () => getAllOrderClientReq(idTable!),
    enabled: checkBill != null && checkBill.result.idBill !== null,
  });

  const handlePayment = () => {
    payment({ idTable }).then((res) => {
      window.open(res.result.url, "_blank");
    }).catch((err) => {
      alert("Nhà hàng chưa chấp nhận thanh toán online!");
    })
  }

  if (isLoadingFood || isLoadingCheckBill || isLoadingGetAllOrderClient) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <h1 className="text-2xl font-bold mb-6">Món từ nhà hàng {nameRestaurant?.result[0].name}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {food.result.map((f: Food) => (
                <FoodCard key={f.idFood} food={f} idTable={idTable} />
              ))}
            </div>

            {/* <div className="mt-16">
              <AppDownload />
            </div> */}

            <div className="mt-16 bg-white rounded-lg shadow-md p-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Danh sách món đã gọi</h2>
              </div>

              {order?.result?.foods?.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    {order.result.foods.map((item, index) => (
                      <FoodOrder
                        key={index}
                        name={item.name}
                        image={item.image} 
                        price={item.price}
                        quantity={item.quantity}
                        paid={item.paid}
                      />
                    ))}
                  </div>
                  
                  <div className="flex justify-center mt-8 pt-6 border-t border-gray-200">
                    <button 
                      onClick={handlePayment} 
                      className="bg-orange hover:bg-orange-light text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
                    >
                      <span>THANH TOÁN</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 17h2m4 0h12"/>
                        <path d="M6 17v-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4"/>
                        <path d="M6 9h12"/>
                        <path d="M6 13h12"/>
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p className="text-lg mb-2">Chưa có món ăn nào được gọi</p>
                  <p className="text-sm">Hãy chọn món từ thực đơn phía trên</p>
                </div>
              )}
            </div>


            <div className="mt-16 bg-gray-800 text-white py-12 px-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-2">REGISTER FOR FREE</h2>
              <p className="mb-6">Create an account and start enjoying Eastery's exclusive perks and functionality!</p>
              <button className="bg-orange hover:bg-orange-light text-white py-2 px-8 rounded transition-all duration-300">
                ĐĂNG KÝ
              </button>
            </div>
          </div>

          <div className="lg:col-span-1">
            {/* <div className="bg-yellow-100 p-4 rounded-lg mb-8">
              <h3 className="font-semibold mb-2">Automatically save 2% on your bill if you reserve your table with DINE IN FLORIDA</h3>
            </div> */}

            <ContactInfo info = {nameRestaurant?.result} />

            {/* <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Chúng nhận của nhà hàng</h3>
              <div className="space-y-4">
                {partnerRestaurants.map(partner => (
                  <Card key={partner.id} className="p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{partner.name}</h4>
                      <p className="text-sm text-gray-500">{partner.reviews} đánh giá</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div> */}
          </div>


        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
