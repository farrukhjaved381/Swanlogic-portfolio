import React, { useState } from 'react'
import { Navbar } from '../components/layout/Navbar';
import { Footer as FooterSimple } from '../components/layout/footer';


function contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex items-center justify-center min-h-[80vh] px-4 py-8">
        <div className="bg-gray-100 rounded-3xl p-8 w-full max-w-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Get In Touch</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-600 text-sm mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white rounded-lg border-none outline-none focus:ring-2 focus:ring-lime-500 transition-all"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-600 text-sm mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white rounded-lg border-none outline-none focus:ring-2 focus:ring-lime-500 transition-all"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-600 text-sm mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 bg-white rounded-lg border-none outline-none focus:ring-2 focus:ring-lime-500 resize-none transition-all"
                placeholder="Enter your message"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-lime-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-lime-600 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <FooterSimple />
    </div>
  )
}

export default contact