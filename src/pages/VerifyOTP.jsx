import React from 'react';

const VerifyOTP = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Verify OTP</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">OTP</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Verify</button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;