import React from 'react';

const Login = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email or Phone</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4 text-right">
            <a href="/forgot-password" className="text-blue-500">Forgot password?</a>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
        <div className="mt-4 text-center">
          <a href="/register" className="text-blue-500">Don't have an account? Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;