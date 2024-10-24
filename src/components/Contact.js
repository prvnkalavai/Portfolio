import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    requestResume: false
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });
    console.log('NODE_ENV:', process.env.NODE_ENV);

    const apiUrl = process.env.NODE_ENV === 'production'
      ? '/api/contact'
      : 'http://localhost:7071/api/contact';

    console.log('API URL:', apiUrl);

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Form submitted successfully:', response.data);
      setStatus({
        submitting: false,
        success: true,
        error: null
      });
      setFormData({
        name: '',
        company: '',
        email: '',
        message: '',
        requestResume: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        submitting: false,
        success: false,
        error: error.response?.data || 'An error occurred while submitting the form. Please try again later.'
      });
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-white-100">
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        {status.error && <p className="text-red-500 mb-4">{status.error}</p>}
        {status.success && <p className="text-green-500 mb-4">Thank you for your message. I will get back to you shortly.</p>}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Additional Details</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="requestResume"
                checked={formData.requestResume}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm">Request Resume</span>
            </label>
          </div>
          <div className="flex items-center justify-between">
          <button
              type="submit"
              disabled={status.submitting}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${status.submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;