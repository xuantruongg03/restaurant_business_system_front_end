
import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Restaurant } from '@/interfaces/restaurant';

const ContactInfo: React.FC = ({ info }: { info: Restaurant[] }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Tất cả cơ sở</h3>
      <div className="space-y-5">
        {info.length > 0 ? (
          info.map(location => (
            <div key={location.id} className="flex gap-3">
              <MapPin className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">{location.address}</p> 
            </div>
          </div>
        ))
        ) : (
          <p>Chưa cập nhật</p>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
