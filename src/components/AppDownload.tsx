
import React from 'react';
import { Button } from "@/components/ui/button";

const AppDownload: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 p-6">
          <img 
            src="/lovable-uploads/74bb00f0-24cc-4e65-847d-96dc52de5510.png" 
            alt="Mobile App" 
            className="max-w-full h-auto"
          />
        </div>
        <div className="md:w-2/3 p-6 md:p-8 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-6">TẢI ỨNG DỤNG</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="default" className="bg-gray-800 hover:bg-gray-700 text-white flex items-center gap-2">
              <img src="https://placehold.co/20x20" alt="Google Play" className="w-5 h-5" />
              CH Play
            </Button>
            <Button variant="default" className="bg-gray-800 hover:bg-gray-700 text-white flex items-center gap-2">
              <img src="https://placehold.co/20x20" alt="App Store" className="w-5 h-5" />
              App Store
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
