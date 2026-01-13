# 🚀 Quick Reference Guide

## Application Overview

**Observability Agent Learning Hub** - An interactive tutorial application teaching you about Salesforce Agentforce's Observability Agent.

## 🌐 Access

**URL:** http://localhost:5173/

The dev server is already running in the background!

## 📋 Navigation Sections

| Section | Icon | What You'll Learn |
|---------|------|-------------------|
| **Overview** | 📋 | Problem statement, use cases, key capabilities |
| **Architecture** | 🏗️ | Technical design, data sources, agent flow |
| **Phases & Roadmap** | 📊 | 5-phase development plan with milestones |
| **Query Examples** | 💬 | Interactive examples with reasoning |
| **Technical Details** | ⚙️ | Deep dive: data models, tags, metrics |
| **Interactive Demo** | 🎮 | Try the agent with simulated responses |

## 🎯 Key Concepts

### What is the Observability Agent?
A conversational agent for analyzing and improving AI agents' performance using natural language queries.

### The 5 Gaps It Solves
1. 📊 **Data Overload** - Too much data, hard to find insights
2. ⏱️ **Time-to-Insight** - Analysis takes hours/days
3. 🔍 **Interpretation** - Shows "what" but not "why"
4. 🎓 **Skills** - Requires specialized expertise
5. ✅ **Actionability** - Hard to translate insights to action

### Primary Use Cases
- **Ad-Hoc Analysis** - Ask questions about agent performance
- **Optimization** - Get prioritized improvement recommendations
- **Proactive Alerts** - Receive notifications when metrics spike

## 📊 Development Phases

| Phase | Status | Focus |
|-------|--------|-------|
| Phase 1 | ✅ Current | Foundational Q&A (metric lookup, definitions) |
| Phase 2 | 🔄 Pilot | Diagnostic Analysis with Evidence (STDM integration) |
| Phase 3 | 📅 Planned | Business Insights (CRM segmentation) |
| Phase 4 | 📅 Future | Optimization & Recommendations |
| Phase 5 | 📅 Vision | Automated Lifecycle Integration |

## 💬 Example Queries by Complexity

### 🟢 Simple (Phase 1)
```
"What was the escalation rate last week?"
"How do you define 'Resolution Rate'?"
"Give me a summary of the service agent"
```

### 🟡 Medium (Phase 2)
```
"What topics have the highest escalation rates?"
"Is customer sentiment improving month over month?"
"Show me conversations where resolution was 'yes' but customer was unhappy"
```

### 🔴 Complex (Phase 3-4)
```
"Why are customers frustrated during password reset?"
"Compare VIP vs. Standard customer performance"
"What's the single biggest opportunity to improve my agent?"
```

## 🏗️ Architecture Quick Facts

### Built With
- **Agent Graph** - Deterministic orchestration
- **File-Based Agent** - OOTB deployment (not template)
- **Concierge Agent Integration** - Reuses analytics capabilities

### Data Sources
- **STDM** - Session Tracing Data Model (conversation logs)
- **SDM** - Semantic Data Model (pre-calculated metrics)
- **Tags** - Structured metadata (runtime, LLM, custom)
- **Agent Metadata** - Configuration and definitions

### Key Components
- **TopicSelector Node** - Routes based on user intent
- **SemanticDataAnalysis Node** - Handles analytics queries
- **AgentsMetadataAnalysis Node** - Answers configuration questions

## 🔑 Key Metrics

| Metric | Formula | Purpose |
|--------|---------|---------|
| **Deflection Rate** | (Deflected / Total) × 100 | Sessions resolved without escalation |
| **Escalation Rate** | (Escalated / Total) × 100 | Sessions requiring human handoff |
| **Resolution Rate** | (Resolved / Engaged) × 100 | Successfully resolved engaged sessions |
| **Agent Health** | Composite score | Overall agent performance |

## 🎮 Try the Demo

### Sample Queries to Try
1. "What was the escalation rate last week?"
2. "Give me a summary of the service agent"
3. "Why are customers frustrated during password reset?"
4. "Compare VIP vs standard customers"
5. "What topics have highest escalation rates?"

### Features
- 💬 Chat-style interface
- 🧠 Shows agent reasoning process
- 🔍 Debug information available
- 📊 Simulated data-backed responses

## 🛠️ Commands

```bash
# Server already running at http://localhost:5173/

# If you need to restart:
cd /Users/mpichadze/observability-agent-tutorial
npm run dev

# Build for production:
npm run build

# Preview production build:
npm run preview
```

## 📚 Learning Path

### Beginner (30 mins)
1. Read **Overview** section
2. Understand the 5 gaps and use cases
3. Try the **Interactive Demo**

### Intermediate (1 hour)
4. Study **Architecture** section
5. Explore **Query Examples**
6. Understand Phase 1 capabilities

### Advanced (2 hours)
7. Deep dive into **Technical Details**
8. Study **Phases & Roadmap**
9. Review data models and integration points

## 🎯 Quick Tips

### For Product Managers
- Focus on: Overview, Phases & Roadmap, Query Examples
- Understand: Use cases, JTBD framework, customer value

### For Engineers
- Focus on: Architecture, Technical Details
- Understand: Agent Graph, data models, integration points

### For Data Scientists
- Focus on: Query Examples, Technical Details
- Understand: Evaluation framework, metrics, tag system

## 📞 Resources

- **Slack:** #observability-agent-workgroup
- **PRD:** Observability Agent - PRD
- **HLD:** [WIP] HLD - Agentforce Observability Agent
- **Demo:** http://localhost:5173/

## 💡 Pro Tips

1. 🔍 **Click on query examples** to see the agent's reasoning process
2. 🎮 **Try the demo** to get a feel for the conversational experience
3. 📊 **Study the phases** to understand the long-term vision
4. 🏗️ **Review architecture** before implementing
5. 💬 **Use sample queries** as templates for your own questions

---

**Ready to dive in?** Open http://localhost:5173/ in your browser!
