const Phases = () => {
  return (
    <div className="section">
      <h2>📊 Roadmap: Phases & Milestones</h2>

      <div className="info-box">
        <p><strong>The Observability Agent is being developed in 5 progressive phases</strong>, each building on the previous 
        to move from foundational Q&A to full automation.</p>
      </div>

      <div className="timeline mt-2">
        {/* Phase 1 */}
        <div className="card">
          <div className="phase-header">
            <span className="badge badge-success">Phase 1: Current</span>
            <h3>Foundational Q&A</h3>
          </div>
          
          <div className="card-content">
            <p><strong>Theme:</strong> Answering "What?"</p>
            
            <div className="highlight-box mt-1">
              <strong>Core Capability:</strong> Natural language wrapper over the Semantic Data Model (SDM). 
              Can retrieve metrics and understand dashboard metadata, but cannot perform deep multi-step reasoning 
              or access raw session data.
            </div>

            <h4 className="mt-1">✅ Features Implemented:</h4>
            <ul>
              <li>✅ Parse natural language queries for metrics and dimensions</li>
              <li>✅ Answer definitional questions (e.g., "How is 'Resolution Rate' calculated?")</li>
              <li>✅ Provide high-level summaries (e.g., "Give me a summary of the service agent")</li>
              <li>✅ Text-based answers with data points from SDM</li>
              <li>✅ Guardrails to state "I can't answer that" for complex queries</li>
              <li>✅ Support from Analytics screens in Agent Studio</li>
            </ul>

            <h4 className="mt-1">🎯 JTBDs Addressed:</h4>
            <div className="grid grid-2 mt-1">
              <div className="info-box">
                <strong>#1 (High Priority):</strong> Exploratory Analysis
                <div className="code-block mt-1">
                  "Give me a summary of how the service agent is doing"
                </div>
              </div>
              <div className="info-box">
                <strong>#2 (High Priority):</strong> Data Literacy & Interpretation
                <div className="code-block mt-1">
                  "How do you define 'Resolution Rate'?"
                </div>
              </div>
            </div>

            <h4 className="mt-1">📌 Entry Points:</h4>
            <ul>
              <li>Analytics screens in Agent Studio (assistant icon)</li>
              <li>Intents and Insights in Agent Studio (assistant icon)</li>
            </ul>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="card mt-2">
          <div className="phase-header">
            <span className="badge badge-warning">Phase 2: Customer Pilot</span>
            <h3>Diagnostic Analysis with Evidence</h3>
          </div>
          
          <div className="card-content">
            <p><strong>Theme:</strong> Answering "What?" with evidence + Deeper "Why" analysis</p>
            
            <div className="highlight-box mt-1">
              <strong>Core Capability:</strong> Multi-step queries that first look at aggregated metrics (SDM) 
              then drill down into raw session traces (STDM) for supporting examples and context.
            </div>

            <h4 className="mt-1">🔮 Planned Features:</h4>
            <ul>
              <li>🔄 Identify primary drivers when metrics change</li>
              <li>🔄 Retrieve and synthesize insights from conversation transcripts</li>
              <li>🔄 Provide evidence with conversation snippets and session trace links</li>
              <li>🔄 Perform version comparisons by analyzing metrics and session data</li>
              <li>🔄 Connect SDM metrics to underlying STDM data</li>
            </ul>

            <h4 className="mt-1">🎯 JTBDs Addressed:</h4>
            <div className="grid grid-2 mt-1">
              <div className="info-box">
                <strong>#3 (High Priority):</strong> Diagnostic Analysis
                <div className="code-block mt-1">
                  "Why did escalation rate spike by 15%?"
                </div>
              </div>
              <div className="info-box">
                <strong>#4 (High Priority):</strong> Explainability
                <div className="code-block mt-1">
                  "Show me examples where resolution was 'yes' but customer was unhappy"
                </div>
              </div>
            </div>

            <div className="grid grid-2 mt-1">
              <div className="info-box">
                <strong>#5 (High Priority):</strong> Validation Analysis
                <div className="code-block mt-1">
                  "Did the new version reduce escalations?"
                </div>
              </div>
              <div className="info-box">
                <strong>#4 (Medium Priority):</strong> Investigative Analysis
                <div className="code-block mt-1">
                  "Is the agent failing to handle product returns?"
                </div>
              </div>
            </div>

            <h4 className="mt-1">📌 Entry Points:</h4>
            <ul>
              <li>Analytics + Optimization screens in Agent Studio</li>
              <li>Contextual triggers (assistant icon)</li>
            </ul>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="card mt-2">
          <div className="phase-header">
            <span className="badge badge-warning">Phase 3: Open Beta/GA</span>
            <h3>Deeper Business Insights</h3>
          </div>
          
          <div className="card-content">
            <p><strong>Theme:</strong> Answering business questions with segmentation</p>
            
            <div className="highlight-box mt-1">
              <strong>Core Capability:</strong> Understand CRM dimensions and perform segmentation analysis 
              by joining observability data with 360 SDM.
            </div>

            <h4 className="mt-1">🔮 Planned Features:</h4>
            <ul>
              <li>🔄 Answer comparative questions across business dimensions</li>
              <li>🔄 Segment analysis (VIP vs. Standard, Mobile vs. Web, US vs. EMEA)</li>
              <li>🔄 Create custom insights/tags through conversation</li>
              <li>🔄 Save queries as tracked metrics over time</li>
              <li>🔄 Integration with CRM data for deeper context</li>
            </ul>

            <h4 className="mt-1">🎯 JTBDs Addressed:</h4>
            <div className="grid grid-2 mt-1">
              <div className="info-box">
                <strong>#6 (Medium Priority):</strong> Business Segmentation
                <div className="code-block mt-1">
                  "Compare escalation rate for VIP vs. Standard customers"
                </div>
              </div>
              <div className="info-box">
                <strong>#7 (Medium Priority):</strong> Custom Insights
                <div className="code-block mt-1">
                  "Save this analysis as a custom metric to track"
                </div>
              </div>
            </div>

            <h4 className="mt-1">📌 Entry Points:</h4>
            <ul>
              <li>Analytics + Optimization screens</li>
              <li>Easy-to-discover contextual triggers</li>
            </ul>
          </div>
        </div>

        {/* Phase 4 */}
        <div className="card mt-2">
          <div className="phase-header">
            <span className="badge badge-info">Phase 4: v2.0</span>
            <h3>Full Optimization & Recommendations</h3>
          </div>
          
          <div className="card-content">
            <p><strong>Theme:</strong> From insight to action</p>
            
            <div className="highlight-box mt-1">
              <strong>Core Capability:</strong> Integration with optimization engine to provide concrete, 
              actionable recommendations for improvement.
            </div>

            <h4 className="mt-1">🔮 Planned Features:</h4>
            <ul>
              <li>🔄 Proactively surface recommendations in conversational UI</li>
              <li>🔄 Suggest specific changes to topic descriptions</li>
              <li>🔄 Identify knowledge gaps and recommend article creation/updates</li>
              <li>🔄 Discover opportunities for new automated actions</li>
              <li>🔄 Prioritize improvements by impact</li>
              <li>🔄 Root cause diagnosis with solution paths</li>
            </ul>

            <h4 className="mt-1">🎯 JTBDs Addressed:</h4>
            <div className="grid grid-3 mt-1">
              <div className="info-box">
                <strong>#10:</strong> Proactive Alerts
                <div className="code-block mt-1">
                  Alert when metrics cross thresholds
                </div>
              </div>
              <div className="info-box">
                <strong>#11:</strong> Topic Routing
                <div className="code-block mt-1">
                  "Rephrase topic X to Y for better routing"
                </div>
              </div>
              <div className="info-box">
                <strong>#12:</strong> Automation Opportunities
                <div className="code-block mt-1">
                  Identify most valuable new topics/actions
                </div>
              </div>
            </div>

            <div className="grid grid-2 mt-1">
              <div className="info-box">
                <strong>#13:</strong> Knowledge Gaps
                <div className="code-block mt-1">
                  Find gaps leading to unanswered questions
                </div>
              </div>
              <div className="info-box">
                <strong>#9:</strong> Root Cause Diagnosis
                <div className="code-block mt-1">
                  Trace issues to misconfigured topics or actions
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 5 */}
        <div className="card mt-2">
          <div className="phase-header">
            <span className="badge badge-info">Phase 5: v3.0</span>
            <h3>Automated Lifecycle Integration</h3>
          </div>
          
          <div className="card-content">
            <p><strong>Theme:</strong> "Fix it for me" - Full automation</p>
            
            <div className="highlight-box mt-1">
              <strong>Core Capability:</strong> Central hub in automated multi-agent lifecycle. Delegates tasks 
              to Builder and Testing Agents via multi-agent protocol, closing the loop from insight to deployment.
            </div>

            <h4 className="mt-1">🔮 Planned Features:</h4>
            <ul>
              <li>🔄 <strong>One-Click Fixes:</strong> Approve recommendation → Builder Agent auto-authors change</li>
              <li>🔄 <strong>Automated Validation:</strong> Request Testing Agent to run regression tests</li>
              <li>🔄 <strong>Closed-Loop Reporting:</strong> Compare new vs. old version performance</li>
              <li>🔄 <strong>External Integration:</strong> Create Jira tickets, send Slack notifications</li>
              <li>🔄 <strong>Multi-Agent Orchestration:</strong> Coordinate with Builder, Testing, Health Monitoring agents</li>
            </ul>

            <h4 className="mt-1">🎯 Vision:</h4>
            <div className="success-box mt-1">
              <p><strong>AI Assist as Primary Orchestrator</strong></p>
              <p>
                AI Assist interacts with users and delegates to specialized secondary agents:
              </p>
              <ul>
                <li><strong>Observability Agent:</strong> Monitor and analyze performance</li>
                <li><strong>Builder Agent (NGA):</strong> Author configuration changes</li>
                <li><strong>Testing Agent:</strong> Validate improvements and run tests</li>
                <li><strong>Health Monitoring Agent:</strong> Track system health and alerts</li>
              </ul>
            </div>

            <h4 className="mt-1">📌 Entry Points:</h4>
            <ul>
              <li>Assistant icon throughout Agentforce Studio</li>
              <li>Contextual triggers across all surfaces</li>
              <li>Proactive notifications</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="mt-2">📈 Progression Summary</h3>
      
      <div className="mt-2">
        {/* Phase 1 Detailed */}
        <div className="card mb-2">
          <div className="card-title">
            <span className="badge badge-success">Phase 1</span>
            Foundational Q&A
          </div>
          <div className="card-content">
            <p>
              This initial phase focuses on leveraging the core strengths of a concierge-agent to answer direct, 
              fact-based questions. The goal is to solve the highest-priority JTBDs related to basic data literacy 
              and high-level performance summaries, delivering immediate value by making existing data more accessible.
            </p>
            
            <h4 className="mt-1">Theme:</h4>
            <p>Answering "What?"</p>
            
            <h4 className="mt-1">Core Capability:</h4>
            <div className="highlight-box">
              The agent acts as a natural language wrapper over the Semantic Data Model (SDM). It can retrieve 
              metrics and understand dashboard metadata but cannot perform deep, multi-step reasoning or access 
              raw session data.
            </div>
            
            <h4 className="mt-1">JTBDs Addressed:</h4>
            <ul>
              <li><strong>#1 (High Priority):</strong> Exploratory Analysis (Summary Questions)</li>
              <li><strong>#2 (High Priority):</strong> Data Literacy & Interpretation</li>
            </ul>
            
            <h4 className="mt-1">Entry Points:</h4>
            <ul>
              <li>Analytics screens in Agent Studio, triggered by assistant icon</li>
            </ul>
            
            <h4 className="mt-1">Key Features:</h4>
            <ul>
              <li>Provide common questions as starter prompts</li>
              <li>Parse natural language queries for metrics and dimensions</li>
              <li>Answer definitional questions (e.g., "How is 'Resolution Rate' calculated?")</li>
              <li>Provide high-level summaries of agent performance (e.g., "Give me a summary of the service agent is doing")</li>
              <li>Respond with text-based answers and data points retrieved directly from the SDM</li>
              <li>Implement guardrails to clearly state, "I can't answer that," when a query requires deeper analysis</li>
            </ul>
          </div>
        </div>

        {/* Phase 2 Detailed */}
        <div className="card mb-2">
          <div className="card-title">
            <span className="badge badge-warning">Phase 2</span>
            Diagnostic Analysis with Evidence [Customer Pilot Milestone]
          </div>
          <div className="card-content">
            <p>
              This phase enhances the agent's intelligence by allowing it to connect metrics to the underlying 
              session data (STDM). This is a critical step in building user trust and moving from simply reporting 
              data to explaining it.
            </p>
            
            <h4 className="mt-1">Theme:</h4>
            <p>Answering "What?" with evidence. Provide deeper analysis for "Why" questions</p>
            
            <h4 className="mt-1">Core Capability:</h4>
            <div className="highlight-box">
              The agent can now perform multi-step queries, first looking at aggregated metrics (SDM) and then 
              drilling down into the raw session traces (STDM) to find supporting examples and context. While 
              the "root cause" may not be available for every question, the agent will attempt to get the most 
              relevant insight with examples to provide an explanation for the insights provided. Will need to 
              query agent metadata.
            </div>
            
            <h4 className="mt-1">JTBDs Addressed:</h4>
            <ul>
              <li><strong>#3 (High Priority):</strong> Diagnostic Analysis (Metric-driven Questions)</li>
              <li><strong>#4 (High Priority):</strong> Explainability</li>
              <li><strong>#5 (High Priority):</strong> Validation Analysis</li>
            </ul>
            
            <h4 className="mt-1">Entry Points:</h4>
            <ul>
              <li>Analytics + Optimization screens in Agent Studio, triggered by assistant icon</li>
            </ul>
            
            <h4 className="mt-1">Key Features:</h4>
            <ul>
              <li>When a user asks why a metric changed, the agent can identify the primary drivers (e.g., a specific topic)</li>
              <li>It can retrieve and synthesize insights from relevant conversation transcripts to support its conclusions</li>
              <li>Responses now include not just the answer but also evidence, such as illustrative conversation snippets and links to specific session traces</li>
              <li>The agent can perform comparisons between agent versions by analyzing metrics and session data for both</li>
            </ul>
          </div>
        </div>

        {/* Phase 3 Detailed */}
        <div className="card mb-2">
          <div className="card-title">
            <span className="badge badge-warning">Phase 3</span>
            Deeper Insights Answering Business Questions [Open Beta/GA]
          </div>
          <div className="card-content">
            <p>
              In this phase, the agent evolves from a diagnostic tool to a more analytical partner. It can 
              understand a company's CRM dimensions and perform analysis on observability data to answer business 
              segmentation questions. The agent will also help with creation of custom tag/metric through a conversation.
            </p>
            
            <h4 className="mt-1">Theme:</h4>
            <p>Answering business questions</p>
            
            <h4 className="mt-1">Core Capability:</h4>
            <div className="highlight-box">
              The agent can perform segmentation by joining data with 360 SDM.
            </div>
            
            <h4 className="mt-1">JTBDs Addressed:</h4>
            <ul>
              <li><strong>#6 (Medium Priority):</strong> Business-driven segmentation questions</li>
              <li><strong>#7 (Medium Priority):</strong> Create and Track Custom Insights</li>
            </ul>
            
            <h4 className="mt-1">Entry Points:</h4>
            <ul>
              <li>Analytics + Optimization screens in Agent Studio, triggered by assistant icon</li>
              <li>Easy to discover contextual triggers in addition to assistant icon</li>
            </ul>
            
            <h4 className="mt-1">Key Features:</h4>
            <ul>
              <li>Answer complex comparative questions across business dimensions (e.g., VIP vs. Standard customers, Mobile vs. Web channels)</li>
              <li>Allow users to save an insightful query or its results as a custom insight to track over time</li>
            </ul>
          </div>
        </div>

        {/* Phase 4 Detailed */}
        <div className="card mb-2">
          <div className="card-title">
            <span className="badge badge-info">Phase 4</span>
            Full Optimization & Proactive Recommendations [v2.0]
          </div>
          <div className="card-content">
            <p>
              This is a significant step toward realizing the full vision. The agent integrates with the optimization 
              engine to provide not just analysis but also concrete, actionable recommendations for improvement.
            </p>
            
            <h4 className="mt-1">Theme:</h4>
            <p>From insight to action</p>
            
            <h4 className="mt-1">Core Capability:</h4>
            <div className="highlight-box">
              The agent becomes a true optimization partner, capable of diagnosing issues, identifying opportunities, 
              and recommending specific changes to agent configurations and knowledge.
            </div>
            
            <h4 className="mt-1">JTBDs Addressed:</h4>
            <ul>
              <li><strong>#10, #11, #12, #13:</strong> All Optimization Recommendations (Routing, Automation, Knowledge Gaps)</li>
            </ul>
            
            <h4 className="mt-1">Entry Points:</h4>
            <ul>
              <li>Analytics + Optimization screens in Agent Studio, triggered by assistant icon</li>
              <li>Easy to discover contextual triggers in addition to assistant icon</li>
            </ul>
            
            <h4 className="mt-1">Key Features:</h4>
            <ul>
              <li>Proactively surface recommendations directly within the conversational UI</li>
              <li>Suggest specific changes to topic descriptions to improve routing accuracy</li>
              <li>Identify knowledge gaps and recommend the creation or update of specific articles</li>
              <li>Discover and recommend opportunities for new automated actions based on common user requests</li>
              <li>The agent can now answer "What should I do about this?" in addition to "What happened?"</li>
            </ul>
          </div>
        </div>

        {/* Phase 5 Detailed */}
        <div className="card mb-2">
          <div className="card-title">
            <span className="badge badge-info">Phase 5</span>
            Automated Lifecycle Integration [v3.0]
          </div>
          <div className="card-content">
            <p>
              This final phase elevates the Observability Agent from an analytical partner to a central hub in an 
              automated, multi-agent lifecycle. By integrating with specialized Builder and Testing Agents via a 
              multi-agent protocol, it closes the loop from insight to deployment, dramatically accelerating the 
              agent improvement cycle.
            </p>
            
            <h4 className="mt-1">Theme:</h4>
            <p>"Fix it for me"</p>
            
            <h4 className="mt-1">Core Capability:</h4>
            <div className="highlight-box">
              The agent can now delegate tasks to other agents. When it identifies and recommends a fix, it can 
              orchestrate the entire workflow—from authoring the change to testing and validating its impact—with 
              minimal human intervention.
            </div>
            
            <h4 className="mt-1">Entry Points:</h4>
            <ul>
              <li>Assistant icon in Agentforce studio</li>
              <li>Easy to discover contextual triggers in addition to assistant icon</li>
            </ul>
            
            <h4 className="mt-1">JTBDs Addressed:</h4>
            <p>
              This phase enhances all previous JTBDs by adding a layer of automation, turning manual "next steps" 
              into one-click actions.
            </p>
            
            <h4 className="mt-1">Key Features:</h4>
            <ul>
              <li><strong>One-Click Fixes:</strong> When the agent recommends a change (e.g., "Update this topic description"), a user can approve it, which triggers the Builder Agent to automatically author the change in a new agent version</li>
              <li><strong>Automated Validation:</strong> After a change is authored, the Observability Agent can request the Testing Agent to run a suite of regression and performance tests against the new version</li>
              <li><strong>Closed-Loop Reporting:</strong> Once testing is complete, the Observability Agent presents a final validation report, comparing the new version's performance against the old one and confirming that the original issue has been resolved without introducing new problems</li>
              <li><strong>Integration with External Systems:</strong> The agent can create tickets in systems like Jira or send notifications to Slack channels, integrating the agent optimization workflow directly into existing development processes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phases;
