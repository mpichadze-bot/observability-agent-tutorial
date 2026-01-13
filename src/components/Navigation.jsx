import './Navigation.css';

const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'overview', label: '📋 Overview', icon: '📋' },
    { id: 'architecture', label: '🏗️ Architecture', icon: '🏗️' },
    { id: 'phases', label: '📊 Phases & Roadmap', icon: '📊' },
    { id: 'queries', label: '💬 Query Examples', icon: '💬' },
    { id: 'evaluation', label: '🧪 Evaluation Set', icon: '🧪' },
    { id: 'technical', label: '⚙️ Technical Details', icon: '⚙️' },
    { id: 'meeting', label: '📝 Meeting Notes', icon: '📝' },
    { id: 'demo', label: '🎮 Interactive Demo', icon: '🎮' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
