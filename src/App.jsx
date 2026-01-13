import { useState } from 'react';
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

function App() {
  const [activeSection, setActiveSection] = useState('overview');

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

  return (
    <div className="app">
      <header className="app-header">
        <h1>🤖 Observability Agent Learning Hub</h1>
        <p className="subtitle">Interactive Guide to Agentforce Observability</p>
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
