import { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Overview from './components/Overview';
import Architecture from './components/Architecture';
import Phases from './components/Phases';
import Queries from './components/Queries';
import EvaluationSet from './components/EvaluationSet';
import TechnicalDetails from './components/TechnicalDetails';
import MeetingNotes from './components/MeetingNotes';
import Demo from './components/Demo';
import Login from './components/Login';
import { isAuthenticated, getCurrentUser, logout } from './services/auth';

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check authentication status on mount
    const checkAuth = () => {
      if (isAuthenticated()) {
        const userData = getCurrentUser();
        setUser(userData || null);
        setAuthenticated(true);
      }
      setIsChecking(false);
    };

    checkAuth();
  }, []);

  const handleLogin = (authData) => {
    setUser(authData || null);
    setAuthenticated(true);
  };

  const handleLogout = () => {
    logout();
    setAuthenticated(false);
    setUser(null);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'architecture':
        return <Architecture />;
      case 'phases':
        return <Phases />;
      case 'queries':
        return <Queries />;
      case 'evaluation':
        return <EvaluationSet />;
      case 'technical':
        return <TechnicalDetails />;
      case 'meeting':
        return <MeetingNotes />;
      case 'demo':
        return <Demo />;
      default:
        return <Overview />;
    }
  };

  // Show loading state while checking authentication
  if (isChecking) {
    return (
      <div className="app">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div className="loading-spinner"></div>
          <p>Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Show login if not authenticated
  if (!authenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // Show main app if authenticated
  return (
    <div className="app">
      <header className="app-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div>
            <h1>🤖 Observability Agent Learning Hub</h1>
            <p className="subtitle">Interactive Guide to Agentforce Observability</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {user && (
              <span style={{ color: '#706e6b', fontSize: '0.9rem' }}>
                👤 {user.username}
              </span>
            )}
            <button
              onClick={handleLogout}
              style={{
                padding: '0.5rem 1rem',
                background: '#706e6b',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="app-main">
        {renderSection()}
      </main>
      
      <footer className="app-footer">
        <p>Salesforce Agentforce Platform | Last Updated: January 2026</p>
      </footer>
    </div>
  );
}

export default App;
