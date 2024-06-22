import React from 'react';

const Onboarding = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex-1 bg-gray-200 flex items-center justify-center">
        <img src="/onboarding-image.png" alt="Onboarding" />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold">Welcome to Our App</h1>
          <p className="mt-2 text-gray-600">Discover the best products and services from multiple vendors.</p>
        </div>
        <div className="flex justify-between">
          <button className="bg-gray-300 px-4 py-2 rounded">Skip</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;