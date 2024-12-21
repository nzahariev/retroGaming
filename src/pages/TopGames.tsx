import React from 'react';
import GameCard from '../components/GameCard';
import { topGames } from '../data/topGames';

const TopGames = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#ff6b6b] mb-4">Top 10 Retro Games</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          These legendary titles shaped gaming history and continue to inspire developers today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {topGames.map((game, index) => (
          <GameCard key={game.title} game={game} rank={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default TopGames;