import { useState } from 'react';

const Architecture = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="section">
      <h2>🏗️ Architecture & Design</h2>

      <div className="info-box">
        <p><strong>The Observability Agent is built on the Agentforce platform using Agent Graph for deterministic orchestration.</strong></p>
        <p>It's implemented as a file-based (cloud-managed) Out-of-the-Box (OOTB) agent that leverages existing platform capabilities.</p>
      </div>

      <h3>🔧 Technical Foundation</h3>
      
      <div className="grid grid-2 mt-2">
        <div 
          className={`card clickable ${expandedCard === 'agentgraph' ? 'expanded' : ''}`}
          onClick={() => toggleCard('agentgraph')}
        >
          <div className="card-title">
            Agent Graph
            <span className="expand-indicator">{expandedCard === 'agentgraph' ? '▼' : '▶'}</span>
          </div>
          <div className="card-content">
            <span className="badge badge-primary">Core Technology</span>
            <p className="mt-1">
              Uses Agent Graph (Agent DSL) for better determinism and interoperability.
            </p>
            {expandedCard === 'agentgraph' && (
              <>
                <h4 className="mt-1">What is Agent Graph?</h4>
                <p>
                  Agent Graph is Salesforce's declarative agent orchestration framework that defines agent behavior 
                  using nodes, edges, and routing logic in JSON/YAML format.
                </p>
                <h4 className="mt-1">Key Capabilities:</h4>
                <ul>
                  <li><strong>Topic-based routing:</strong> Routes queries to appropriate nodes based on intent</li>
                  <li><strong>Node orchestration:</strong> Chains multiple actions together</li>
                  <li><strong>Context variables:</strong> Pass page context to actions</li>
                  <li><strong>Multi-step reasoning:</strong> Complex workflows with branching logic</li>
                  <li><strong>Deterministic execution:</strong> Same input → same output path</li>
                  <li><strong>Easy debugging:</strong> Visual graph representation</li>
                </ul>
                <h4 className="mt-1">Why Agent Graph?</h4>
                <ul>
                  <li>✅ <strong>Determinism:</strong> Analytics requires consistent answers</li>
                  <li>✅ <strong>Interoperability:</strong> Easy integration with Builder, Testing agents</li>
                  <li>✅ <strong>Maintainability:</strong> Declarative definition is easier to update</li>
                  <li>✅ <strong>Platform benefits:</strong> Automatic tracing, monitoring</li>
                </ul>
                <div className="code-block mt-1">
{`// Example Agent Graph Node
{
  "id": "SemanticDataAnalysis",
  "type": "action",
  "action": "AnalyzeSemanticData",
  "contextVariables": [
    "targetEntityType",
    "targetEntityId"
  ]
}`}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="card">
          <div className="card-title">File-Based Agent (OOTB)</div>
          <div className="card-content">
            <span className="badge badge-success">Deployment</span>
            <p className="mt-1">
              Implemented as a cloud-managed agent available Out-of-the-Box, not as a template that requires 
              customer activation.
            </p>
            <ul className="mt-1">
              <li>Pre-configured and controlled</li>
              <li>Consistent experience</li>
              <li>Automatic updates</li>
              <li>No customer modification needed</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>📊 Data Sources</h3>
      
      <p>The agent consumes data from multiple sources to provide comprehensive insights:</p>

      <div className="grid grid-3 mt-2">
        <div className="card">
          <div className="card-title">STDM</div>
          <div className="card-content">
            <span className="badge badge-info">Session Tracing</span>
            <p className="mt-1">
              <strong>Session Tracing Data Model</strong> provides rich, detailed logs for every conversation/interaction turn.
            </p>
            <ul className="mt-1">
              <li>Conversation transcripts</li>
              <li>Turn-by-turn details</li>
              <li>Action executions</li>
              <li>Error traces</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">SDM</div>
          <div className="card-content">
            <span className="badge badge-info">Analytics</span>
            <p className="mt-1">
              <strong>Semantic Data Model</strong> defines objects, relationships, and calculated metrics.
            </p>
            <ul className="mt-1">
              <li>Pre-calculated metrics</li>
              <li>Business definitions</li>
              <li>Aggregated data</li>
              <li>Metric formulas</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Tags</div>
          <div className="card-content">
            <span className="badge badge-info">Metadata</span>
            <p className="mt-1">
              Structured metadata classifying sessions, interactions, and moments.
            </p>
            <ul className="mt-1">
              <li>Runtime tags</li>
              <li>System LLM tags</li>
              <li>Custom LLM tags</li>
              <li>CRM tags</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Agent Definition</div>
          <div className="card-content">
            <span className="badge badge-info">Configuration</span>
            <p className="mt-1">
              Agent configuration including prompts, topics, and action definitions.
            </p>
            <ul className="mt-1">
              <li>Topics</li>
              <li>Actions</li>
              <li>Instructions</li>
              <li>Version history</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Tableau Metadata</div>
          <div className="card-content">
            <span className="badge badge-info">Visualization</span>
            <p className="mt-1">
              Dashboard and visualization metadata for context awareness.
            </p>
            <ul className="mt-1">
              <li>Dashboard state</li>
              <li>Active filters</li>
              <li>Metric definitions</li>
              <li>Column metadata</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Optimization Engine</div>
          <div className="card-content">
            <span className="badge badge-warning">Future</span>
            <p className="mt-1">
              Pre-computed recommendations and insights (Phase 4+).
            </p>
            <ul className="mt-1">
              <li>Improvement opportunities</li>
              <li>Priority rankings</li>
              <li>Impact estimates</li>
              <li>Best practices</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>🔄 Agent Flow</h3>
      
      <div className="info-box mt-2">
        <h4>Session Flow</h4>
        <ol>
          <li><strong>Session Start:</strong> Welcome message displayed to user</li>
          <li><strong>User Utterance:</strong> User enters a natural language query</li>
          <li><strong>Topic Selector Node:</strong> Routes based on user intent
            <ul>
              <li>Semantic data analysis queries → SemanticDataAnalysis node</li>
              <li>Agent metadata queries → AgentsMetadataAnalysis node</li>
              <li>Metric definitions → SemanticMetricExplanation node</li>
            </ul>
          </li>
          <li><strong>Action Execution:</strong> Appropriate tool/action is invoked</li>
          <li><strong>Response Generation:</strong> Results formatted with evidence and visualizations</li>
        </ol>
      </div>

      <h3>🛠️ Key Nodes</h3>

      <div className="grid grid-2 mt-2">
        <div className="card">
          <div className="card-title">SemanticDataAnalysis Node</div>
          <div className="card-content">
            <span className="badge badge-primary">Phase 1</span>
            <p className="mt-1">
              Handles questions about agent performance metrics, dashboards, and visualizations.
            </p>
            <div className="code-block mt-1">
              Calls: AnalyzeSemanticData tool
              <br />Action: AnalyzeSemanticDataAction
              <br />Service: TUA's DQA service
            </div>
            <p className="mt-1"><strong>Capabilities:</strong></p>
            <ul>
              <li>Natural language to SQL conversion</li>
              <li>Metric calculations</li>
              <li>Visualization generation</li>
              <li>Context-aware filtering</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">AgentsMetadataAnalysis Node</div>
          <div className="card-content">
            <span className="badge badge-success">Phase 1</span>
            <p className="mt-1">
              Answers questions about agent configurations, versions, and metadata.
            </p>
            <div className="code-block mt-1">
              Calls: Fetch Agents Metadata tool
              <br />Flow: Get AI Agents Metadata
              <br />Source: BotDefinition & BotVersion BPO
            </div>
            <p className="mt-1"><strong>Example Queries:</strong></p>
            <ul>
              <li>"What agents are active in my org?"</li>
              <li>"Show me the version history of the Service Agent"</li>
              <li>"Which agents were created this month?"</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>🔗 Integration with Concierge Agent</h3>
      
      <div className="highlight-box mt-2">
        <h4>Leveraging Tableau Next Analytics Agent</h4>
        <p>
          For Phase 1, the Observability Agent leverages the <strong>Concierge Agent's</strong> capabilities 
          for ad-hoc analytical questions:
        </p>
        <ul>
          <li><strong>AnalyzeSemanticDataAction:</strong> Translates natural language to semantic layer queries (SQL)</li>
          <li><strong>Visualization Rendering:</strong> Custom LWC component displays charts and tables</li>
          <li><strong>Context Injection:</strong> Passes page context (filters, SDM, dashboard state)</li>
          <li><strong>Business Preferences:</strong> SDM-specific instructions to improve accuracy</li>
        </ul>
      </div>

      <div className="grid grid-2 mt-2">
        <div className="card">
          <div className="card-title">What We Reuse</div>
          <div className="card-content">
            <ul>
              <li>✅ Semantic layer query translation</li>
              <li>✅ Visualization generation</li>
              <li>✅ Context understanding</li>
              <li>✅ Metric definitions</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">What We Build</div>
          <div className="card-content">
            <ul>
              <li>🔧 Agent Graph orchestration</li>
              <li>🔧 Multi-node routing logic</li>
              <li>🔧 Agent-specific guardrails</li>
              <li>🔧 Root cause analysis (Phase 2+)</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>🎛️ Context Variables</h3>
      
      <p>The agent receives context from the page to provide relevant answers:</p>

      <div className="code-block mt-2">
        {`{
  "analytics_page_type": "dashboard",
  "tab_id": "service_agent_overview", 
  "target_entity_type": "dashboard",
  "target_entity_id": "Service_Analytics_SDM",
  "target_entity_state": {
    "filters": {
      "date_range": "last_30_days",
      "agent_type": "service_agent"
    }
  }
}`}
      </div>

      <div className="success-box mt-2">
        <h4>🚀 Future Enhancements</h4>
        <ul>
          <li><strong>Deep Research Node:</strong> Multi-step analysis combining SDM and STDM data</li>
          <li><strong>Optimization Node:</strong> Integration with optimization engine for recommendations</li>
          <li><strong>Custom Tag Creation:</strong> Conversational interface for defining new tags</li>
          <li><strong>Multi-Agent Orchestration:</strong> Delegation to Builder, Testing, and Health Monitoring agents</li>
        </ul>
      </div>
    </div>
  );
};

export default Architecture;
