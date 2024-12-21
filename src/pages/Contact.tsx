import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    favoriteGame: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#ff6b6b] mb-4">Share Your Memories</h1>
        <h2 className="text-5xl font-bold text-[#da9191] mb-4">[ Under Development ]</h2>
        <p className="text-xl text-gray-300">
          Tell us about your favorite retro gaming moments or ask us anything!
        </p>
      </div>

      <div className="bg-[#1a1a1a] rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:border-[#ff6b6b] focus:ring-1 focus:ring-[#ff6b6b] outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:border-[#ff6b6b] focus:ring-1 focus:ring-[#ff6b6b] outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="favoriteGame" className="block text-sm font-medium mb-2">
              Favorite Retro Game
            </label>
            <input
              type="text"
              id="favoriteGame"
              name="favoriteGame"
              value={formData.favoriteGame}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:border-[#ff6b6b] focus:ring-1 focus:ring-[#ff6b6b] outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-2 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:border-[#ff6b6b] focus:ring-1 focus:ring-[#ff6b6b] outline-none transition-colors resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff6b6b] text-white py-3 rounded-lg hover:bg-[#ff8585] transition-colors flex items-center justify-center space-x-2"
          >
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex items-center space-x-3 text-gray-300">
            <MessageSquare className="w-5 h-5 text-[#ff6b6b]" />
            <p>We'll get back to you within 24 hours!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;