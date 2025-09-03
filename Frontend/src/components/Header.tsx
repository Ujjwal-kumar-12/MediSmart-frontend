import React, { useState, useEffect } from 'react';
import { Heart, Phone } from 'lucide-react';
import { actionBannerMessages } from '../utils/constants';

interface HeaderProps {
  user: any;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isSOSPressed, setIsSOSPressed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % actionBannerMessages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSOSClick = () => {
    setIsSOSPressed(true);
    alert('🚨 Emergency services have been notified! Help is on the way. Stay calm.');
    setTimeout(() => setIsSOSPressed(false), 2000);
  };

  return (
    <>
      {/* Action Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 px-4 overflow-hidden">
        <div className="animate-pulse text-center font-medium">
          {actionBannerMessages[currentMessageIndex]}
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-blue-600 p-2 rounded-full mr-3">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">MediSmart</h1>
                <p className="text-xs text-gray-500">Smart Healthcare Solutions</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:block text-right">
                <p className="text-sm text-gray-600">Welcome back,</p>
                <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
              </div>

              <button
                onClick={handleSOSClick}
                className={`${
                  isSOSPressed 
                    ? 'bg-red-700 scale-110' 
                    : 'bg-red-600 hover:bg-red-700 hover:scale-105'
                } text-white px-4 py-2 rounded-full font-bold transition-all duration-200 shadow-lg flex items-center space-x-2`}
              >
                <Phone className="h-4 w-4" />
                <span>SOS</span>
              </button>

              <button
                onClick={onLogout}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;