import React from 'react';
import EmulatorCard from '../components/EmulatorCard';
import DemoSection from '../components/DemoSection';
import { emulators } from '../data/emulators';

const Emulators = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#ff6b6b] mb-4">Retro Game Emulators</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Experience classic games on modern devices with these recommended emulators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {emulators.map((emulator) => (
          <EmulatorCard key={emulator.name} emulator={emulator} />
        ))}
      </div>

      <DemoSection />
    </div>
  );
};

export default Emulators;