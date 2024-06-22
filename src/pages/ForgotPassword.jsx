import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;