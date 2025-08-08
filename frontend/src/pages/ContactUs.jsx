import React, { useState } from 'react';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { toast } from 'sonner';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill out all fields');
      return;
    }

    setIsSubmitting(true);

    await toast.promise(
      // Simulate async request — replace with your real API call
      new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate success/failure toggle here
          const isSuccess = true;
          isSuccess ? resolve() : reject();
        }, 2000);
      }),
      {
        loading: 'Sending message...',
        success: () => {
          setFormData({ name: '', email: '', message: '' });
          return 'Message sent successfully!';
        },
        error: 'Failed to send message. Try again later.',
      }
    );

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-4">
      <div className="container p-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Contact Us
          </h1>
        </div>

        {/* Info Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-6 rounded-md shadow">
            <FiMapPin className="text-2xl text-blue-500 mb-2" />
            <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
              ADDRESS
            </h4>
            <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
              234 Hai Trieu, Ho Chi Minh City, Viet Nam
            </p>
          </div>

          <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-6 rounded-md shadow">
            <FiPhone className="text-2xl text-blue-500 mb-2" />
            <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
              CONTACT US
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              +84 234 567 890
            </p>
          </div>

          <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-6 rounded-md shadow">
            <FiMail className="text-2xl text-blue-500 mb-2" />
            <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
              EMAIL
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              hello@3agent.com
            </p>
          </div>
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-style mt-1 w-full"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-style mt-1 w-full"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="input-style mt-1 w-full"
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-md font-semibold text-white bg-black hover:bg-blue-600 transition dark:border"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Embedded Map */}
          <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 h-full">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.406304293358!2d106.70346731451818!3d10.776882262164866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3f2215e4e3%3A0x9d86d3193f1dfb0b!2zMjM0IEhhaSBUcmlldSwgQmVuIFRodSBNw6FuLCBCw6xjaCBUw6JuIFRo4bqhY2gsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1sen!2s!4v1691500000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
