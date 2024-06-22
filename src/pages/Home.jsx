import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Home</h1>
        <p>Welcome to the home screen.</p>
      </div>
      <div className="flex justify-around p-4 bg-gray-200">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/search" className="text-blue-500">Search</Link>
        <Link to="/cart" className="text-blue-500">Cart</Link>
        <Link to="/favourites" className="text-blue-500">Favourites</Link>
        <Link to="/profile" className="text-blue-500">Profile</Link>
      </div>
    </div>
  );
};

export default Home;