export interface EmulatorGuide {
  id: string;
  title: string;
  steps: {
    title: string;
    content: string;
  }[];
  tips: string[];
  troubleshooting: {
    problem: string;
    solution: string;
  }[];
}

export const emulatorGuides: Record<string, EmulatorGuide> = {
  retroarch: {
    id: "retroarch",
    title: "RetroArch Setup Guide",
    steps: [
      {
        title: "Installation",
        content: "Download RetroArch from the official website. Run the installer and follow the prompts. Make sure to install for all users if you want the application to be available system-wide."
      },
      {
        title: "Core Installation",
        content: "Open RetroArch, go to 'Load Core' > 'Download Core'. Select the cores for the systems you want to emulate (e.g., SNES9x for Super Nintendo games)."
      },
      {
        title: "Controller Setup",
        content: "Go to Settings > Input > Port 1 Controls to configure your controller. You can use keyboard or connect a gamepad for a better experience."
      },
      {
        title: "Loading Games",
        content: "Select 'Load Content', navigate to your game file, and choose the appropriate core when prompted. RetroArch will remember your core selection for future use."
      }
    ],
    tips: [
      "Use the Quick Menu (F1 key) to access important settings during gameplay",
      "Enable 'Save State Auto Load' for automatic game progress restoration",
      "Configure shaders for authentic retro visual effects"
    ],
    troubleshooting: [
      {
        problem: "Games running too slow",
        solution: "Try a different core or adjust video settings. Disable runahead if enabled."
      },
      {
        problem: "No audio",
        solution: "Check audio driver settings in Settings > Audio. Try switching between different drivers."
      }
    ]
  },
  zsnes: {
    id: "zsnes",
    title: "ZSNES Setup Guide",
    steps: [
      {
        title: "Installation",
        content: "Download ZSNES from the official website. Extract the ZIP file to a permanent location on your computer."
      },
      {
        title: "Configuration",
        content: "Run zsnesw.exe. Use Config > Input to set up your keyboard or gamepad controls. Configure video settings under Config > Video."
      },
      {
        title: "Loading Games",
        content: "Click Game > Load or press L to browse for your ROM files. ZSNES supports .smc and .sfc file formats."
      }
    ],
    tips: [
      "Press F1-F4 for save states, Shift+F1-F4 to load them",
      "Use Alt+Enter to toggle fullscreen",
      "Enable 'Auto Frame Skip' for better performance on slower systems"
    ],
    troubleshooting: [
      {
        problem: "Black screen on startup",
        solution: "Try different video modes in Config > Video. DirectDraw usually works best."
      },
      {
        problem: "Controller not working",
        solution: "Make sure to configure the controller in Config > Input before starting a game."
      }
    ]
  },
  vba: {
    id: "vba",
    title: "VisualBoyAdvance Setup Guide",
    steps: [
      {
        title: "Installation",
        content: "Download VBA-M from the official website. Extract the archive to your preferred location."
      },
      {
        title: "Initial Setup",
        content: "Launch the emulator and configure basic settings under Options > Emulator. Set your preferred save directory under Options > Directories."
      },
      {
        title: "Controls",
        content: "Configure controls under Options > Input > Configure. Map the buttons according to your preference."
      },
      {
        title: "Starting Games",
        content: "Use File > Open to load your Game Boy or Game Boy Advance ROM files."
      }
    ],
    tips: [
      "Use Ctrl+S for quick save, Ctrl+L for quick load",
      "Enable 'Automatic Frame Skip' for smoother gameplay",
      "Use the speed up key (default: Space) to fast forward through slow sections"
    ],
    troubleshooting: [
      {
        problem: "Saves not working",
        solution: "Ensure you have write permissions in the save directory. Try running the emulator as administrator."
      },
      {
        problem: "Games running too fast/slow",
        solution: "Check if frame skip is enabled. Adjust the throttle setting under Options > Emulator."
      }
    ]
  }
};