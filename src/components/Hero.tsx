
import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative h-[70vh] md:h-[80vh] bg-cover bg-center" style={{ 
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/lovable-uploads/d200b21c-fa49-42d8-91bf-e1369c6fbbcd.png')`,
      backgroundPosition: 'center 40%'
    }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">CHÀO MỪNG BẠN ĐẾN VỚI EASTERY</h2>
        <p className="text-lg md:text-xl mb-2 text-center">Đến với chúng tôi</p>
        <p className="text-lg md:text-xl mb-6 md:mb-8 text-center">Bạn sẽ có những trải nghiệm tuyệt vời nhất</p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/menu" className="btn-primary text-center">
            Xem menu
          </Link>
          <Link to="/booking" className="btn-primary text-center">
            Đặt bàn ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
