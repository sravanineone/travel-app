import React, { useState, useEffect } from 'react';
import { LoginForm, SignupForm, ForgotPasswordForm } from './components/AuthForms';
import BookingTabs from './components/BookingTabs';
import AIChat from './components/AIChat';
import ThemeToggle from './components/ThemeToggle';
import Decorations from './components/Decorations';
import { User, Plane } from 'lucide-react';

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [currentForm, setCurrentForm] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const AuthModal = () => (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="relative modal-enter">
        <button
          onClick={() => setShowAuth(false)}
          className="absolute -top-16 right-0 neo-button p-2 text-gray-600 dark:text-gray-300"
          aria-label="Close"
        >
          Close
        </button>
        {currentForm === 'login' && <LoginForm onSwitch={setCurrentForm} />}
        {currentForm === 'signup' && <SignupForm onSwitch={setCurrentForm} />}
        {currentForm === 'forgot' && <ForgotPasswordForm onSwitch={setCurrentForm} />}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Decorations />
      
      <header className="neo-card m-6 mb-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-3">
            <Plane className="transform -rotate-45" />
            TravelEase
          </h1>
          <div className="flex items-center gap-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            {isAuthenticated ? (
              <button
                onClick={() => setIsAuthenticated(false)}
                className="neo-button px-6 py-2 text-gray-600 dark:text-gray-300 flex items-center gap-2"
              >
                <User size={20} />
                <span>Logout</span>
              </button>
            ) : (
              <button
                onClick={() => setShowAuth(true)}
                className="neo-button px-6 py-2 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:scale-[0.98] active:scale-[0.97] transition-transform"
              >
                <User size={20} />
                <span>Login / Sign Up</span>
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            Where would you like to go?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Search and compare flights, trains, and buses to find your perfect journey
          </p>
        </div>

        <BookingTabs />
      </main>

      <AIChat />
      {showAuth && <AuthModal />}
    </div>
  );
}

export default App;