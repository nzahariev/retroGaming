import React from 'react';

const DemoSection = () => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg p-8 mt-12">
      <h2 className="text-3xl font-bold text-[#ff6b6b] mb-6">Try it Now!</h2>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80"
          alt="Retro Gaming Setup"
          className="w-full h-[400px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
          <div className="text-center p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Experience Retro Gaming</h3>
            <p className="text-gray-200">
              Download your preferred emulator and start playing classic games today!
              Check out our guides for detailed setup instructions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;