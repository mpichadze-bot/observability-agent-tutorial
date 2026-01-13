import { useState } from 'react';

const Overview = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="section">
      <h2>🤖 What is the Observability Agent?</h2>
      
      <div className="info-box">
        <p><strong>The Observability Agent is a conversational agent for analyzing and improving AI agents' performance.</strong></p>
        <p>It acts as a sophisticated analysis engine that allows users to ask natural language questions about their agents and receive data-backed answers with evidence and visualizations.</p>
      </div>

      <h3>📖 Executive Summary</h3>
      <p>
        The Observability Agent represents a foundational component of the Agentforce Command Center, delivering 
        a unified engine and interface for ad hoc analysis and optimization recommendations. It transforms how 
        organizations manage their AI workforce by providing an interactive, "agentic experience" that enables 
        anyone—from developers to business leaders—to understand agent performance and take action.
      </p>

      <h3>🎯 The Problem: Performance Divergence</h3>
      <p>
        A critical challenge in managing large-scale AI is <strong>performance divergence</strong>: the gap between 
        an agent's designed behavior and its actual performance in the real world. While Agentforce provides a wealth 
        of observability data, customers are often overwhelmed and lack the tools to translate this information into 
        actionable insights.
      </p>

      <div className="highlight-box mt-2">
        <h4>The Core Challenge</h4>
        <p>
          <strong>Too much data, not enough insight.</strong> Organizations capture massive amounts of observability 
          data—session traces, metrics, tags, and logs—but struggle to:
        </p>
        <ul>
          <li>Find the signal in the noise</li>
          <li>Understand why metrics change</li>
          <li>Connect high-level KPIs to specific conversations</li>
          <li>Translate insights into concrete improvements</li>
          <li>Make data analysis accessible to non-technical users</li>
        </ul>
        <p className="mt-1">
          This creates an <strong>operational blind spot</strong>, leaving businesses unable to diagnose root causes 
          or systematically improve their agents, ultimately failing to maximize ROI and delivering suboptimal customer experiences.
        </p>
      </div>

      <h3>🔍 The Five Critical Gaps</h3>

      <div className="grid grid-2 mt-2">
        <div 
          className={`card clickable ${expandedCard === 'gap1' ? 'expanded' : ''}`}
          onClick={() => toggleCard('gap1')}
        >
          <div className="card-title">
            1. 📊 Data Overload Gap
            <span className="expand-indicator">{expandedCard === 'gap1' ? '▼' : '▶'}</span>
          </div>
          <div className="card-content">
            <h4>The Problem:</h4>
            <p>
              As we capture more comprehensive data from session traces, Optimization data, tags, AHM data, and testing 
              center, the sheer volume becomes overwhelming.
            </p>
            {expandedCard === 'gap1' && (
              <>
                <p className="mt-1">
                  Traditional dashboards are static and struggle to surface the most critical insights from this 
                  ocean of data. Organizations collect:
                </p>
                <ul>
                  <li><strong>Session Traces:</strong> Full conversation logs with turn-by-turn details</li>
                  <li><strong>Optimization Data:</strong> Significant events and decision points</li>
                  <li><strong>Tags:</strong> Structured metadata (runtime, LLM, custom)</li>
                  <li><strong>Metrics:</strong> Pre-calculated KPIs across multiple dimensions</li>
                  <li><strong>AHM Data:</strong> Health monitoring signals and alerts</li>
                </ul>
                <h4 className="mt-1">The Impact:</h4>
                <ul>
                  <li><strong>Slow, reactive troubleshooting:</strong> Hours spent finding root causes</li>
                  <li><strong>Critical issues remain hidden:</strong> Important signals lost in noise</li>
                  <li><strong>Manual log filtering:</strong> Technical skills required for analysis</li>
                  <li><strong>Patterns go unnoticed:</strong> Systemic issues not identified</li>
                  <li><strong>Alert fatigue:</strong> Too many notifications, miss important ones</li>
                </ul>
                <h4 className="mt-1">The Solution:</h4>
                <p>
                  The Observability Agent intelligently sifts through the noise to find the signal, surfacing the most 
                  relevant patterns and insights on demand through natural language queries.
                </p>
                <div className="success-box mt-1">
                  <strong>Example Workflow:</strong><br />
                  Instead of: Manually querying logs, filtering data, creating reports<br />
                  Now: "Show me what's causing escalations" → Instant analysis with evidence
                </div>
              </>
            )}
          </div>
        </div>

        <div 
          className={`card clickable ${expandedCard === 'gap2' ? 'expanded' : ''}`}
          onClick={() => toggleCard('gap2')}
        >
          <div className="card-title">
            2. ⏱️ Time-to-Insight Gap
            <span className="expand-indicator">{expandedCard === 'gap2' ? '▼' : '▶'}</span>
          </div>
          <div className="card-content">
            <h4>The Problem:</h4>
            <p>
              Answering complex performance questions currently requires hours or days of manual log and report analysis.
            </p>
            {expandedCard === 'gap2' && (
              <>
                <p className="mt-1">
                  Traditional workflow for investigating issues:
                </p>
                <ol>
                  <li><strong>Identify anomaly</strong> on dashboard (5-10 minutes)</li>
                  <li><strong>Export data</strong> for analysis (10-15 minutes)</li>
                  <li><strong>Write SQL queries</strong> to investigate (30-60 minutes)</li>
                  <li><strong>Filter through logs</strong> manually (1-2 hours)</li>
                  <li><strong>Correlate findings</strong> across data sources (1-2 hours)</li>
                  <li><strong>Create visualizations</strong> to present (30 minutes)</li>
                  <li><strong>Document findings</strong> and share (30 minutes)</li>
                </ol>
                <p className="mt-1"><strong>Total time: 4-7 hours</strong></p>
                <h4 className="mt-1">The Impact:</h4>
                <ul>
                  <li><strong>Slow optimization cycles:</strong> Can only investigate a few issues per week</li>
                  <li><strong>Inability to react to live issues:</strong> Problems persist while investigating</li>
                  <li><strong>Delayed business decisions:</strong> Executives waiting for analysis</li>
                  <li><strong>Missed opportunities:</strong> Quick wins go unidentified</li>
                  <li><strong>Resource drain:</strong> Data analysts become bottleneck</li>
                </ul>
                <h4 className="mt-1">The Solution:</h4>
                <p>
                  The agent reduces time-to-insight from <strong>hours to seconds</strong>:
                </p>
                <div className="code-block">
                  User: "Why did escalation rate spike yesterday?"<br />
                  Agent: *3 seconds later*<br />
                  "15% spike driven by Password Reset topic (85% of increase)..."
                </div>
                <div className="success-box mt-1">
                  <strong>Acceleration:</strong> 4-7 hours → 30 seconds = <strong>500-840× faster</strong>
                </div>
              </>
            )}
          </div>
        </div>

        <div 
          className={`card clickable ${expandedCard === 'gap3' ? 'expanded' : ''}`}
          onClick={() => toggleCard('gap3')}
        >
          <div className="card-title">
            3. 🔍 Interpretation Gap
            <span className="expand-indicator">{expandedCard === 'gap3' ? '▼' : '▶'}</span>
          </div>
          <div className="card-content">
            <h4>The Problem:</h4>
            <p>
              Dashboards show <em>what</em> is happening but can't explain <em>why</em> or interpret what it means.
            </p>
            {expandedCard === 'gap3' && (
              <>
                <p className="mt-1">
                  Common scenario: Dashboard shows "Escalation rate: 27% ↑ 15%"
                </p>
                <p><strong>Questions that can't be answered by the dashboard:</strong></p>
                <ul>
                  <li>Why did it increase?</li>
                  <li>Which topics are driving the increase?</li>
                  <li>What changed to cause this?</li>
                  <li>Is it a systemic issue or isolated cases?</li>
                  <li>What should I do about it?</li>
                </ul>
                <p className="mt-1">
                  There's a fundamental disconnect: metrics live in SDM (aggregated), but the answers live in 
                  STDM (session traces). No easy way to bridge them.
                </p>
                <h4 className="mt-1">The Impact:</h4>
                <ul>
                  <li><strong>Difficult to determine corrective actions:</strong> Know what's wrong, not what to fix</li>
                  <li><strong>Symptoms visible, root causes hidden:</strong> Treating effects, not causes</li>
                  <li><strong>Lack of context:</strong> Can't prioritize or make informed decisions</li>
                  <li><strong>Repeated troubleshooting:</strong> Same issues resurface</li>
                  <li><strong>Low confidence in changes:</strong> Not sure if interventions will help</li>
                </ul>
                <h4 className="mt-1">The Solution:</h4>
                <p>
                  The agent bridges SDM metrics and STDM session data:
                </p>
                <div className="code-block">
                  User: "Why did escalation rate spike?"<br />
                  Agent: "15% spike primarily from Password Reset topic (85% of increase).<br />
                  Pattern: Users not receiving OTP codes after SSO update yesterday.<br />
                  Evidence: [Shows 3 example conversations]<br />
                  Recommendation: Check SSO integration deployment."
                </div>
                <div className="success-box mt-1">
                  <strong>Bridge:</strong> Metrics (what) → Sessions (why) → Evidence (proof) → Action (fix)
                </div>
              </>
            )}
          </div>
        </div>

        <div 
          className={`card clickable ${expandedCard === 'gap4' ? 'expanded' : ''}`}
          onClick={() => toggleCard('gap4')}
        >
          <div className="card-title">
            4. 🎓 Skills Gap
            <span className="expand-indicator">{expandedCard === 'gap4' ? '▼' : '▶'}</span>
          </div>
          <div className="card-content">
            <h4>The Problem:</h4>
            <p>
              Deep analysis requires specialized skills, creating a bottleneck where only technical experts can understand performance.
            </p>
            {expandedCard === 'gap4' && (
              <>
                <p className="mt-1"><strong>Required skills for current analysis:</strong></p>
                <ul>
                  <li><strong>SQL:</strong> Query STDM data directly</li>
                  <li><strong>Semantic Layer Understanding:</strong> Know SDM structure and relationships</li>
                  <li><strong>Data Cloud:</strong> Navigate Data Cloud query interfaces</li>
                  <li><strong>Statistical Analysis:</strong> Understand significance, correlations</li>
                  <li><strong>Domain Knowledge:</strong> Interpret agent-specific metrics</li>
                  <li><strong>Visualization Tools:</strong> Create charts and dashboards</li>
                </ul>
                <p className="mt-1">
                  <strong>Reality:</strong> Only 10-20% of users have these skills, creating a massive bottleneck.
                </p>
                <h4 className="mt-1">The Impact:</h4>
                <ul>
                  <li><strong>Not democratized:</strong> Only data analysts can optimize agents</li>
                  <li><strong>Dependency:</strong> Weeks-long backlogs for analysis requests</li>
                  <li><strong>Limited adoption:</strong> Non-technical users avoid observability</li>
                  <li><strong>Slower iteration:</strong> Must wait for experts to be available</li>
                  <li><strong>Knowledge silos:</strong> Insights trapped with individuals</li>
                </ul>
                <h4 className="mt-1">The Solution:</h4>
                <p>
                  Natural language democratizes analysis:
                </p>
                <div className="code-block">
                  ❌ Before: "SELECT COUNT(*) WHERE topic='password_reset'..."<br />
                  ✅ Now: "How many password reset sessions were there?"
                </div>
                <div className="success-box mt-1">
                  <strong>Empowerment:</strong> From 10-20% of users → 100% of users can analyze agents
                </div>
              </>
            )}
          </div>
        </div>

        <div 
          className={`card clickable ${expandedCard === 'gap5' ? 'expanded' : ''}`}
          onClick={() => toggleCard('gap5')}
        >
          <div className="card-title">
            5. ✅ Actionability Gap
            <span className="expand-indicator">{expandedCard === 'gap5' ? '▼' : '▶'}</span>
          </div>
          <div className="card-content">
            <h4>The Problem:</h4>
            <p>
              Even when an insight is found, the path to implementing a fix isn't clear.
            </p>
            {expandedCard === 'gap5' && (
              <>
                <p className="mt-1"><strong>Common scenario:</strong></p>
                <div className="highlight-box">
                  <p>Data analyst: "Password Reset topic has 23% escalation rate"</p>
                  <p>Agent builder: "Okay... what should I do about it?"</p>
                  <p>Data analyst: "🤷 The data just shows it's high"</p>
                </div>
                <p className="mt-1">
                  Gap between diagnostic (what's wrong) and prescriptive (what to do) analysis.
                </p>
                <h4 className="mt-1">The Impact:</h4>
                <ul>
                  <li><strong>Insights fail to translate:</strong> "Interesting findings" with no follow-up</li>
                  <li><strong>No continuous improvement:</strong> One-off fixes, no systematic optimization</li>
                  <li><strong>Prioritization uncertainty:</strong> Which of 10 issues to fix first?</li>
                  <li><strong>Analysis paralysis:</strong> Too many options, unclear path</li>
                  <li><strong>Implementation risk:</strong> Unsure if changes will help</li>
                </ul>
                <h4 className="mt-1">The Solution:</h4>
                <p>
                  The agent provides <strong>concrete, prescriptive recommendations</strong>:
                </p>
                <div className="code-block">
                  ❌ Generic: "Password Reset has high escalations"<br />
                  <br />
                  ✅ Actionable: "Password Reset escalations driven by OTP failures.<br />
                  Recommendation #1: Update prompt to clarify 'Check spam folder'<br />
                  Recommendation #2: Add fallback for SMS delivery failures<br />
                  Estimated impact: -8% escalation rate"
                </div>
                <div className="success-box mt-1">
                  <strong>Complete Loop:</strong> Insight → Root Cause → Recommendation → Impact Estimate → Action
                </div>
              </>
            )}
          </div>
        </div>

        <div 
          className={`card clickable ${expandedCard === 'impact' ? 'expanded' : ''}`}
          onClick={() => toggleCard('impact')}
        >
          <div className="card-title">
            📈 Business Impact
            <span className="expand-indicator">{expandedCard === 'impact' ? '▼' : '▶'}</span>
          </div>
          <div className="card-content">
            <h4>Combined Effect:</h4>
            <p>
              These five gaps create a compounding effect that limits AI investment ROI.
            </p>
            {expandedCard === 'impact' && (
              <>
                <div className="highlight-box mt-1">
                  <p><strong>Compound Effect Example:</strong></p>
                  <ol>
                    <li><strong>Data Overload:</strong> Can't find the issue in logs</li>
                    <li><strong>Time-to-Insight:</strong> Takes 6 hours to analyze</li>
                    <li><strong>Interpretation:</strong> Find metric spike but not why</li>
                    <li><strong>Skills:</strong> Must wait for data analyst</li>
                    <li><strong>Actionability:</strong> No clear recommendation</li>
                  </ol>
                  <p className="mt-1">
                    <strong>Result:</strong> Issue persists for days/weeks, affecting hundreds of customers
                  </p>
                </div>
                <h4 className="mt-1">Business Consequences:</h4>
                <ul>
                  <li><strong>Suboptimal ROI:</strong> Can't realize full value of Agentforce investment</li>
                  <li><strong>Poor CX:</strong> Issues persist, customers frustrated</li>
                  <li><strong>Limited Scalability:</strong> Can't manage more than a few agents</li>
                  <li><strong>Competitive Disadvantage:</strong> Slower to optimize than competitors</li>
                  <li><strong>Reduced Trust:</strong> Stakeholders lose confidence in AI</li>
                  <li><strong>High TCO:</strong> More support staff, more escalations</li>
                </ul>
                <h4 className="mt-1">Financial Impact:</h4>
                <div className="code-block">
                  Example: 100,000 monthly sessions<br />
                  - 12% escalation rate (12,000 escalations/month)<br />
                  - $15 cost per human escalation<br />
                  - Monthly cost: $180,000<br />
                  <br />
                  If Observability Agent reduces escalations by 3pp (12% → 9%):<br />
                  - 3,000 fewer escalations<br />
                  - <strong>Monthly savings: $45,000</strong><br />
                  - <strong>Annual savings: $540,000</strong>
                </div>
                <h4 className="mt-1">Value Proposition:</h4>
                <p>
                  The Observability Agent addresses <strong>all five gaps simultaneously</strong>, transforming 
                  how organizations understand, optimize, and scale their AI workforce.
                </p>
                <div className="success-box mt-1">
                  <strong>From:</strong> Reactive, slow, expert-dependent troubleshooting<br />
                  <strong>To:</strong> Proactive, instant, democratized optimization
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <h3 className="mt-2">🎯 Primary Use-Cases</h3>
      
      <div className="grid grid-2 mt-2">
        <div 
          className={`card clickable ${expandedCard === 'usecase1' ? 'expanded' : ''}`}
          onClick={() => toggleCard('usecase1')}
        >
          <div className="card-title">
            1. Ad-Hoc Analysis
            <span className="expand-indicator">{expandedCard === 'usecase1' ? '▼' : '▶'}</span>
          </div>
          <div className="card-content">
            <p><strong>Goal:</strong> Query performance trends, diagnose issues, and understand user behavior with natural language.</p>
            
            {expandedCard === 'usecase1' && (
              <>
                <h4 className="mt-1">Key Features:</h4>
                <ul>
                  <li><strong>Natural language queries:</strong> No SQL required</li>
                  <li><strong>Real-time metric lookups:</strong> Instant calculations</li>
                  <li><strong>Trend analysis:</strong> Custom time periods (hours to years)</li>
                  <li><strong>Multi-dimensional segmentation:</strong> Filter by channel, topic, customer type, etc.</li>
                  <li><strong>Drill-down capability:</strong> From metrics to specific sessions</li>
                  <li><strong>Comparative analysis:</strong> This week vs. last week, v1 vs. v2</li>
                </ul>

                <div className="highlight-box mt-1">
                  <strong>Example Workflow:</strong><br />
                  User: "What was the escalation rate last week?"<br />
                  Agent: "12.4% (124/1,000 sessions). Down 5% from previous week."<br />
                  User: "Which topics contributed most?"<br />
                  Agent: "Billing Disputes (50%), Password Reset (23%)..."<br />
                  User: "Show me examples from Billing Disputes"<br />
                  Agent: [Shows 3 conversation transcripts with analysis]
                </div>

                <h4 className="mt-1">User Personas & Frequency:</h4>
                <ul>
                  <li><strong>Agent Builders:</strong> Multiple times daily for performance monitoring</li>
                  <li><strong>Support Managers:</strong> Daily summaries, weekly deep dives</li>
                  <li><strong>Executives:</strong> Weekly/monthly high-level reviews</li>
                  <li><strong>Data Analysts:</strong> On-demand investigation</li>
                  <li><strong>Product Managers:</strong> Feature planning and impact analysis</li>
                </ul>

                <h4 className="mt-1">Example Questions:</h4>
                <div className="code-block">
                  - "How many users did we help today?"<br />
                  - "What's trending up this week?"<br />
                  - "Which topics have the longest handle time?"<br />
                  - "Show me sentiment by hour of day"<br />
                  - "Compare Mobile vs Web performance"
                </div>
              </>
            )}
          </div>
        </div>

        <div className="card">
          <div className="card-title">2. Optimization Recommendations</div>
          <div className="card-content">
            <p><strong>Goal:</strong> Identify prioritized opportunities (by impact) with concrete, actionable recommendations.</p>
            
            <h4 className="mt-1">Key Features:</h4>
            <ul>
              <li>Automated opportunity identification</li>
              <li>Impact-based prioritization</li>
              <li>Specific, actionable recommendations</li>
              <li>Before/after impact estimation</li>
              <li>Implementation guidance</li>
            </ul>

            <div className="highlight-box mt-1">
              <strong>Example Workflow:</strong><br />
              User: "What's my biggest opportunity to improve?"<br />
              Agent: "Improving 'Password Reset' topic could reduce escalations by 8%. Recommendation: Update prompt to clarify OTP location..."
            </div>

            <h4 className="mt-1">Recommendation Types:</h4>
            <ul>
              <li><strong>Topic Routing:</strong> Improve description clarity</li>
              <li><strong>Knowledge Gaps:</strong> Create/update articles</li>
              <li><strong>Automation:</strong> Add new actions/topics</li>
              <li><strong>Prompt Optimization:</strong> Reduce loops/errors</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">3. Proactive Alerting</div>
          <div className="card-content">
            <p><strong>Goal:</strong> Receive notifications when metrics spike or cross thresholds, drawing admin attention to issues.</p>
            
            <h4 className="mt-1">Key Features:</h4>
            <ul>
              <li>Customizable metric thresholds</li>
              <li>Real-time anomaly detection</li>
              <li>Multi-channel notifications (in-app, Slack, email)</li>
              <li>Contextual alert messages</li>
              <li>Alert-to-analysis workflow</li>
            </ul>

            <div className="highlight-box mt-1">
              <strong>Example Alert:</strong><br />
              "🚨 Escalation rate spiked 15% in the last hour (from 12% to 27%). Primary driver: Password Reset topic. 320 escalations vs. normal baseline of 45."
            </div>

            <h4 className="mt-1">Alert Types:</h4>
            <ul>
              <li><strong>Threshold Alerts:</strong> Metric crosses defined limit</li>
              <li><strong>Anomaly Alerts:</strong> Unusual pattern detected</li>
              <li><strong>Trend Alerts:</strong> Sustained negative trend</li>
              <li><strong>Comparison Alerts:</strong> Performance gap vs. baseline</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">4. Root Cause Analysis</div>
          <div className="card-content">
            <p><strong>Goal:</strong> Understand <em>why</em> issues are occurring with deep diagnostic analysis and evidence.</p>
            
            <h4 className="mt-1">Key Features:</h4>
            <ul>
              <li>Multi-step diagnostic reasoning</li>
              <li>Pattern discovery across sessions</li>
              <li>Correlation analysis</li>
              <li>Evidence retrieval from transcripts</li>
              <li>Hypothesis generation and validation</li>
            </ul>

            <div className="highlight-box mt-1">
              <strong>Example Workflow:</strong><br />
              User: "Why are customers frustrated during password reset?"<br />
              Agent: "Analysis of 5,200 sessions reveals 3 main drivers:<br />
              1. OTP delivery failures (35% frustration)<br />
              2. Redundant verification (25%)<br />
              3. Unclear instructions (18%)"
            </div>

            <h4 className="mt-1">Analysis Depth:</h4>
            <ul>
              <li><strong>Descriptive:</strong> What happened</li>
              <li><strong>Diagnostic:</strong> Why it happened</li>
              <li><strong>Predictive:</strong> What might happen (future)</li>
              <li><strong>Prescriptive:</strong> What should be done</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="mt-2">🔑 Key Capabilities</h3>

      <div className="grid grid-3 mt-2">
        <div className="card">
          <div className="card-title">Natural Language Queries</div>
          <div className="card-content">
            <ul>
              <li>Ask questions in plain English</li>
              <li>No SQL or technical knowledge required</li>
              <li>Conversational follow-up questions</li>
              <li>Context maintained across turns</li>
              <li>Clarifying questions when ambiguous</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Data-Backed Answers</div>
          <div className="card-content">
            <ul>
              <li>Grounded in actual metrics and data</li>
              <li>No hallucination or speculation</li>
              <li>Citations to data sources</li>
              <li>Statistical significance when relevant</li>
              <li>Confidence levels for predictions</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Evidence & Visualizations</div>
          <div className="card-content">
            <ul>
              <li>Supporting charts and graphs</li>
              <li>Sample conversation transcripts</li>
              <li>Links to full session traces</li>
              <li>Comparative visualizations</li>
              <li>Interactive data tables</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Context-Aware</div>
          <div className="card-content">
            <ul>
              <li>Understands current page context</li>
              <li>Applies active dashboard filters</li>
              <li>Knows which agent you're viewing</li>
              <li>Respects time range selections</li>
              <li>Adapts to user role/permissions</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Multi-SDM Support</div>
          <div className="card-content">
            <ul>
              <li>Works across multiple data models</li>
              <li>Foundation, Service, Employee SDMs</li>
              <li>Custom customer extensions</li>
              <li>Automatic SDM selection</li>
              <li>Cross-SDM comparisons (future)</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Conversation History</div>
          <div className="card-content">
            <ul>
              <li>Remembers previous questions</li>
              <li>Enables iterative exploration</li>
              <li>Supports "show me more" requests</li>
              <li>Tracks context across sessions</li>
              <li>Allows refinement of queries</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="mt-2">📋 Jobs to Be Done (JTBD) Framework</h3>

      <p>
        The Observability Agent is designed around specific jobs that users need to accomplish. These JTBDs 
        are prioritized based on customer research and aligned with the phased roadmap.
      </p>

      <div className="grid grid-2 mt-2">
        <div className="card">
          <span className="badge badge-primary">High Priority - Phase 1</span>
          <div className="card-title">JTBD #1: Exploratory Analysis</div>
          <div className="card-content">
            <p><strong>When:</strong> Starting my day or week</p>
            <p><strong>I want to:</strong> Get a "state of the union" summary</p>
            <p><strong>So that:</strong> I understand where to focus my efforts</p>
            <div className="code-block mt-1">
              "Give me a summary of how the service agent is doing"
            </div>
            <p className="mt-1"><strong>Success Criteria:</strong></p>
            <ul>
              <li>Receives key metrics in &lt;5 seconds</li>
              <li>Understands overall health at a glance</li>
              <li>Identifies areas needing attention</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <span className="badge badge-primary">High Priority - Phase 1</span>
          <div className="card-title">JTBD #2: Data Literacy</div>
          <div className="card-content">
            <p><strong>When:</strong> Looking at a dashboard or report</p>
            <p><strong>I want to:</strong> Understand what the data represents</p>
            <p><strong>So that:</strong> I can trust and correctly interpret the information</p>
            <div className="code-block mt-1">
              "How do you define 'Resolution Rate'?"
            </div>
            <p className="mt-1"><strong>Success Criteria:</strong></p>
            <ul>
              <li>Clear definition with formula</li>
              <li>Explanation of scope and filters</li>
              <li>Example calculation</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <span className="badge badge-success">High Priority - Phase 2</span>
          <div className="card-title">JTBD #3: Diagnostic Analysis</div>
          <div className="card-content">
            <p><strong>When:</strong> I see a metric spike or dip</p>
            <p><strong>I want to:</strong> Understand why it happened</p>
            <p><strong>So that:</strong> I can take corrective action</p>
            <div className="code-block mt-1">
              "Why did escalation rate spike by 15%?"
            </div>
            <p className="mt-1"><strong>Success Criteria:</strong></p>
            <ul>
              <li>Identifies primary driver(s)</li>
              <li>Provides evidence from sessions</li>
              <li>Suggests root cause</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <span className="badge badge-warning">Medium Priority - Phase 2</span>
          <div className="card-title">JTBD #4: Investigative Analysis</div>
          <div className="card-content">
            <p><strong>When:</strong> I receive qualitative feedback</p>
            <p><strong>I want to:</strong> Verify if it's a systemic issue</p>
            <p><strong>So that:</strong> I know whether/how to respond</p>
            <div className="code-block mt-1">
              "A customer complained about returns handling. Is this frequent?"
            </div>
            <p className="mt-1"><strong>Success Criteria:</strong></p>
            <ul>
              <li>Quantifies frequency of issue</li>
              <li>Shows example conversations</li>
              <li>Confirms or refutes complaint</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <span className="badge badge-success">High Priority - Phase 2</span>
          <div className="card-title">JTBD #5: Validation Analysis</div>
          <div className="card-content">
            <p><strong>When:</strong> I've made a change to my agent</p>
            <p><strong>I want to:</strong> Verify if it worked</p>
            <p><strong>So that:</strong> I know if I should keep, rollback, or refine it</p>
            <div className="code-block mt-1">
              "Did the new version reduce escalations?"
            </div>
            <p className="mt-1"><strong>Success Criteria:</strong></p>
            <ul>
              <li>Before/after comparison</li>
              <li>Statistical significance</li>
              <li>Side effects check</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <span className="badge badge-warning">Medium Priority - Phase 3</span>
          <div className="card-title">JTBD #6: Business Segmentation</div>
          <div className="card-content">
            <p><strong>When:</strong> Planning improvements</p>
            <p><strong>I want to:</strong> Compare performance across segments</p>
            <p><strong>So that:</strong> I can prioritize highest-impact areas</p>
            <div className="code-block mt-1">
              "Compare VIP vs. Standard customer performance"
            </div>
            <p className="mt-1"><strong>Success Criteria:</strong></p>
            <ul>
              <li>Side-by-side metrics</li>
              <li>Key differences highlighted</li>
              <li>Actionable insights</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="success-box mt-2">
        <h4>🚀 Long-Term Vision: Automated Lifecycle Integration (Phase 5)</h4>
        <p>
          The ultimate goal is for the Observability Agent to become the central hub in an automated, multi-agent 
          lifecycle, dramatically accelerating the agent improvement cycle:
        </p>
        <ul>
          <li><strong>AI Assist:</strong> Primary orchestrator interacting with users</li>
          <li><strong>Observability Agent:</strong> Monitor, analyze, and identify issues</li>
          <li><strong>Builder Agent (NGA):</strong> Automatically author configuration changes</li>
          <li><strong>Testing Agent:</strong> Validate improvements and run regression tests</li>
          <li><strong>Health Monitoring Agent:</strong> Track system health and send alerts</li>
        </ul>
        <p className="mt-1">
          <strong>End-to-End Workflow:</strong> Observability Agent identifies issue → recommends fix → 
          user approves → Builder Agent implements → Testing Agent validates → Observability Agent confirms improvement.
        </p>
      </div>

      <h3 className="mt-2">🎓 User Research Insights</h3>

      <div className="info-box mt-2">
        <h4>Based on Customer Research</h4>
        <p>
          The Observability Agent design is informed by extensive user research conducted with agent builders, 
          support managers, and executives. Key findings include:
        </p>
        <ul>
          <li><strong>Primary Pain Point:</strong> "I can see something is wrong, but I don't know why"</li>
          <li><strong>Top Need:</strong> Faster time-to-insight (from hours to minutes)</li>
          <li><strong>Biggest Barrier:</strong> Technical skills required for deep analysis</li>
          <li><strong>Most Valued:</strong> Concrete, actionable recommendations</li>
          <li><strong>Adoption Blocker:</strong> Lack of trust in AI-generated insights</li>
        </ul>
      </div>

      <div className="grid grid-2 mt-2">
        <div className="card">
          <div className="card-title">Target Personas</div>
          <div className="card-content">
            <h5>Primary Users:</h5>
            <ul>
              <li><strong>Agent Builders:</strong> Configure and optimize agents daily</li>
              <li><strong>Support Managers:</strong> Monitor team and agent performance</li>
              <li><strong>Data Analysts:</strong> Deep-dive analysis and reporting</li>
            </ul>
            <h5 className="mt-1">Secondary Users:</h5>
            <ul>
              <li><strong>Executives:</strong> High-level summaries and ROI tracking</li>
              <li><strong>QA Engineers:</strong> Validation and regression testing</li>
              <li><strong>Product Managers:</strong> Feature planning and prioritization</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Usage Patterns</div>
          <div className="card-content">
            <h5>Daily Activities:</h5>
            <ul>
              <li>Morning: Check overnight performance</li>
              <li>Ongoing: Monitor alerts and investigate spikes</li>
              <li>Ad-hoc: Answer stakeholder questions</li>
            </ul>
            <h5 className="mt-1">Weekly Activities:</h5>
            <ul>
              <li>Trend analysis and reporting</li>
              <li>Optimization planning</li>
              <li>Version comparison after changes</li>
            </ul>
            <h5 className="mt-1">Monthly Activities:</h5>
            <ul>
              <li>Executive summaries</li>
              <li>Quarterly planning</li>
              <li>Strategic improvements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
