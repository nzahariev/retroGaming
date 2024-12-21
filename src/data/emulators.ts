export interface Emulator {
  name: string;
  platforms: string[];
  description: string;
  recommendedGames: string[];
  downloadUrl: string;
  guideId: string;
  systemRequirements: {
    os: string[];
    processor: string;
    memory: string;
    graphics: string;
  };
}

export const emulators: Emulator[] = [
  {
    name: "RetroArch",
    platforms: ["Multi-platform"],
    description: "All-in-one emulation frontend supporting various systems through its cores system.",
    recommendedGames: ["Super Mario World", "Sonic the Hedgehog", "Final Fantasy VI"],
    downloadUrl: "https://www.retroarch.com/?page=platforms",
    guideId: "retroarch",
    systemRequirements: {
      os: ["Windows 7+", "macOS 10.13+", "Linux"],
      processor: "1.5 GHz dual-core",
      memory: "2 GB RAM",
      graphics: "OpenGL 2.0 compatible"
    }
  },
  {
    name: "ZSNES",
    platforms: ["SNES"],
    description: "Popular SNES emulator with high compatibility and low system requirements.",
    recommendedGames: ["Chrono Trigger", "EarthBound", "Super Metroid"],
    downloadUrl: "https://www.zsnes.com/index.php?page=files",
    guideId: "zsnes",
    systemRequirements: {
      os: ["Windows XP+"],
      processor: "1 GHz",
      memory: "512 MB RAM",
      graphics: "DirectX compatible"
    }
  },
  {
    name: "VisualBoyAdvance",
    platforms: ["Game Boy", "GBA"],
    description: "Excellent Game Boy and Game Boy Advance emulator with advanced features.",
    recommendedGames: ["Pokémon Red/Blue", "The Legend of Zelda: Minish Cap"],
    downloadUrl: "https://visualboyadvance-m.org/downloads/",
    guideId: "vba",
    systemRequirements: {
      os: ["Windows 7+", "macOS 10.12+", "Linux"],
      processor: "1.5 GHz",
      memory: "1 GB RAM",
      graphics: "OpenGL compatible"
    }
  }
];