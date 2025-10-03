import React, { useState } from 'react';

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    testDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Submitted!\n\n${JSON.stringify(formData, null, 2)}`);
    setFormData({ name: '', email: '', country: '', testDate: '' });
  };

  return (
    <div className="min-h-screen relative bg-gray-50 font-['Inter'] flex items-center justify-center py-16">
      
      {/* Background wave */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-red-600 to-red-400 clip-path-wave z-0"></div>
      <div className="absolute -left-24 top-24 w-72 h-72 bg-white opacity-20 rounded-full z-0"></div>
      <div className="absolute right-0 top-32 w-56 h-56 bg-white opacity-15 rounded-full z-0"></div>

      {/* Form container */}
      <div className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Book Your IELTS Test
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Fill in your details and choose your preferred test date.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name" // Placeholder removed as per instruction
              required
              className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <option value="">Select your country</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="USA">USA</option>
              <option value="New Zealand">New Zealand</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Preferred Test Date</label>
            <input
              type="date"
              name="testDate"
              value={formData.testDate}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all duration-300"
          >
            Book Now
          </button>
        </form>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .clip-path-wave {
          clip-path: ellipse(150% 100% at 50% 0%);
        }
      `}</style>
    </div>
  );
};

export default BookNow;
