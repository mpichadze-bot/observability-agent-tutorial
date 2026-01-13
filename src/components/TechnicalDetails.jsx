const TechnicalDetails = () => {
  return (
    <div className="section">
      <h2>⚙️ Technical Implementation Details</h2>

      <div className="info-box">
        <p>
          <strong>Deep dive into the technical architecture, data models, and implementation specifics 
          of the Observability Agent.</strong>
        </p>
      </div>

      <h3>🗄️ Data Models</h3>

      <div className="grid grid-2 mt-2">
        <div className="card">
          <div className="card-title">STDM - Session Tracing Data Model</div>
          <div className="card-content">
            <span className="badge badge-info">Source: Data Cloud</span>
            <p className="mt-1">
              Rich, detailed logs capturing every conversation/interaction turn with full context.
            </p>
            <h4 className="mt-1">Key Objects:</h4>
            <ul>
              <li><strong>Sessions:</strong> Top-level conversation container</li>
              <li><strong>Interactions:</strong> User-agent exchange pairs</li>
              <li><strong>Moments:</strong> Significant events within interactions</li>
              <li><strong>Actions:</strong> Tool/API calls made by the agent</li>
              <li><strong>Errors:</strong> Failures and exceptions</li>
            </ul>
            <h4 className="mt-1">Fields Include:</h4>
            <ul>
              <li>Timestamps, latency, duration</li>
              <li>Full transcripts (user + agent)</li>
              <li>Intent classification</li>
              <li>Sentiment scores</li>
              <li>Action parameters & results</li>
              <li>Error messages & stack traces</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">SDM - Semantic Data Model</div>
          <div className="card-content">
            <span className="badge badge-info">Source: Tableau</span>
            <p className="mt-1">
              Defines objects, relationships, and pre-calculated metrics for analytics.
            </p>
            <h4 className="mt-1">Hierarchy:</h4>
            <ul>
              <li><strong>Foundation SDM:</strong> Base tables and metrics for all agents</li>
              <li><strong>Service Agent SDM:</strong> Extends foundation for service agents</li>
              <li><strong>Employee Agent SDM:</strong> Extends foundation for employee agents</li>
              <li><strong>Custom SDMs:</strong> Customer-specific extensions</li>
            </ul>
            <h4 className="mt-1">Components:</h4>
            <ul>
              <li>Objects/Tables definitions</li>
              <li>Relationships & joins</li>
              <li>Calculated fields & metrics</li>
              <li>Business preferences (instructions)</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>🏷️ Tag System</h3>

      <p>
        Tags are structured metadata that classify sessions, interactions, and moments. They enable 
        fast filtering and aggregation without querying full transcripts.
      </p>

      <div className="grid grid-2 mt-2">
        <div className="card">
          <div className="card-title">Runtime Tags</div>
          <div className="card-content">
            <span className="badge badge-success">Calculated at Runtime</span>
            <p className="mt-1">Captured during agent execution:</p>
            <ul>
              <li><code className="code-inline">latency: high</code></li>
              <li><code className="code-inline">escalated_to_human: true</code></li>
              <li><code className="code-inline">action_success: false</code></li>
              <li><code className="code-inline">topic: password_reset</code></li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">System LLM Tags</div>
          <div className="card-content">
            <span className="badge badge-primary">OOTB LLM Analysis</span>
            <p className="mt-1">Calculated by platform LLMs (not customizable):</p>
            <ul>
              <li><code className="code-inline">toxicity: 0.12</code></li>
              <li><code className="code-inline">answer_relevance: high</code></li>
              <li><code className="code-inline">context_relevance: medium</code></li>
              <li><code className="code-inline">hallucination_risk: low</code></li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Prebuilt LLM Tags</div>
          <div className="card-content">
            <span className="badge badge-warning">Modifiable OOTB</span>
            <p className="mt-1">OOTB prompts that customers can modify:</p>
            <ul>
              <li><code className="code-inline">resolution: yes/no</code></li>
              <li><code className="code-inline">escalation: yes/no</code></li>
              <li><code className="code-inline">sentiment: positive/negative/neutral</code></li>
              <li><code className="code-inline">user_satisfaction: 1-5</code></li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Custom LLM Tags</div>
          <div className="card-content">
            <span className="badge badge-info">Customer-Defined</span>
            <p className="mt-1">Fully custom prompts defined by customers:</p>
            <ul>
              <li><code className="code-inline">customer_value: high/medium/low</code></li>
              <li><code className="code-inline">purchase_intent: yes/no</code></li>
              <li><code className="code-inline">product_category: electronics/clothing/...</code></li>
              <li><code className="code-inline">satisfaction_score: 1-10</code></li>
            </ul>
          </div>
        </div>
      </div>

      <h3>📐 Key Metrics</h3>

      <div className="grid grid-3 mt-2">
        <div className="card">
          <div className="card-title">Deflection Rate</div>
          <div className="card-content">
            <div className="code-block">
              (Successfully deflected sessions / 
               Total sessions) × 100
            </div>
            <p className="mt-1">
              Percentage of sessions where the agent successfully resolved the user's issue 
              without human escalation.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Escalation Rate</div>
          <div className="card-content">
            <div className="code-block">
              (Escalated sessions / 
               Total sessions) × 100
            </div>
            <p className="mt-1">
              Percentage of sessions that required handoff to a human agent.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Abandonment Rate</div>
          <div className="card-content">
            <div className="code-block">
              (Abandoned sessions / 
               Total sessions) × 100
            </div>
            <p className="mt-1">
              Percentage of sessions where the user left before resolution or escalation.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Resolution Rate</div>
          <div className="card-content">
            <div className="code-block">
              (Resolved sessions / 
               Engaged sessions) × 100
            </div>
            <p className="mt-1">
              Percentage of engaged sessions that were successfully resolved.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Agent Health Score</div>
          <div className="card-content">
            <div className="code-block">
              Composite metric:
              <br />• Deflection Rate (40%)
              <br />• User Satisfaction (30%)
              <br />• Latency (20%)
              <br />• Error Rate (10%)
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Stickiness Rate</div>
          <div className="card-content">
            <div className="code-block">
              (Returning users / 
               Total unique users) × 100
            </div>
            <p className="mt-1">
              Percentage of users who return to use the agent multiple times.
            </p>
          </div>
        </div>
      </div>

      <h3>🔌 Integration with Concierge Agent</h3>

      <div className="info-box mt-2">
        <h4>AnalyzeSemanticDataAction</h4>
        <p>
          The core action that powers the Observability Agent's analytical capabilities in Phase 1.
        </p>
      </div>

      <div className="grid grid-2 mt-2">
        <div className="card">
          <div className="card-title">Input Parameters</div>
          <div className="card-content">
            <div className="code-block">
{`{
  "conversationHistory": [...],
  "latestUserUtterance": "What was...",
  "targetEntityType": "dashboard",
  "targetEntityId": "Service_Analytics_SDM",
  "targetEntityState": {
    "filters": {
      "date_range": "last_30_days",
      "agent_type": "service_agent"
    }
  }
}`}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Output Format</div>
          <div className="card-content">
            <div className="code-block">
{`{
  "textSummary": "The escalation rate...",
  "sqlQuery": "SELECT COUNT(*) WHERE...",
  "visualization": {
    "type": "bar_chart",
    "data": [...],
    "config": {...}
  },
  "debugInfo": {
    "modelUsed": "gpt-4",
    "tokensUsed": 1250
  }
}`}
            </div>
          </div>
        </div>
      </div>

      <h3>🎨 Visualization Rendering</h3>

      <div className="highlight-box mt-2">
        <h4>Custom LWC Component</h4>
        <p>
          The Concierge agent uses a custom Lightning Web Component to render visualizations. 
          It's not a static image but an interactive, client-side rendered chart.
        </p>
        <ul className="mt-1">
          <li><strong>Chart Types:</strong> Bar, line, pie, scatter, table</li>
          <li><strong>Interactivity:</strong> Limited (not full Tableau embed)</li>
          <li><strong>Customization:</strong> Chart config passed as JSON</li>
          <li><strong>Performance:</strong> Rendered client-side from raw data</li>
        </ul>
      </div>

      <h3>⚙️ Agent Graph Implementation</h3>

      <div className="code-block mt-2">
{`// Agent JSON/YAML Structure (Simplified)
{
  "agent": {
    "name": "Observability Agent",
    "instructions": "You are an expert...",
    "nodes": [
      {
        "id": "TopicSelector",
        "type": "router",
        "routes": {
          "semantic_data_analysis": "SemanticDataAnalysis",
          "agent_metadata": "AgentsMetadataAnalysis",
          "metric_explanation": "SemanticMetricExplanation"
        }
      },
      {
        "id": "SemanticDataAnalysis",
        "type": "action",
        "action": "AnalyzeSemanticData",
        "contextVariables": [
          "targetEntityType",
          "targetEntityId",
          "targetEntityState"
        ]
      },
      {
        "id": "AgentsMetadataAnalysis",
        "type": "action",
        "action": "FetchAgentsMetadata"
      }
    ]
  }
}`}
      </div>

      <h3>🚧 Technical Challenges</h3>

      <div className="grid grid-2 mt-2">
        <div className="card">
          <div className="card-title">⚠️ Determinism</div>
          <div className="card-content">
            <p>
              LLMs are non-deterministic, but analytics requires consistent answers. The same 
              question should yield the same result.
            </p>
            <p className="mt-1"><strong>Solution:</strong></p>
            <ul>
              <li>Agent Graph for structured routing</li>
              <li>Direct SQL generation (not LLM interpretation)</li>
              <li>Business preferences for consistency</li>
              <li>Evaluation framework to measure variance</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">⚠️ Context Management</div>
          <div className="card-content">
            <p>
              Agent Graph doesn't support optional context variables. If a variable isn't set, 
              it causes an error.
            </p>
            <p className="mt-1"><strong>Workaround:</strong></p>
            <ul>
              <li>Use state variables as fallback</li>
              <li>Filed feature request with Agent Graph team</li>
              <li>Custom logic to set defaults</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">⚠️ Multi-SDM Support</div>
          <div className="card-content">
            <p>
              Concierge agent works with one SDM per session. Users might ask questions spanning 
              multiple SDMs.
            </p>
            <p className="mt-1"><strong>Solution:</strong></p>
            <ul>
              <li>Map SDM based on current page context</li>
              <li>Allow user to override in conversation</li>
              <li>Future: Auto-detect appropriate SDM</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">⚠️ Accuracy & Grounding</div>
          <div className="card-content">
            <p>
              LLMs can hallucinate or misinterpret queries, leading to incorrect SQL generation.
            </p>
            <p className="mt-1"><strong>Solution:</strong></p>
            <ul>
              <li>Business preferences for guidance</li>
              <li>Evaluation framework (Benchforce)</li>
              <li>Show generated SQL for transparency</li>
              <li>Future: Waii.ai integration for better NL2SQL</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>🧪 Evaluation Framework</h3>

      <div className="info-box mt-2">
        <h4>Benchforce</h4>
        <p>
          Evaluation framework for testing Observability Agent across multiple queries and 
          validating accuracy, groundedness, and coherence.
        </p>
      </div>

      <div className="grid grid-2 mt-2">
        <div className="card">
          <div className="card-title">Test Data Format</div>
          <div className="card-content">
            <div className="code-block">
{`// JSON Lines format
{
  "query": "What was escalation rate?",
  "expected_output": "12.4%",
  "expected_actions": ["AnalyzeSemanticData"],
  "expected_parameters": {
    "metric": "escalation_rate"
  }
}`}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Evaluation Metrics</div>
          <div className="card-content">
            <ul>
              <li><strong>Accuracy:</strong> LLM-as-judge compares output to ground truth</li>
              <li><strong>Groundedness:</strong> Answer supported by actual data</li>
              <li><strong>Coherence:</strong> Response is well-structured and clear</li>
              <li><strong>Turn Efficiency:</strong> Number of turns to resolution</li>
              <li><strong>Latency:</strong> Response time</li>
              <li><strong>Action Correctness:</strong> Right tools called with right params</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>📦 Dependencies</h3>

      <div className="grid grid-3 mt-2">
        <div className="card">
          <div className="card-title">Tableau Next Team</div>
          <div className="card-content">
            <ul>
              <li>Concierge agent capabilities</li>
              <li>Semantic layer APIs</li>
              <li>SDM support & enablement</li>
              <li>Business preferences</li>
              <li>Visualization renderer</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Agent Graph Team</div>
          <div className="card-content">
            <ul>
              <li>Optional context variables</li>
              <li>Node orchestration features</li>
              <li>Debugging tools</li>
              <li>Performance optimization</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Observability Platform</div>
          <div className="card-content">
            <ul>
              <li>STDM schema & APIs</li>
              <li>SDM definitions</li>
              <li>Tag infrastructure</li>
              <li>Data Cloud pricing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="success-box mt-2">
        <h4>🎯 Key Takeaways</h4>
        <ul>
          <li>Built on Agent Graph for determinism and interoperability</li>
          <li>Leverages Concierge Agent for Phase 1 analytical capabilities</li>
          <li>Consumes multiple data sources: STDM, SDM, Tags, Agent metadata</li>
          <li>Uses custom LWC for visualization rendering</li>
          <li>Evaluation framework ensures quality and accuracy</li>
          <li>Multiple team dependencies require close coordination</li>
        </ul>
      </div>
    </div>
  );
};

export default TechnicalDetails;
