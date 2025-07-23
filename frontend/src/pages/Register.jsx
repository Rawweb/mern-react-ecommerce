import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import registerImage from '../assets/signup-image.png';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { BsCheck } from 'react-icons/bs';
import { FaRegCircleXmark } from 'react-icons/fa6';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordChecklist, setPasswordChecklist] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('User Registered', { name, username, email, password });

    // Clear form inputs
    setName('');
    setUsername('');
    setEmail('');
    setPassword('');
  };

  // Function to check password strength
  const isPasswordStrong = value => {
    const length = value.length >= 8;
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>+]/.test(value);

    return (
      length && hasUppercase && hasLowercase && hasNumber && hasSpecialChar
    );
  };

  // Update password checklist based on input
  const updatePasswordChecklist = value => {
    setPasswordChecklist({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /\d/.test(value),
      specialChar: /[!@#$%^&*(),.?":{}|<>+]/.test(value),
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 bg-gray-100 flex-col items-center justify-center gap-20 flex md:relative">
        <div className="text-xl font-bold mt-6 md:mt-0 md:absolute top-0 left-0 p-6">
          <Link to="/">3legant.</Link>
        </div>
        <img
          src={registerImage}
          alt="Chair"
          className="w-[100%] object-cover"
        />
      </div>

      {/* Right Section - Form */}
      <div className="flex w-full md:w-1/2">
        <div className="flex flex-col justify-center p-10 w-full">
          <div className="flex flex-col gap-2 mb-10 ">
            <h1 className="text-3xl lg:text-4xl font-medium">Register</h1>
            <p className="text-gray-500">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-blue-500 font-semibold hover:underline transition duration-300 hover:text-blue-700"
              >
                Login
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Your name"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full border-b py-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full border-b py-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border-b py-2 focus:outline-none"
            />
            <div className="relative ">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                required
                value={password}
                onChange={e => {
                  const val = e.target.value;
                  setPassword(val);
                  setPasswordError(
                    isPasswordStrong(val)
                      ? ''
                      : 'Password must meet all required conditions.'
                  );
                  updatePasswordChecklist(val);
                }}
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

            {/* Error Message */}
            {passwordError && (
              <div className="text-sm text-gray-600 mt-2 space-y-1">
                <p
                  className={`${
                    passwordChecklist.length
                      ? 'text-green-600'
                      : 'text-gray-400'
                  }`}
                >
                  {passwordChecklist.length ? (
                    <BsCheck className="inline mr-1" />
                  ) : (
                    <FaRegCircleXmark className="inline mr-1" />
                  )}
                  At least 8 characters
                </p>
                <p
                  className={`${
                    passwordChecklist.uppercase
                      ? 'text-green-600'
                      : 'text-gray-400'
                  }`}
                >
                  {passwordChecklist.uppercase ? (
                    <BsCheck className="inline mr-1" />
                  ) : (
                    <FaRegCircleXmark className="inline mr-1" />
                  )}
                  Includes uppercase letter
                </p>
                <p
                  className={`${
                    passwordChecklist.lowercase
                      ? 'text-green-600'
                      : 'text-gray-400'
                  }`}
                >
                  {passwordChecklist.lowercase ? (
                    <BsCheck className="inline mr-1" />
                  ) : (
                    <FaRegCircleXmark className="inline mr-1" />
                  )}
                  Includes lowercase letter
                </p>
                <p
                  className={`${
                    passwordChecklist.number
                      ? 'text-green-600'
                      : 'text-gray-400'
                  }`}
                >
                  {passwordChecklist.number ? (
                    <BsCheck className="inline mr-1" />
                  ) : (
                    <FaRegCircleXmark className="inline mr-1" />
                  )}
                  Includes number
                </p>
                <p
                  className={`${
                    passwordChecklist.specialChar
                      ? 'text-green-600'
                      : 'text-gray-400'
                  }`}
                >
                  {passwordChecklist.specialChar ? (
                    <BsCheck className="inline mr-1" />
                  ) : (
                    <FaRegCircleXmark className="inline mr-1" />
                  )}
                  Includes special character
                </p>
              </div>
            )}

            <div className="flex items-center gap-2 text-xs lg:text-base ">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 accent-blue-500"
                required
              />
              <label htmlFor="terms">
                I agree with {''}
                <Link className="font-semibold hover:text-blue-500 transition duration-300">
                  Privacy Policy
                </Link>
                <span> and </span>
                <Link className="font-semibold hover:text-blue-500 transition duration-300">
                  Terms of Use
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={!!passwordError}
              className={`w-full py-2 rounded transition duration-300 ${
                passwordError
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-black text-white hover:bg-blue-500'
              }`}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
