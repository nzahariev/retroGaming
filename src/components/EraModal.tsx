import React from 'react';
import { X, Calendar, Trophy, Lightbulb, History } from 'lucide-react';
import type { GamingEra } from '../data/gamingHistory';

interface EraModalProps {
  era: GamingEra;
  onClose: () => void;
}

const EraModal: React.FC<EraModalProps> = ({ era, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a1a] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#1a1a1a] p-6 border-b border-[#2a2a2a]">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-[#ff6b6b]">
              {era.era} - {era.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          <img
            src={era.image}
            alt={era.title}
            className="w-full h-64 object-cover rounded-lg"
          />

          <div className="space-y-6">
            <section>
              <h3 className="flex items-center text-xl font-bold mb-4 text-[#ff6b6b]">
                <Calendar className="w-5 h-5 mr-2" />
                Key Events
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {era.details.keyEvents.map((event, index) => (
                  <li key={index}>{event}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="flex items-center text-xl font-bold mb-4 text-[#ff6b6b]">
                <Trophy className="w-5 h-5 mr-2" />
                Iconic Games
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {era.details.iconicGames.map((game, index) => (
                  <li key={index}>{game}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="flex items-center text-xl font-bold mb-4 text-[#ff6b6b]">
                <Lightbulb className="w-5 h-5 mr-2" />
                Key Innovations
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {era.details.innovations.map((innovation, index) => (
                  <li key={index}>{innovation}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="flex items-center text-xl font-bold mb-4 text-[#ff6b6b]">
                <History className="w-5 h-5 mr-2" />
                Historical Impact
              </h3>
              <p className="text-gray-300">{era.details.impact}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EraModal;