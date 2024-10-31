import React from 'react';
import { Cloud, Plane, MapPin } from 'lucide-react';

export default function Decorations() {
  return (
    <>
      <div className="absolute top-20 left-10 text-blue-500/20 floating-graphic" style={{ animationDelay: '0s' }}>
        <Cloud size={40} />
      </div>
      <div className="absolute top-40 right-20 text-blue-500/20 floating-graphic" style={{ animationDelay: '2s' }}>
        <Cloud size={30} />
      </div>
      <div className="absolute bottom-20 left-1/4 text-blue-500/20 floating-graphic" style={{ animationDelay: '4s' }}>
        <Plane size={35} className="transform rotate-45" />
      </div>
      <div className="absolute top-1/3 right-1/4 text-blue-500/20 floating-graphic" style={{ animationDelay: '1s' }}>
        <MapPin size={35} />
      </div>
    </>
  );
}