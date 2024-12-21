import React, { useState } from 'react';
import { Monitor, Download, Play, Info, Cpu } from 'lucide-react';
import type { Emulator } from '../data/emulators';
import { emulatorGuides } from '../data/emulatorGuides';
import EmulatorGuide from './EmulatorGuide';

interface EmulatorCardProps {
  emulator: Emulator;
}

const EmulatorCard: React.FC<EmulatorCardProps> = ({ emulator }) => {
  const [showGuide, setShowGuide] = useState(false);
  const guide = emulatorGuides[emulator.guideId];

  return (
    <>
      <div className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Monitor className="w-8 h-8 text-[#ff6b6b] mr-3" />
            <h2 className="text-2xl font-bold">{emulator.name}</h2>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm text-gray-400 mb-1">Supported Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {emulator.platforms.map((platform) => (
                <span
                  key={platform}
                  className="bg-[#2a2a2a] px-3 py-1 rounded-full text-sm"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-300 mb-6">{emulator.description}</p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-[#ff6b6b] flex items-center mb-2">
                <Cpu className="w-5 h-5 mr-2" />
                System Requirements
              </h3>
              <div className="bg-[#2a2a2a] p-3 rounded text-sm">
                <p className="text-gray-300"><span className="text-[#ff6b6b]">OS:</span> {emulator.systemRequirements.os.join(", ")}</p>
                <p className="text-gray-300"><span className="text-[#ff6b6b]">CPU:</span> {emulator.systemRequirements.processor}</p>
                <p className="text-gray-300"><span className="text-[#ff6b6b]">RAM:</span> {emulator.systemRequirements.memory}</p>
                <p className="text-gray-300"><span className="text-[#ff6b6b]">Graphics:</span> {emulator.systemRequirements.graphics}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#ff6b6b] flex items-center mb-2">
                <Play className="w-5 h-5 mr-2" />
                Recommended Games
              </h3>
              <ul className="list-disc list-inside text-gray-300">
                {emulator.recommendedGames.map((game) => (
                  <li key={game}>{game}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2a2a2a] p-4 flex justify-between">
          <a
            href={emulator.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#ff6b6b] hover:text-white transition-colors"
          >
            <Download className="w-5 h-5 mr-2" />
            Download
          </a>
          <button
            onClick={() => setShowGuide(true)}
            className="flex items-center text-[#ff6b6b] hover:text-white transition-colors"
          >
            <Info className="w-5 h-5 mr-2" />
            Guide
          </button>
        </div>
      </div>

      {showGuide && guide && (
        <EmulatorGuide guide={guide} onClose={() => setShowGuide(false)} />
      )}
    </>
  );
};

export default EmulatorCard;