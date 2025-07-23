import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import loginImage from '../assets/login-image.png';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const navigate = useNavigate();

  const isValidEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isValidUsername = value => /^[a-zA-Z0-9_.-]{3,}$/.test(value);
  const isIdentifierValid = value =>
    isValidEmail(value) || isValidUsername(value);

  const handleSubmit = e => {
    e.preventDefault();

    if (!identifier || !password) {
      toast.error('All fields are required.', { duration: 2000 });
      return;
    }

    if (!isIdentifierValid(identifier)) {
      toast.error('Please enter a valid email or username.', {
        duration: 2000,
      });
      return;
    }

    // All validations passed, disable button to prevent repeat clicks
    setIsButtonDisabled(true);
    toast.success('Login successful! Redirecting...');

    console.log('User Signed In', { identifier, password });

    // Simulate clearing and redirect
    setTimeout(() => {
      setIdentifier('');
      setPassword('');
      setIsButtonDisabled(false); // Reset button state
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 bg-gray-100 flex-col items-center justify-center gap-20 flex md:relative">
        <div className="text-xl font-bold mt-6 md:mt-0 md:absolute top-0 left-0 p-6">
          <Link to="/">3legant.</Link>
        </div>
        <img src={loginImage} alt="Chair" className="w-[100%] object-cover" />
      </div>

      {/* Right Section - Form */}
      <div className="flex w-full md:w-1/2">
        <div className="flex flex-col justify-center p-10 w-full">
          <div className="flex flex-col gap-2 mb-10 ">
            <h1 className="text-3xl lg:text-4xl font-medium">Sign In</h1>
            <p className="text-gray-500">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-blue-500 font-semibold hover:underline transition duration-300 hover:text-blue-700"
              >
                Register
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Username or Email"
              value={identifier}
              onChange={e => setIdentifier(e.target.value)}
              className="w-full border-b py-2 focus:outline-none"
            />

            <div className="relative ">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full border-b py-2 focus:outline-none"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-2 text-gray-500 cursor-pointer hover:text-blue-500 transition duration-300"
              >
                {showPassword ? (
                  <FaRegEyeSlash className="w-4 h-4" />
                ) : (
                  <FaRegEye className="w-4 h-4" />
                )}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-blue-500" />
                Remember me
              </label>
              <Link
                to="/forgot-password"
                className="text-blue-500 font-semibold hover:underline transition duration-300 hover:text-blue-700"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`w-full py-2 rounded transition duration-300 ${
                isButtonDisabled
                  ? 'bg-gray-400 cursor-not-allowed text-white'
                  : 'bg-black text-white hover:bg-blue-500'
              }`}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
