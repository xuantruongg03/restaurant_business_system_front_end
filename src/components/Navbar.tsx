
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, User } from 'lucide-react';

interface NavItem {
  label: string;
  to: string;
  active?: boolean;
}

const Navbar: React.FC = () => {
  const navItems: NavItem[] = [
    { label: 'Trang chủ', to: '/', active: true },
    { label: 'Menu', to: '/menu' },
    { label: 'Đặt bàn', to: '/booking' },
    { label: 'Món', to: '/dishes' },
    { label: 'Đơn hàng', to: '/orders' },
    { label: 'Khuyến mãi', to: '/promotions' },
    { label: 'Liên hệ', to: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-medium">Welcome to <span className="brand-name">EASTERY</span></h1>
          <p className="text-sm text-gray-500 italic hidden sm:block">The best your choice</p>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link 
                  to={item.to} 
                  className={`nav-link ${item.active ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="flex items-center">
          <Link to="/auth" className="p-2 rounded-full hover:bg-gray-100 transition-colors mr-2">
            <User className="h-5 w-5" />
          </Link>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Bell className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
