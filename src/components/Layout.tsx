import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Joystick, Home, Trophy, Monitor, Image, MessageSquare, Github, Twitter, Youtube, Menu } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/top-games', icon: Trophy, label: 'Top 10' },
    { path: '/emulators', icon: Monitor, label: 'Emulators' },
    { path: '/gallery', icon: Image, label: 'Gallery' },
    { path: '/contact', icon: MessageSquare, label: 'Contact' },
  ];
  
  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white font-pixel">
      <nav className="bg-[#1a1a1a] border-b-2 border-[#ff6b6b] px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Joystick className="w-8 h-8 text-[#ff6b6b]" />
              <span className="text-xl font-bold">RetroVerse</span>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#ff6b6b]"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-6">
              {navLinks.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded transition-colors ${
                    isActive(path)
                      ? 'bg-[#ff6b6b] text-white'
                      : 'hover:bg-[#ff6b6b] hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile navigation */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
            <div className="flex flex-col space-y-2">
              {navLinks.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded transition-colors ${
                    isActive(path)
                      ? 'bg-[#ff6b6b] text-white'
                      : 'hover:bg-[#ff6b6b] hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>

      <footer className="bg-[#1a1a1a] border-t-2 border-[#ff6b6b] px-4 py-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm mb-4 md:mb-0">
            Disclaimer: The content of the webpage is AI generated!
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#ff6b6b] transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#ff6b6b] transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#ff6b6b] transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
