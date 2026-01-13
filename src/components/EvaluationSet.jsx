import { useState } from 'react';

const EvaluationSet = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const evaluationCategories = {
    dataLiteracy: {
      title: '1. Data Literacy (Definitions)',
      priority: 'High',
      phase: 'Phase 1',
      queries: [
        {
          query: 'How do you define Deflection Rate for my service agent?',
          expectedOutput: 'Deflection Rate is calculated as: (Successfully deflected sessions / Total sessions) × 100. A session is considered "deflected" when the agent successfully resolves the user\'s issue without requiring escalation to a human agent.',
          metrics: ['Accuracy', 'Groundedness'],
          difficulty: 'Simple'
        },
        {
          query: 'What is the exact calculation for Stickiness rate for my employee agent?',
          expectedOutput: 'Stickiness Rate is calculated as: (Returning users / Total unique users) × 100. A user is considered "returning" if they have initiated more than one session with the agent within the measurement period.',
          metrics: ['Accuracy', 'Groundedness'],
          difficulty: 'Simple'
        },
        {
          query: 'What\'s the difference between an "Abandoned Session" and a "Deflected Session"?',
          expectedOutput: 'An Abandoned Session is when a user leaves the conversation before reaching resolution or escalation. A Deflected Session is when the agent successfully resolves the user\'s issue without human intervention. Key difference: Deflected = Success, Abandoned = User left early.',
          metrics: ['Accuracy', 'Coherence'],
          difficulty: 'Simple'
        },
        {
          query: 'Explain what "Agent Health Score" measures',
          expectedOutput: 'Agent Health Score is a composite metric that measures overall agent performance using weighted components: Deflection Rate (40%), User Satisfaction (30%), Latency (20%), and Error Rate (10%). The score ranges from 0-100, with higher scores indicating better performance.',
          metrics: ['Accuracy', 'Completeness'],
          difficulty: 'Simple'
        }
      ]
    },
    exploratory: {
      title: '2. Exploratory Analysis (Summary Questions)',
      priority: 'High',
      phase: 'Phase 1',
      queries: [
        {
          query: 'Give me a high-level performance summary of my "Customer Service Agent" for last week',
          expectedOutput: 'Must include: Total sessions, Deflection rate, Escalation rate, Average sentiment, Top 3-5 topics. Should be formatted clearly with proper time window (last week).',
          expectedActions: ['AnalyzeSemanticData'],
          metrics: ['Completeness', 'Coherence', 'Turn Efficiency'],
          difficulty: 'Medium'
        },
        {
          query: 'How is my "HR Onboarding Agent" performing this month?',
          expectedOutput: 'Summary including: Session volume, Stickiness rate, Task completion rate, User satisfaction, Most common questions. Time window: current month.',
          expectedActions: ['AnalyzeSemanticData'],
          metrics: ['Completeness', 'Accuracy'],
          difficulty: 'Medium'
        },
        {
          query: 'What are the key performance indicators for my "IT Helpdesk Agent"?',
          expectedOutput: 'List of relevant KPIs: Deflection Rate, Escalation Rate, Avg. Resolution Time, User Satisfaction, Most Common Issues. Should explain each briefly.',
          expectedActions: ['AnalyzeSemanticData'],
          metrics: ['Relevance', 'Completeness'],
          difficulty: 'Medium'
        }
      ]
    },
    timeBased: {
      title: '3. Time-Based & Trend Queries',
      priority: 'Medium',
      phase: 'Phase 2',
      queries: [
        {
          query: 'Show me the trend for Total Sessions for the "Customer Service Agent" over the last 90 days',
          expectedOutput: 'Trend visualization or data showing daily/weekly session counts over 90 days. Should identify significant changes or patterns.',
          expectedActions: ['AnalyzeSemanticData'],
          metrics: ['Accuracy', 'Visualization Quality'],
          difficulty: 'Medium'
        },
        {
          query: 'Compare the Abandonment Rate for this week to last week',
          expectedOutput: 'Comparison showing: This week\'s rate, Last week\'s rate, Absolute change, Percentage change, Brief interpretation.',
          expectedActions: ['AnalyzeSemanticData'],
          metrics: ['Accuracy', 'Clarity'],
          difficulty: 'Medium'
        },
        {
          query: 'What was the month-over-month change in Total Unique Users for the employee agent?',
          expectedOutput: 'MoM comparison with: Current month users, Previous month users, Change (absolute and %), Trend direction.',
          expectedActions: ['AnalyzeSemanticData'],
          metrics: ['Accuracy', 'Completeness'],
          difficulty: 'Medium'
        }
      ]
    },
    diagnostic: {
      title: '4. Diagnostic (Metric-driven Questions)',
      priority: 'High',
      phase: 'Phase 2',
      queries: [
        {
          query: 'Our Escalation Rate spiked by 15% yesterday. What was the primary cause?',
          expectedOutput: 'Root cause analysis including: Confirmation of spike, Primary driver (topic/dimension), Volume comparison, Sample conversation snippets, Recommended action.',
          expectedActions: ['AnalyzeSemanticData', 'FetchSessionExamples'],
          metrics: ['Root Cause Accuracy', 'Evidence Quality', 'Actionability'],
          difficulty: 'Complex'
        },
        {
          query: 'My Deflection Rate dropped 10% this week. Which topics are contributing most to this decline?',
          expectedOutput: 'Analysis showing: Topics with largest deflection rate drops, Volume changes per topic, Before/after comparison, Example sessions from affected topics.',
          expectedActions: ['AnalyzeSemanticData', 'FetchSessionExamples'],
          metrics: ['Accuracy', 'Completeness', 'Evidence'],
          difficulty: 'Complex'
        },
        {
          query: 'Why did the Abandonment Rate for the "Billing" topic suddenly increase?',
          expectedOutput: 'Diagnostic analysis: Confirm increase, Identify patterns (latency, loops, errors), Show example abandoned sessions, Suggest root cause.',
          expectedActions: ['AnalyzeSemanticData', 'FetchSessionExamples'],
          metrics: ['Root Cause Accuracy', 'Pattern Discovery'],
          difficulty: 'Complex'
        }
      ]
    },
    validation: {
      title: '5. Validation (Change-driven Questions)',
      priority: 'High',
      phase: 'Phase 2',
      queries: [
        {
          query: 'I just deployed a new version of the "Service Agent" this morning. How does its Escalation Rate compare to the previous version from yesterday?',
          expectedOutput: 'Version comparison: New version metrics, Old version metrics, Delta (absolute and %), Statistical significance if applicable, Side effects check.',
          expectedActions: ['AnalyzeSemanticData', 'CompareVersions'],
          metrics: ['Accuracy', 'Completeness', 'Fair Comparison'],
          difficulty: 'Medium'
        },
        {
          query: 'We added three new knowledge articles about our "Enterprise Plan" last week. Are these articles being used, and have they reduced escalations for that topic?',
          expectedOutput: 'Impact analysis: Article usage stats, Escalation rate before/after, Topic-specific metrics, Evidence of article effectiveness.',
          expectedActions: ['AnalyzeSemanticData', 'AnalyzeKnowledgeUsage'],
          metrics: ['Causality', 'Evidence Quality'],
          difficulty: 'Complex'
        },
        {
          query: 'I rewrote the prompt for the "HR Agent" yesterday to be more empathetic. Can you compare the user sentiment scores before and after this change?',
          expectedOutput: 'Sentiment comparison: Before average, After average, Change magnitude, Statistical significance, Example conversations showing difference.',
          expectedActions: ['AnalyzeSemanticData', 'FetchSessionExamples'],
          metrics: ['Accuracy', 'Fair Comparison', 'Evidence'],
          difficulty: 'Medium'
        }
      ]
    },
    segmentation: {
      title: '6. Basic Segmentation (SDM-level)',
      priority: 'Medium',
      phase: 'Phase 1',
      queries: [
        {
          query: 'What was the Escalation Rate for the "Mobile" channel versus the "Web" channel last week?',
          expectedOutput: 'Channel comparison: Mobile escalation rate, Web escalation rate, Delta, Session volumes for context.',
          expectedActions: ['AnalyzeSemanticData'],
          metrics: ['Accuracy', 'Fair Comparison'],
          difficulty: 'Medium'
        },
        {
          query: 'Which of my service agents has the highest Deflection Rate?',
          expectedOutput: 'Ranking of agents by deflection rate with: Agent names, Deflection rates, Session volumes, Time period.',
          expectedActions: ['AnalyzeSemanticData'],
          metrics: ['Accuracy', 'Completeness'],
          difficulty: 'Simple'
        },
        {
          query: 'List the Abandonment Rate for each of my top 5 topics',
          expectedOutput: 'Top 5 topics by volume with their abandonment rates: Topic name, Abandonment rate, Total sessions, Rank.',
          expectedActions: ['AnalyzeSemanticData'],
          metrics: ['Accuracy', 'Ranking Correctness'],
          difficulty: 'Medium'
        }
      ]
    },
    businessIntelligence: {
      title: '7. Business Intelligence (CRM Dimensions)',
      priority: 'Medium',
      phase: 'Phase 3',
      queries: [
        {
          query: 'Compare the top five reasons for contact between our VIP and standard customers',
          expectedOutput: 'Side-by-side comparison: Top 5 topics for VIP, Top 5 topics for Standard, Volume comparisons, Key insights about segment differences.',
          expectedActions: ['AnalyzeSemanticData', 'JoinCRMData'],
          metrics: ['Accuracy', 'Insight Quality'],
          difficulty: 'Complex'
        },
        {
          query: 'Show me the Abandonment Rate for customers in the "EMEA" region versus "NA"',
          expectedOutput: 'Regional comparison: EMEA abandonment rate, NA abandonment rate, Statistical significance, Volume context.',
          expectedActions: ['AnalyzeSemanticData', 'JoinCRMData'],
          metrics: ['Accuracy', 'Fair Comparison'],
          difficulty: 'Medium'
        },
        {
          query: 'What is the Deflection Rate for customers on our "Pro Tier" plan?',
          expectedOutput: 'Deflection rate filtered by Pro Tier customers, Comparison to other tiers, Volume and time period.',
          expectedActions: ['AnalyzeSemanticData', 'JoinCRMData'],
          metrics: ['Accuracy', 'Filter Correctness'],
          difficulty: 'Medium'
        }
      ]
    },
    explainability: {
      title: '8. Explainability (Evidence-based)',
      priority: 'High',
      phase: 'Phase 2',
      queries: [
        {
          query: 'Our "Resolution Rate" is high, but the "User Satisfaction" score is low. Show me conversations where we "resolved" the issue but the customer was still unhappy',
          expectedOutput: 'Evidence-based analysis: Explain the discrepancy, Retrieve 3-5 example sessions, Show resolution tag + negative sentiment, Insights about why satisfaction is low.',
          expectedActions: ['AnalyzeSemanticData', 'FetchSessionExamples', 'PatternAnalysis'],
          metrics: ['Evidence Quality', 'Relevance', 'Insight'],
          difficulty: 'Complex'
        },
        {
          query: 'Which of my agent\'s topics have the highest rate of conversation loops, and what are the common user inputs that trigger them?',
          expectedOutput: 'Loop analysis: Topics ranked by loop rate, Common trigger patterns, Example conversations, Recommendations.',
          expectedActions: ['AnalyzeSemanticData', 'PatternDiscovery', 'FetchSessionExamples'],
          metrics: ['Pattern Discovery', 'Evidence Quality'],
          difficulty: 'Complex'
        },
        {
          query: 'A customer complained that the agent is unable to handle questions about product returns. Is this happening frequently? Show me examples.',
          expectedOutput: 'Investigation: Frequency of return questions, Success rate handling returns, 3-5 example sessions (both successful and failed), Confirmation or refutation of complaint.',
          expectedActions: ['AnalyzeSemanticData', 'FetchSessionExamples'],
          metrics: ['Evidence Quality', 'Completeness'],
          difficulty: 'Complex'
        }
      ]
    }
  };

  return (
    <div className="section">
      <h2>🧪 Evaluation Set & Test Queries</h2>

      <div className="info-box">
        <p>
          <strong>Comprehensive test suite for evaluating the Observability Agent's accuracy, completeness, and reliability.</strong>
        </p>
        <p>
          This evaluation set is organized by Job-to-be-Done (JTBD) categories, with queries ranging from simple 
          metric lookups to complex root cause analysis. Each query includes expected outputs, required actions, 
          and evaluation metrics.
        </p>
      </div>

      <h3>📊 Evaluation Framework Overview</h3>

      <div className="grid grid-3 mt-2">
        <div className="card">
          <div className="card-title">🎯 Test Objectives</div>
          <div className="card-content">
            <ul>
              <li>Validate query understanding</li>
              <li>Verify correct action routing</li>
              <li>Assess answer accuracy</li>
              <li>Evaluate evidence quality</li>
              <li>Measure response completeness</li>
              <li>Check coherence & clarity</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">📏 Evaluation Metrics</div>
          <div className="card-content">
            <ul>
              <li><strong>Accuracy:</strong> LLM-as-judge comparison</li>
              <li><strong>Groundedness:</strong> Answer supported by data</li>
              <li><strong>Coherence:</strong> Well-structured response</li>
              <li><strong>Completeness:</strong> All info provided</li>
              <li><strong>Turn Efficiency:</strong> Turns to resolution</li>
              <li><strong>Latency:</strong> Response time</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">🛠️ Testing Framework</div>
          <div className="card-content">
            <p><strong>Benchforce</strong> - Primary evaluation tool</p>
            <ul>
              <li>JSON Lines test data format</li>
              <li>Automated test execution</li>
              <li>LLM-as-judge evaluation</li>
              <li>Custom metric support</li>
              <li>Dashboard reporting</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="mt-2">📝 Test Query Categories</h3>

      <div className="evaluation-categories mt-2">
        {Object.entries(evaluationCategories).map(([key, category]) => (
          <div key={key} className="category-card">
            <div 
              className="category-header"
              onClick={() => setExpandedCategory(expandedCategory === key ? null : key)}
            >
              <div className="category-title">
                <h4>{category.title}</h4>
                <div className="category-badges">
                  <span className={`badge ${category.priority === 'High' ? 'badge-primary' : 'badge-success'}`}>
                    {category.priority} Priority
                  </span>
                  <span className="badge badge-info">{category.phase}</span>
                  <span className="badge badge-warning">{category.queries.length} queries</span>
                </div>
              </div>
              <span className="expand-icon">{expandedCategory === key ? '▼' : '▶'}</span>
            </div>

            {expandedCategory === key && (
              <div className="category-content">
                {category.queries.map((q, index) => (
                  <div key={index} className="query-card">
                    <div className="query-header">
                      <span className="badge badge-info">{q.difficulty}</span>
                      <strong>Query:</strong>
                    </div>
                    <div className="query-text">"{q.query}"</div>

                    <div className="query-details">
                      <div className="detail-section">
                        <h5>✅ Expected Output:</h5>
                        <p>{q.expectedOutput}</p>
                      </div>

                      {q.expectedActions && (
                        <div className="detail-section">
                          <h5>🔧 Expected Actions:</h5>
                          <div className="code-block">
                            {q.expectedActions.join(', ')}
                          </div>
                        </div>
                      )}

                      <div className="detail-section">
                        <h5>📏 Evaluation Metrics:</h5>
                        <div className="metrics-list">
                          {q.metrics.map((metric, i) => (
                            <span key={i} className="badge badge-success">{metric}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <h3 className="mt-2">🗂️ Test Data Format</h3>

      <p>Benchforce uses JSON Lines format, with one test case per line:</p>

      <div className="code-block mt-2">
{`// Example test case
{
  "query": "What was the escalation rate last week?",
  "expected_output": "12.4%",
  "expected_actions": ["AnalyzeSemanticData"],
  "expected_parameters": {
    "metric": "escalation_rate",
    "time_range": "last_week"
  },
  "context": {
    "agent_type": "service_agent",
    "sdm": "Service_Analytics_SDM"
  }
}

// Example with evidence requirement
{
  "query": "Why are customers frustrated during password reset?",
  "expected_output": "Root cause analysis with evidence",
  "expected_actions": ["AnalyzeSemanticData", "FetchSessionExamples"],
  "required_elements": [
    "frustration_rate",
    "primary_drivers",
    "example_conversations",
    "recommendations"
  ],
  "evaluation_metrics": [
    "root_cause_accuracy",
    "evidence_quality",
    "insight_depth"
  ]
}`}
      </div>

      <h3 className="mt-2">📈 Success Criteria</h3>

      <div className="grid grid-2 mt-2">
        <div className="card">
          <div className="card-title">Phase 1 Targets</div>
          <div className="card-content">
            <ul>
              <li><strong>Accuracy:</strong> ≥85% for simple queries</li>
              <li><strong>Groundedness:</strong> ≥90% (must cite SDM)</li>
              <li><strong>Coherence:</strong> ≥90%</li>
              <li><strong>Turn Efficiency:</strong> ≤2 turns for simple queries</li>
              <li><strong>Latency:</strong> &lt;3s for metric lookups</li>
              <li><strong>Guardrails:</strong> Correctly reject out-of-scope</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Phase 2 Targets</div>
          <div className="card-content">
            <ul>
              <li><strong>Accuracy:</strong> ≥80% for diagnostic queries</li>
              <li><strong>Evidence Quality:</strong> ≥85% (relevant examples)</li>
              <li><strong>Root Cause:</strong> ≥70% correct identification</li>
              <li><strong>Turn Efficiency:</strong> ≤3 turns for complex queries</li>
              <li><strong>Latency:</strong> &lt;10s for multi-step analysis</li>
              <li><strong>Completeness:</strong> ≥90%</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="mt-2">🧪 Test Data Sets</h3>

      <div className="grid grid-2 mt-2">
        <div className="card">
          <div className="card-title">Synthetic Data</div>
          <div className="card-content">
            <p><strong>Source:</strong> Agent Force Data Generator</p>
            <p><strong>Scenario:</strong> Strive (Athleisure company)</p>
            
            <h5 className="mt-1">Current Coverage:</h5>
            <ul>
              <li>Session data for STDM</li>
              <li>Service agent interactions</li>
              <li>Common support scenarios</li>
              <li>Escalation and deflection cases</li>
            </ul>

            <h5 className="mt-1">⚠️ Limitations:</h5>
            <ul>
              <li>Only 2 unique users</li>
              <li>Single support agent</li>
              <li>Limited failure scenarios</li>
              <li>No stack traces or complex errors</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Real-World Data</div>
          <div className="card-content">
            <p><strong>Strategy:</strong> Customer partnerships + Customer Zero</p>
            
            <h5 className="mt-1">Preferred Sources:</h5>
            <ul>
              <li><strong>Customer Partnerships:</strong> Anonymized production data</li>
              <li><strong>Customer Zero:</strong> help.salesforce.com data</li>
              <li><strong>Internal Testing:</strong> Pilot org data</li>
            </ul>

            <h5 className="mt-1">✅ Benefits:</h5>
            <ul>
              <li>Real failure patterns</li>
              <li>Diverse user behaviors</li>
              <li>Production-scale volume</li>
              <li>Actual edge cases</li>
            </ul>

            <h5 className="mt-1">🔒 Data Safety:</h5>
            <ul>
              <li>Notebooking environments (airgapped)</li>
              <li>Ephemeral storage</li>
              <li>Data anonymization</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="mt-2">🔄 Evaluation Workflow</h3>

      <div className="info-box mt-2">
        <h4>Benchforce Execution Steps:</h4>
        <ol>
          <li><strong>Prepare Test Data:</strong> Create/update JSON Lines file with test cases</li>
          <li><strong>Configure Environment:</strong> Set org config, agent IDs, LLM gateway keys</li>
          <li><strong>Start Services:</strong> Redis, Java planner, Python planner</li>
          <li><strong>Run Benchforce:</strong> Execute test suite against agent</li>
          <li><strong>Simulate Sessions:</strong> Event-driven simulation of each test case</li>
          <li><strong>Evaluate Results:</strong> Run metrics (accuracy, groundedness, etc.)</li>
          <li><strong>Generate Report:</strong> Dashboard with results and failures</li>
          <li><strong>Iterate:</strong> Fix issues, update prompts, re-test</li>
        </ol>
      </div>

      <h3 className="mt-2">📊 Sample Evaluation Results</h3>

      <div className="code-block mt-2">
{`// Example Benchforce Output
{
  "test_suite": "Phase 1 - Basic Queries",
  "total_queries": 24,
  "results": {
    "passed": 21,
    "failed": 3,
    "pass_rate": 87.5
  },
  "metrics": {
    "accuracy": {
      "average": 0.89,
      "min": 0.72,
      "max": 1.0
    },
    "groundedness": {
      "average": 0.94,
      "min": 0.85,
      "max": 1.0
    },
    "coherence": {
      "average": 0.92,
      "min": 0.88,
      "max": 0.98
    },
    "avg_turns": 1.4,
    "avg_latency_ms": 2150
  },
  "failures": [
    {
      "query": "Compare agent performance across regions",
      "expected": "Regional breakdown with metrics",
      "actual": "I don't have access to regional data",
      "issue": "CRM dimension not joined (Phase 3 feature)"
    }
  ]
}`}
      </div>

      <div className="success-box mt-2">
        <h4>🎯 Key Takeaways</h4>
        <ul>
          <li>Evaluation set covers 8 JTBD categories with 40+ test queries</li>
          <li>Benchforce framework automates testing and metrics calculation</li>
          <li>Test queries range from simple (Phase 1) to complex (Phase 3-4)</li>
          <li>Success criteria defined per phase with specific targets</li>
          <li>Combination of synthetic and real-world data for robust testing</li>
          <li>LLM-as-judge evaluation with custom metrics support</li>
          <li>Continuous iteration based on evaluation results</li>
        </ul>
      </div>

      <style jsx>{`
        .evaluation-categories {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .category-card {
          background: white;
          border: 2px solid #dddbda;
          border-radius: 8px;
          overflow: hidden;
        }

        .category-header {
          padding: 1.5rem;
          background: #f8f9fa;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background-color 0.2s;
        }

        .category-header:hover {
          background: #e8f4f8;
        }

        .category-title {
          flex: 1;
        }

        .category-title h4 {
          margin-bottom: 0.5rem;
          color: #032d60;
        }

        .category-badges {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .expand-icon {
          font-size: 1.2rem;
          color: #0176d3;
          margin-left: 1rem;
        }

        .category-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 5000px;
          }
        }

        .query-card {
          background: #f3f3f3;
          border-left: 4px solid #0176d3;
          padding: 1.5rem;
          border-radius: 4px;
        }

        .query-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          font-weight: 600;
          color: #032d60;
        }

        .query-text {
          font-size: 1.1rem;
          font-weight: 500;
          color: #080707;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: white;
          border-radius: 4px;
        }

        .query-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .detail-section h5 {
          color: #032d60;
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .detail-section p {
          margin: 0;
          line-height: 1.6;
        }

        .metrics-list {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};

export default EvaluationSet;
