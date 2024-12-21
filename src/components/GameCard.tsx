import React from 'react';
import { Star, Trophy } from 'lucide-react';
import type { Game } from '../data/topGames';

interface GameCardProps {
  game: Game;
  rank: number;
}

const GameCard: React.FC<GameCardProps> = ({ game, rank }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
      <div className="relative">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4 bg-[#ff6b6b] text-white px-3 py-1 rounded-full flex items-center">
          <Trophy className="w-4 h-4 mr-1" />
          #{rank}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{game.title}</h2>
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <span className="text-[#ff6b6b] font-semibold">{game.year}</span>
          <span className="mx-2">•</span>
          <span className="text-gray-400">{game.platform}</span>
        </div>
        <p className="text-gray-300 mb-4">{game.description}</p>
        <div className="bg-[#2a2a2a] p-4 rounded">
          <h3 className="text-lg font-bold text-[#ff6b6b] mb-2">Fun Fact</h3>
          <p className="text-gray-300">{game.funFact}</p>
        </div>
      </div>
    </div>
  );
}

export default GameCard;