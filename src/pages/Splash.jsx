import React from 'react';

const Splash = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black relative">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-white to-transparent rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-white to-transparent rounded-full"></div>
      <img src="/logo.png" alt="Logo" className="z-10" />
    </div>
  );
};

export default Splash;