import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { gamingEras } from '../data/gamingHistory';
import EraModal from '../components/EraModal';

const Home = () => {
  const [selectedEra, setSelectedEra] = useState(null);

  return (
    <div>
      <section className="relative min-h-[400px] md:h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/homepage/background.jpg)',
            filter: 'brightness(0.3)',
          }}
        />
        <div className="relative text-center space-y-6 p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#ff6b6b] mb-4">
            Welcome to RetroVerse
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Dive into the golden age of gaming. Relive the classics that shaped
            video game history and join our community of retro gaming enthusiasts.
          </p>
          <Link
            to="/top-games"
            className="inline-flex items-center px-6 py-3 bg-[#ff6b6b] text-white rounded-lg hover:bg-[#ff8585] transition-colors"
          >
            <Play className="w-5 h-5 mr-2" />
            Start Your Retro Journey
          </Link>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">The History of Gaming</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {gamingEras.map((era) => (
            <div
              key={era.era}
              className="bg-[#1a1a1a] p-4 md:p-6 rounded-lg hover:transform hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setSelectedEra(era)}
            >
              <img
                src={era.image}
                alt={era.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl md:text-2xl font-bold text-[#ff6b6b] mb-2">
                {era.era} - {era.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">{era.description}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedEra && (
        <EraModal era={selectedEra} onClose={() => setSelectedEra(null)} />
      )}
    </div>
  );
};

export default Home;