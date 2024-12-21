export interface Game {
  title: string;
  year: number;
  platform: string;
  description: string;
  image: string;
  funFact: string;
}

export const topGames: Game[] = [
  {
    title: "Super Mario Bros. 3",
    year: 1988,
    platform: "NES",
    description: "Widely considered one of the greatest games ever made, featuring innovative power-ups and world map.",
    image: "./assets/top10/superMarioBros3.jpg",
    funFact: "The entire game was actually a stage play, hence the curtain rise at the start!"
  },
  {
    title: "The Legend of Zelda: A Link to the Past",
    year: 1991,
    platform: "SNES",
    description: "Revolutionary action-adventure that defined the Zelda formula for generations to come.",
    image: "./assets/top10/legendOfZelda.jpg",
    funFact: "The game's Light/Dark World mechanic inspired many future games."
  },
  {
    title: "Final Fantasy VII",
    year: 1997,
    platform: "PlayStation",
    description: "A groundbreaking JRPG that brought cinematic storytelling to video games.",
    image: "./assets/top10/finalFantasy.jpg",
    funFact: "The game's development cost was around $45 million, making it one of the most expensive games of its time."
  },
  {
    title: "Street Fighter II",
    year: 1991,
    platform: "Arcade/SNES",
    description: "Revolutionized fighting games and established many conventions of the genre.",
    image: "./assets/top10/streetFighter.jpg",
    funFact: "The combo system was actually discovered by accident during development."
  },
  {
    title: "Sonic the Hedgehog 2",
    year: 1992,
    platform: "SEGA Genesis",
    description: "Introduced Tails and the iconic Spin Dash move that became a series staple.",
    image: "./assets/top10/sonic.jpg",
    funFact: "The game was developed simultaneously in Japan and the United States."
  },
  {
    title: "Chrono Trigger",
    year: 1995,
    platform: "SNES",
    description: "A masterpiece RPG featuring multiple endings and innovative battle system.",
    image: "./assets/top10/chronoTrigger.jpg",
    funFact: "The development team included creators from both Final Fantasy and Dragon Quest series."
  },
  {
    title: "Mega Man 2",
    year: 1988,
    platform: "NES",
    description: "Perfected the Mega Man formula with exceptional level design and music.",
    image: "./assets/top10/megaMan2.jpg",
    funFact: "The game was made during the developers' free time as a passion project."
  },
  {
    title: "Castlevania: Symphony of the Night",
    year: 1997,
    platform: "PlayStation",
    description: "Redefined the series with RPG elements and non-linear exploration.",
    image: "./assets/top10/castlevania.jpg",
    funFact: "The game's map is actually upside down in the second half."
  },
  {
    title: "Pokemon Red/Blue",
    year: 1996,
    platform: "Game Boy",
    description: "Started a global phenomenon and revolutionized portable gaming.",
    image: "./assets/top10/pokemon.jpg",
    funFact: "Mew was added to the game last minute, secretly by one programmer."
  },
  {
    title: "Doom",
    year: 1993,
    platform: "PC",
    description: "Pioneered the FPS genre and 3D graphics in gaming.",
    image: "./assets/top10/doom.jpg",
    funFact: "The game's source code was released in 1997, leading to countless ports and mods."
  }
];