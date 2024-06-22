import React from 'react';

const Register = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input type="tel" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input type="password" className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;