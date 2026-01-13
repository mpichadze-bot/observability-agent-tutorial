# 🤖 Observability Agent Learning Hub

An interactive learning application to help you understand the **Salesforce Agentforce Observability Agent** - a conversational agent for analyzing and improving AI agents' performance.

## 🚀 Quick Start

The application is already running! Access it at:

**http://localhost:5173/**

## 📚 What You'll Learn

This interactive tutorial covers:

### 1. 📋 Overview
- What the Observability Agent is and why it exists
- The 5 critical gaps it solves (Data Overload, Time-to-Insight, Interpretation, Skills, Actionability)
- Primary use-cases: Ad-Hoc Analysis, Optimization, Proactive Alerts
- Jobs to Be Done (JTBD) framework

### 2. 🏗️ Architecture
- Technical foundation (Agent Graph, File-Based deployment)
- Data sources (STDM, SDM, Tags, Agent metadata)
- Agent flow and node orchestration
- Integration with Concierge Agent
- Context variables and page context

### 3. 📊 Phases & Roadmap
- **Phase 1 (Current):** Foundational Q&A - Metric definitions and summaries
- **Phase 2 (Customer Pilot):** Diagnostic Analysis with Evidence
- **Phase 3 (Open Beta/GA):** Deeper Business Insights with Segmentation
- **Phase 4 (v2.0):** Full Optimization & Recommendations
- **Phase 5 (v3.0):** Automated Lifecycle Integration

### 4. 💬 Query Examples
Interactive examples organized by complexity:
- **Simple Queries:** Basic metric lookup
- **Aggregation Queries:** Grouping and ranking
- **Trend Analysis:** Time-based patterns
- **Diagnostic Analysis:** Root cause investigation
- **Validation & Comparison:** Version comparisons
- **Business Intelligence:** Customer segmentation

### 5. ⚙️ Technical Details
- In-depth data models (STDM, SDM)
- Tag system architecture
- Key metrics and calculations
- Concierge Agent integration
- Agent Graph implementation
- Technical challenges and solutions
- Evaluation framework (Benchforce)

### 6. 🎮 Interactive Demo
Try out a simulated Observability Agent with:
- Pre-programmed responses based on real documentation
- Debug information showing internal reasoning
- Sample queries you can click to try
- Chat-style interface

## 🎯 Key Features

### Interactive Learning
- 📱 Fully responsive design
- 🎨 Salesforce design system styling
- 🔍 Expandable query examples with reasoning
- 💬 Chat-based demo interface

### Comprehensive Coverage
- ✅ Based on actual meeting notes and documentation
- ✅ Includes technical implementation details
- ✅ Shows real example queries and responses
- ✅ Explains the roadmap and future vision

### Navigation
- Easy-to-use navigation bar
- Mobile-friendly (icons only on small screens)
- Smooth transitions between sections

## 🛠️ Technical Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with Salesforce design tokens
- **No external dependencies** - Pure React implementation

## 📁 Project Structure

```
observability-agent-tutorial/
├── src/
│   ├── components/
│   │   ├── Overview.jsx           # Introduction and problem statement
│   │   ├── Architecture.jsx       # Technical architecture
│   │   ├── Phases.jsx             # Roadmap and phases
│   │   ├── Queries.jsx            # Query examples and walkthroughs
│   │   ├── TechnicalDetails.jsx  # Deep technical implementation
│   │   ├── Demo.jsx               # Interactive chat demo
│   │   ├── Navigation.jsx         # Navigation component
│   │   └── Navigation.css         # Navigation styling
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # Global app styling
│   ├── index.css                  # Base styles
│   └── main.jsx                   # Entry point
├── index.html
├── package.json
└── README.md
```

## 🎨 Design System

Based on Salesforce Lightning Design System (SLDS):
- **Primary Color:** #0176d3 (Salesforce Blue)
- **Secondary Color:** #032d60 (Deep Blue)
- **Success Color:** #2e844a (Green)
- **Warning Color:** #fe9339 (Orange)
- **Font:** Salesforce Sans (with system fallbacks)

## 📖 How to Use

1. **Navigate** through sections using the top navigation bar
2. **Read** comprehensive explanations in each section
3. **Explore** interactive query examples by clicking on them
4. **Try** the demo by typing questions or clicking sample queries
5. **Learn** about technical implementation in the Technical Details section

## 🔄 Development Commands

```bash
# Start development server (already running)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies (if needed)
npm install
```

## 📝 Based on Source Material

This learning application is built from:
- Meeting notes from "Observability Agent - Deep Dive" (Jan 12, 2026)
- Observability Agent PRD
- HLD (High-Level Design) document
- Architecture diagrams
- Query examples and walkthroughs
- Technical implementation details

## 🎯 Learning Objectives

After completing this tutorial, you'll understand:

1. ✅ Why the Observability Agent exists and what problems it solves
2. ✅ How it's architecturally designed using Agent Graph
3. ✅ What data sources it uses (STDM, SDM, Tags)
4. ✅ The 5-phase roadmap from basic Q&A to full automation
5. ✅ Different types of queries it can handle
6. ✅ Technical challenges and how they're solved
7. ✅ Integration with other Agentforce components
8. ✅ Future vision for multi-agent orchestration

## 🚧 Important Notes

- **Demo Mode:** The interactive demo uses pre-programmed responses based on documentation
- **No Real Data:** This is a learning tool, not connected to actual Salesforce orgs
- **Phase 1 Focus:** Current implementation covers primarily Phase 1 capabilities
- **Educational Purpose:** Designed for onboarding and understanding, not production use

## 🤝 Contributing to Learning

As you work with the Observability Agent:
- Refer back to specific sections for implementation guidance
- Use the query examples as templates for your own queries
- Understand the technical challenges to avoid common pitfalls
- Follow the roadmap to plan future development

## 📞 Support & Resources

- **Slack Channel:** #observability-agent-workgroup
- **Documentation:** See embedded links in each section
- **PRD:** Observability Agent - PRD (Google Docs)
- **HLD:** [WIP] HLD - Agentforce Observability Agent

## 🎉 Ready to Learn!

Your application is running at **http://localhost:5173/**

Open it in your browser and start exploring the Observability Agent!

---

Built with ❤️ for the Agentforce team | Last Updated: January 2026
