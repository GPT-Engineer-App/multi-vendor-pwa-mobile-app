import { Loader2 } from 'lucide-react';
import React from 'react';

const Splash = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black relative">
      <div className="absolute top-0 left-0 bg-gradient-to-br from-white to-transparent rounded-full"
       style={{ 
        width: '58vh', 
        height: '58vh',
        top: '-25vh',
        left: '-25vh',
        overflow: 'clip',
        opacity: 0.3
      }}></div>
      <div className="absolute bottom-0 right-0 bg-gradient-to-tl from-white to-transparent rounded-full"
      style={{
        width: '58vh', 
        height: '58vh',
        bottom: '-25vh',
        right: '-25vh',
       overflow: 'clip',
       opacity: 0.3
      }}
      ></div>
      <div>
      <img src="/assets/images/splash_logo.png" alt="Logo" className="z-10" />
      <h2 className='text-white text-center' style={{ fontWeight: '900'}}>Customer</h2>
      </div>
    </div>
  );
};

export default Splash;