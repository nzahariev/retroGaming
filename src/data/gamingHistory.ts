export interface GamingEra {
  era: string;
  title: string;
  description: string;
  image: string;
  details: {
    keyEvents: string[];
    iconicGames: string[];
    innovations: string[];
    impact: string;
  };
}

export const gamingEras: GamingEra[] = [
  {
    era: "1970s",
    title: "The Dawn",
    description: "The birth of arcade gaming and home consoles like the Atari 2600.",
    image: "/homepage/retro-arcade.jpg",
    details: {
      keyEvents: [
        "Release of the first arcade game Computer Space (1971)",
        "Atari founded by Nolan Bushnell (1972)",
        "Pong becomes first commercially successful game (1972)",
        "Release of the Atari 2600 (1977)",
        "Space Invaders creates gaming boom (1978)"
      ],
      iconicGames: [
        "Pong",
        "Space Invaders",
        "Asteroids",
        "Adventure",
        "Combat"
      ],
      innovations: [
        "First home gaming consoles",
        "Interchangeable game cartridges",
        "Digital joystick controls",
        "Multiplayer gaming",
        "High score tracking"
      ],
      impact: "The 1970s laid the foundation for the entire gaming industry, establishing video games as a new form of entertainment and creating the arcade culture that would define gaming for years to come."
    }
  },
  {
    era: "1980s",
    title: "The Golden Age",
    description: "Nintendo and SEGA revolutionize gaming with iconic franchises.",
    image: "/homepage/nintendo.jpg",
    details: {
      keyEvents: [
        "Pac-Man fever sweeps the world (1980)",
        "Nintendo releases the NES (1985)",
        "The Legend of Zelda debuts (1986)",
        "SEGA challenges Nintendo with the Genesis (1988)",
        "Game Boy launches (1989)"
      ],
      iconicGames: [
        "Super Mario Bros.",
        "The Legend of Zelda",
        "Pac-Man",
        "Donkey Kong",
        "Mega Man"
      ],
      innovations: [
        "D-pad controller design",
        "Save game functionality",
        "Scrolling platformers",
        "Portable gaming",
        "16-bit graphics"
      ],
      impact: "The 1980s established video games as a mainstream entertainment medium and created many of the franchises and gameplay conventions that still influence gaming today."
    }
  },
  {
    era: "1990s",
    title: "3D Revolution",
    description: "The rise of 3D graphics and revolutionary gameplay innovations.",
    image: "/homepage/playstation.jpg",
    details: {
      keyEvents: [
        "Release of the Super Nintendo (1990)",
        "Sonic the Hedgehog debuts (1991)",
        "Doom revolutionizes FPS genre (1993)",
        "Sony PlayStation launches (1994)",
        "Nintendo 64 brings analog control (1996)"
      ],
      iconicGames: [
        "Super Mario 64",
        "Final Fantasy VII",
        "Doom",
        "Sonic the Hedgehog",
        "The Legend of Zelda: Ocarina of Time"
      ],
      innovations: [
        "3D polygon graphics",
        "CD-ROM gaming",
        "Analog stick controls",
        "Full motion video",
        "Rumble feedback"
      ],
      impact: "The 1990s transformed video games from 2D to 3D, revolutionizing how games were played and experienced, while establishing video games as a sophisticated storytelling medium."
    }
  }
];