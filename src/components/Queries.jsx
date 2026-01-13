import { useState } from 'react';

const Queries = () => {
  const [selectedCategory, setSelectedCategory] = useState('simple');
  const [selectedExample, setSelectedExample] = useState(null);

  const queryCategories = {
    simple: {
      title: 'Simple Queries',
      description: 'Basic metric lookup and definition questions',
      examples: [
        {
          id: 'simple-1',
          query: 'What was the escalation rate last week?',
          reasoning: [
            'Step 1: Identify metric - escalation rate = escalated conversations / total conversations',
            'Step 2: Apply filter - time range = last week',
            'Step 3: Query metrics layer (SDM)',
            'Step 4: Aggregate results into a single percentage',
            'Step 5: Format answer clearly'
          ],
          response: 'The escalation rate last week was 12.4% (124 escalations out of 1,000 total sessions). This was slightly lower than the previous week (13.1%).',
          phase: 'Phase 1'
        },
        {
          id: 'simple-2',
          query: 'How do you define "Resolution Rate"?',
          reasoning: [
            'Step 1: Look up metric definition in SDM',
            'Step 2: Retrieve calculation formula',
            'Step 3: Identify any filters or exclusions',
            'Step 4: Format definition clearly'
          ],
          response: 'Resolution Rate is calculated as: (Successfully resolved sessions / Total engaged sessions) × 100. A session is considered "resolved" when the agent successfully answers the user\'s question without escalation or abandonment.',
          phase: 'Phase 1'
        },
        {
          id: 'simple-3',
          query: 'Give me a summary of how the service agent is doing',
          reasoning: [
            'Step 1: Identify relevant metrics for summary',
            'Step 2: Apply default time filter (last 30 days)',
            'Step 3: Fetch key performance indicators',
            'Step 4: Format as high-level summary'
          ],
          response: 'Service Agent Performance Summary (Last 30 Days):\n• Total Sessions: 15,240\n• Deflection Rate: 68% (10,363 deflected)\n• Escalation Rate: 12% (1,829 escalated)\n• Average Sentiment: Positive (3.8/5)\n• Most Common Topics: Password Reset (28%), Order Status (22%), Billing (15%)',
          phase: 'Phase 1'
        }
      ]
    },
    aggregation: {
      title: 'Aggregation Queries',
      description: 'Queries requiring grouping, ranking, and comparison',
      examples: [
        {
          id: 'agg-1',
          query: 'What are the top 3 topics with the highest escalation rates?',
          reasoning: [
            'Step 1: Identify grouping entity - semantic topic (tag)',
            'Step 2: Identify metric - escalation rate per topic',
            'Step 3: Apply default filter (last 30 days)',
            'Step 4: Aggregate and rank topics by escalation rate',
            'Step 5: Retrieve representative transcripts',
            'Step 6: Format response in table/list'
          ],
          response: 'Top 3 topics by escalation rate (last 30 days):\n\n1. Password reset instructions - 23% (1,200/5,200)\n   > "I\'ve reset three times but still can\'t log in..."\n\n2. Billing disputes - 50% (900/1,800)\n   > "Your system is charging me twice - get me a human!"\n\n3. Shipping address change - 14% (600/4,300)\n   > "I tried updating my address, but it didn\'t save"',
          phase: 'Phase 1-2'
        },
        {
          id: 'agg-2',
          query: 'Compare the escalation rate for VIP vs. Standard customers',
          reasoning: [
            'Step 1: Identify customer segment dimension',
            'Step 2: Calculate escalation rate for each segment',
            'Step 3: Retrieve session counts for context',
            'Step 4: Format comparison clearly'
          ],
          response: 'Escalation Rate Comparison:\n\n• VIP Customers: 8.2% (410/5,000 sessions)\n• Standard Customers: 13.5% (1,350/10,000 sessions)\n\nVIP customers have a 39% lower escalation rate. This may be due to simpler queries or prioritized handling.',
          phase: 'Phase 3'
        }
      ]
    },
    trend: {
      title: 'Trend Analysis',
      description: 'Time-based queries and trend identification',
      examples: [
        {
          id: 'trend-1',
          query: 'Is customer sentiment improving month over month?',
          reasoning: [
            'Step 1: Identify metric - mean sentiment per session',
            'Step 2: Identify timeframe - default last 6 months',
            'Step 3: Retrieve sessions and compute per-session sentiment',
            'Step 4: Aggregate average sentiment by month',
            'Step 5: Calculate month-over-month change',
            'Step 6: Optional: Run t-test for statistical significance',
            'Step 7: Retrieve representative transcripts',
            'Step 8: Format trend chart and summary'
          ],
          response: 'Over the last 6 months, average customer sentiment has improved from -0.12 in September to +0.05 in February.\n\n✅ Month-over-month improvement is statistically significant (p < 0.01)\n\nRepresentative early transcript: "I\'ve tried resetting three times, still can\'t log in!!!"\nRepresentative recent transcript: "It worked perfectly this time, thanks!"',
          phase: 'Phase 2'
        },
        {
          id: 'trend-2',
          query: 'Show me the deflection rate trend for the last 90 days',
          reasoning: [
            'Step 1: Identify metric - deflection rate',
            'Step 2: Apply time filter - last 90 days',
            'Step 3: Group by day or week',
            'Step 4: Generate visualization',
            'Step 5: Identify significant changes'
          ],
          response: 'Deflection Rate Trend (Last 90 Days):\n\n📈 Overall: Improved from 62% to 71% (+9 percentage points)\n\nKey Events:\n• Dec 15: Spike to 68% (new knowledge articles added)\n• Jan 10: Dip to 64% (post-holiday volume surge)\n• Jan 25: Recovery to 71% (agent improvements deployed)\n\nCurrent 7-day average: 71.2%',
          phase: 'Phase 2'
        }
      ]
    },
    diagnostic: {
      title: 'Diagnostic Analysis',
      description: 'Root cause investigation and problem diagnosis',
      examples: [
        {
          id: 'diag-1',
          query: 'Why did escalation rate spike by 15% yesterday?',
          reasoning: [
            'Step 1: Confirm metric spike in SDM',
            'Step 2: Identify time window for comparison',
            'Step 3: Break down escalations by topic/dimension',
            'Step 4: Identify primary driver(s)',
            'Step 5: Query STDM for session examples',
            'Step 6: Analyze common patterns',
            'Step 7: Formulate hypothesis'
          ],
          response: 'The 15% spike in escalation rate yesterday was primarily driven by the "Account Login" topic:\n\n🔍 Root Cause Analysis:\n• 85% of the spike came from "Account Login" issues\n• Pattern: Users receiving "Invalid credentials" error after SSO update\n• 320 escalations vs. normal baseline of 45\n\n💬 Example conversations:\n"I just logged in this morning, now it says my password is wrong"\n"SSO isn\'t working - tried 5 times"\n\n✅ Recommendation: Check SSO integration deployment from yesterday.',
          phase: 'Phase 2'
        },
        {
          id: 'diag-2',
          query: 'Why are customers getting frustrated during password reset conversations?',
          reasoning: [
            'Step 1: Identify filter - topic = password reset',
            'Step 2: Define outcome - frustration = negative sentiment or escalation',
            'Step 3: Calculate frustration rate',
            'Step 4: Break down by subgroups (reset method, attempts, errors)',
            'Step 5: Rank subgroups by frustration rate',
            'Step 6: Extract structured features (attempts, latency, etc.)',
            'Step 7: Model relationship between features and frustration',
            'Step 8: Generate hypotheses with evidence'
          ],
          response: 'Analysis suggests three main drivers of frustration in password reset:\n\n1️⃣ OTP Delivery Failures - 35% frustration rate\n   • Multiple reset attempts (>3) correlate with 2.5× higher frustration\n   • Example: "I\'ve asked for the code three times, still nothing"\n\n2️⃣ Redundant Verification - 25% frustration rate\n   • Multi-factor flows add +40s avg. handling time\n   • Example: "Why do I need to log in twice???"\n\n3️⃣ Unclear Instructions - 18% frustration rate\n   • Users not finding verification code in email\n   • Example: "Where am I supposed to find this code?"',
          phase: 'Phase 2-4'
        }
      ]
    },
    validation: {
      title: 'Validation & Comparison',
      description: 'Verify changes and compare versions',
      examples: [
        {
          id: 'val-1',
          query: 'We deployed a new version of the sales agent yesterday. How does it compare to the previous version?',
          reasoning: [
            'Step 1: Identify agent and versions',
            'Step 2: Define comparison time windows',
            'Step 3: Retrieve key metrics for both versions',
            'Step 4: Calculate deltas',
            'Step 5: Check for unintended side effects',
            'Step 6: Format comparison report'
          ],
          response: 'Sales Agent V2.3 vs V2.2 Comparison:\n\n✅ Improvements:\n• Deflection Rate: 58% → 64% (+6pp, +10%)\n• Avg. Session Duration: 4.2min → 3.8min (-0.4min, -10%)\n• Positive Sentiment: 72% → 78% (+6pp)\n\n⚠️ Watch Areas:\n• Escalation Rate: 15% → 17% (+2pp) - slightly higher\n• "Product Pricing" topic showing more confusion\n\n💡 Overall: Strong improvement in efficiency and satisfaction. Monitor escalations.',
          phase: 'Phase 2'
        },
        {
          id: 'val-2',
          query: 'Did the updated prompt reduce conversation loops for the Schedule Appointment topic?',
          reasoning: [
            'Step 1: Identify topic and change date',
            'Step 2: Define "conversation loop" metric',
            'Step 3: Compare before/after rates',
            'Step 4: Retrieve sample sessions',
            'Step 5: Check for side effects'
          ],
          response: 'Yes, the prompt update has been highly effective:\n\n📊 Direct Impact:\n• Conversation Loop Rate: 12% → 1.5% (87% decrease)\n• Escalation Rate: 25% → 4% (84% decrease)\n\n✅ No Negative Side Effects:\n• Resolution rate unchanged (68%)\n• Handle time unchanged (3.2 min avg)\n• Other topics unaffected\n\n🎯 Root Cause of Improvement:\nNew prompt explicitly asks for specific date/time format, reducing ambiguity that caused loops.',
          phase: 'Phase 2'
        }
      ]
    },
    business: {
      title: 'Business Intelligence',
      description: 'Segmentation and business-driven analysis',
      examples: [
        {
          id: 'biz-1',
          query: 'What are the top 5 contact reasons for Enterprise customers?',
          reasoning: [
            'Step 1: Filter by customer segment = Enterprise',
            'Step 2: Group by contact reason (intent/topic)',
            'Step 3: Rank by session count',
            'Step 4: Retrieve top 5',
            'Step 5: Add context (volume, sentiment)'
          ],
          response: 'Top 5 Contact Reasons for Enterprise Customers (Last 30 Days):\n\n1. Integration Questions (1,240 sessions, 82% positive sentiment)\n2. API & Developer Support (980 sessions, 75% positive sentiment)\n3. Custom Feature Requests (720 sessions, 68% positive sentiment)\n4. Billing & Invoicing (650 sessions, 65% positive sentiment)\n5. Account Management (540 sessions, 88% positive sentiment)\n\n💡 Insight: Enterprise customers focus on technical/integration topics vs. transactional needs.',
          phase: 'Phase 3'
        },
        {
          id: 'biz-2',
          query: 'Compare agent performance across Mobile vs. Web channels',
          reasoning: [
            'Step 1: Segment sessions by channel',
            'Step 2: Calculate key metrics for each',
            'Step 3: Identify significant differences',
            'Step 4: Formulate hypotheses for differences'
          ],
          response: 'Agent Performance: Mobile vs. Web\n\n📱 Mobile Channel:\n• Sessions: 8,500\n• Deflection Rate: 62%\n• Escalation Rate: 18%\n• Avg. Sentiment: 3.2/5\n• Top Issue: "UI navigation confusion"\n\n💻 Web Channel:\n• Sessions: 14,200\n• Deflection Rate: 72%\n• Escalation Rate: 11%\n• Avg. Sentiment: 3.9/5\n• Top Issue: "Knowledge article not found"\n\n🔍 Analysis: Mobile shows lower performance. Likely causes: smaller screen, less context, UI challenges.',
          phase: 'Phase 3'
        }
      ]
    }
  };

  const handleExampleClick = (example) => {
    setSelectedExample(selectedExample?.id === example.id ? null : example);
  };

  return (
    <div className="section">
      <h2>💬 Query Examples & Walkthroughs</h2>

      <div className="info-box">
        <p>
          <strong>Explore different types of queries the Observability Agent can handle.</strong> Each example includes 
          the agent's internal reasoning process and expected response.
        </p>
      </div>

      <div className="query-category-selector mt-2">
        {Object.keys(queryCategories).map((key) => (
          <button
            key={key}
            className={`category-btn ${selectedCategory === key ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(key);
              setSelectedExample(null);
            }}
          >
            {queryCategories[key].title}
          </button>
        ))}
      </div>

      <div className="category-content mt-2">
        <h3>{queryCategories[selectedCategory].title}</h3>
        <p className="category-description">{queryCategories[selectedCategory].description}</p>

        <div className="examples-grid mt-2">
          {queryCategories[selectedCategory].examples.map((example) => (
            <div key={example.id} className="example-card">
              <div 
                className="example-header" 
                onClick={() => handleExampleClick(example)}
                style={{ cursor: 'pointer' }}
              >
                <div className="example-query">
                  <span className="query-icon">💭</span>
                  <strong>"{example.query}"</strong>
                </div>
                <span className="badge badge-primary">{example.phase}</span>
              </div>

              {selectedExample?.id === example.id && (
                <div className="example-details">
                  <div className="reasoning-section mt-2">
                    <h4>🧠 Agent Reasoning (Internal):</h4>
                    <ol className="reasoning-list">
                      {example.reasoning.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="response-section mt-2">
                    <h4>💬 Agent Response:</h4>
                    <div className="success-box">
                      <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                        {example.response}
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <h3 className="mt-2">📊 Query Complexity Levels</h3>

      <div className="grid grid-3 mt-2">
        <div className="card">
          <div className="card-title">🟢 Simple (Phase 1)</div>
          <div className="card-content">
            <p><strong>Characteristics:</strong></p>
            <ul>
              <li>Single metric lookup</li>
              <li>Direct SDM query</li>
              <li>Definition retrieval</li>
              <li>Basic filtering</li>
            </ul>
            <p className="mt-1"><strong>Data Sources:</strong> SDM only</p>
          </div>
        </div>

        <div className="card">
          <div className="card-title">🟡 Medium (Phase 2)</div>
          <div className="card-content">
            <p><strong>Characteristics:</strong></p>
            <ul>
              <li>Multi-step reasoning</li>
              <li>Aggregation & ranking</li>
              <li>Trend analysis</li>
              <li>Evidence retrieval</li>
            </ul>
            <p className="mt-1"><strong>Data Sources:</strong> SDM + STDM</p>
          </div>
        </div>

        <div className="card">
          <div className="card-title">🔴 Complex (Phase 3-4)</div>
          <div className="card-content">
            <p><strong>Characteristics:</strong></p>
            <ul>
              <li>Root cause analysis</li>
              <li>Multi-dimensional segmentation</li>
              <li>Pattern discovery</li>
              <li>Recommendations</li>
            </ul>
            <p className="mt-1"><strong>Data Sources:</strong> SDM + STDM + CRM + Optimizer</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .query-category-selector {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          padding: 1rem;
          background-color: #f3f3f3;
          border-radius: 8px;
        }

        .category-btn {
          padding: 0.75rem 1.5rem;
          background-color: white;
          border: 2px solid #dddbda;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s;
        }

        .category-btn:hover {
          border-color: #0176d3;
          background-color: #f8f9fa;
        }

        .category-btn.active {
          background-color: #0176d3;
          color: white;
          border-color: #0176d3;
        }

        .category-description {
          color: #706e6b;
          font-style: italic;
          margin-top: 0.5rem;
        }

        .examples-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .example-card {
          background: white;
          border: 2px solid #dddbda;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.2s;
        }

        .example-card:hover {
          border-color: #0176d3;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .example-header {
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f8f9fa;
        }

        .example-query {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
        }

        .query-icon {
          font-size: 1.5rem;
        }

        .example-details {
          padding: 1.5rem;
          border-top: 2px solid #dddbda;
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 2000px;
          }
        }

        .reasoning-list {
          margin-left: 1.5rem;
          line-height: 1.8;
        }

        .reasoning-list li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default Queries;
