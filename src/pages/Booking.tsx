
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Booking: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Đặt Bàn Tại <span className="brand-name">EASTERY</span>
        </h1>
        <p className="text-center text-lg mb-12">
          Đặt bàn trước để có trải nghiệm tốt nhất
        </p>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl">Trang này đang được xây dựng</h2>
          <p className="text-gray-500 mt-2">Vui lòng quay lại sau</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
