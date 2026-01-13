const MeetingNotes = () => {
  return (
    <div className="section">
      <h2>📝 Meeting Notes & Key Decisions</h2>

      <div className="info-box">
        <p>
          <strong>Virtual Observability Agent - Deep Dive (January 12, 2026)</strong>
        </p>
        <p>
          Key discussions, decisions, and technical insights from the deep dive session with Tal Barda, Brett Johnson, 
          Son Chang, Ryan Atallah, Ascander Dost, and the Spindle team.
        </p>
      </div>

      <h3>🎯 Meeting Attendees</h3>
      <div className="grid grid-3 mt-2">
        <div className="card">
          <div className="card-title">Leadership & Architecture</div>
          <div className="card-content">
            <ul>
              <li>Tal Barda (Tech Lead)</li>
              <li>Brett Johnson (Product/Architecture)</li>
              <li>Son Chang (Architect)</li>
              <li>Ryan Atallah (Spindle Co-founder)</li>
              <li>Carson Kahn (Spindle Co-founder)</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Engineering & Research</div>
          <div className="card-content">
            <ul>
              <li>Ascander Dost (Data Scientist)</li>
              <li>Angad Nadkarni (Spindle Engineer)</li>
              <li>Nikhil Bojja</li>
              <li>Lu Han</li>
              <li>Raghuveer Krishnamurthy</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Product & Management</div>
          <div className="card-content">
            <ul>
              <li>Vinitha Ravichandran (EM)</li>
              <li>Alissa Pajer</li>
              <li>Maor Pichadze</li>
              <li>Yukiko Anonuevo</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="mt-2">🔑 Key Discussion Topics</h3>

      <div className="card mt-2">
        <div className="card-title">1. Bridging Production & Testing Environments</div>
        <div className="card-content">
          <h4>The Challenge:</h4>
          <p>
            Traditional Salesforce sandbox concept has become complex with the evolution of off-core/near-core 
            services like Data Cloud. The sandbox only covered core data, but modern services require more comprehensive 
            environment management.
          </p>

          <h4 className="mt-1">Key Points from Son Chang:</h4>
          <ul>
            <li><strong>Sandbox Evolution:</strong> Originally a separate instance for testing new releases and checking regressions</li>
            <li><strong>Current Complexity:</strong> Data Cloud and other services don't fully support traditional sandbox model</li>
            <li><strong>Metadata vs. Data:</strong> Copying metadata is manageable, but copying actual data for testing is a large undertaking</li>
            <li><strong>Promotion:</strong> Data Cloud now supports metadata promotion back to production</li>
          </ul>

          <h4 className="mt-1">Specific Use Case (Brett Johnson):</h4>
          <div className="highlight-box">
            <p>
              <strong>Scenario:</strong> An unexpected interaction occurred in production. Need to:
            </p>
            <ul>
              <li>Take that specific case</li>
              <li>Potentially anonymize it</li>
              <li>Put it into a test/evaluation environment</li>
              <li>Assert what should have happened instead</li>
            </ul>
            <p className="mt-1">
              <strong>Problem:</strong> This involves bringing production data back upstream, not just configuration changes.
            </p>
          </div>

          <h4 className="mt-1">Current Status:</h4>
          <div className="info-box">
            <p><strong>Conclusion from Son Chang:</strong> "There is not a good solution yet."</p>
            <p>
              Discussions are ongoing with the Testing Center (Agent Force testing framework) team, but no clear 
              solution has emerged. This is considered a <strong>liability</strong> for the April design milestone.
            </p>
          </div>

          <h4 className="mt-1">Action Items:</h4>
          <ul>
            <li>Son Chang to ping Testing Center for updates</li>
            <li>Follow up with Near (who was at Friday onsite)</li>
            <li>Document this as a known limitation/risk</li>
          </ul>
        </div>
      </div>

      <div className="card mt-2">
        <div className="card-title">2. Observability for the Observability Agent</div>
        <div className="card-content">
          <h4>The Meta-Problem (Tal Barda):</h4>
          <p>
            "How do we know the Observability Agent is acting correctly, and how do we reproduce issues with it?"
          </p>

          <h4 className="mt-1">Key Insight:</h4>
          <p>
            The testing center is available to <em>customers</em>, but the team doesn't have a testing center for 
            <strong>themselves</strong> to validate the Observability Agent's behavior with action inputs and expected results.
          </p>

          <h4 className="mt-1">Discussion Points:</h4>
          <ul>
            <li><strong>Post-Deployment Observation:</strong> Team hadn't fully considered how to observe the agent after deployment</li>
            <li><strong>Evaluation Framework:</strong> Need to build, test, and observe the Observability Agent itself</li>
            <li><strong>Benchforce:</strong> Tal had spiked on evaluation framework (discussed later in meeting)</li>
          </ul>

          <div className="success-box mt-1">
            <strong>Resolution:</strong> Implemented Benchforce-based evaluation framework with custom metrics 
            (see Evaluation Set section for details)
          </div>
        </div>
      </div>

      <div className="card mt-2">
        <div className="card-title">3. Architectural Decisions: Core vs. Near-Core</div>
        <div className="card-content">
          <h4>Initial Assumption (Brett Johnson):</h4>
          <p>
            "I thought the Observability Agent was just a YAML/JSON file pointing to near-core services where 
            most development would occur."
          </p>

          <h4 className="mt-1">Reality (Tal Barda):</h4>
          <div className="highlight-box">
            <p><strong>Most or all development is on Core:</strong></p>
            <ul>
              <li>Actions are implemented within Core (Flow or Apex)</li>
              <li>Some actions (like Concierge) may call other services</li>
              <li>But many actions (like "update Salesforce record") live only in Core</li>
              <li>Action <em>definitions</em> must live in Core even if they call off-core services</li>
            </ul>
          </div>

          <h4 className="mt-1">Why Use Concierge Agent?</h4>
          <p><strong>Son Chang's Explanation:</strong></p>
          <ul>
            <li><strong>Speed:</strong> Quickest way to get something demoable</li>
            <li><strong>Features:</strong> Concierge already handles ad hoc queries and has notification system</li>
            <li><strong>Overlap:</strong> Significant feature overlap with needs</li>
            <li><strong>Specificity:</strong> Concierge is broad (all analytics), Observability is specific (agent analytics)</li>
          </ul>

          <div className="info-box mt-1">
            <p><strong>Future Direction:</strong></p>
            <p>
              Team may implement own backend for Observability Agent (either in Core or as near-core service), 
              but initial iteration piggybacks on Concierge for velocity.
            </p>
          </div>

          <h4 className="mt-1">Development Speed Discussion:</h4>
          <p><strong>Brett Johnson's Question:</strong> "Isn't developing off-core much faster?"</p>
          <p><strong>Son Chang's Response:</strong> Not necessarily. While Core can be used immediately, onboarding 
          a near-core service requires effort. However, the near-core service creation process has been streamlined.</p>
        </div>
      </div>

      <div className="card mt-2">
        <div className="card-title">4. Concierge Agent Deep Dive</div>
        <div className="card-content">
          <h4>Technical Architecture:</h4>
          <ul>
            <li><strong>Not Built on Agentforce Platform:</strong> One action handles all work, actual implementation is off-core</li>
            <li><strong>Best Context:</strong> Works best within TabNxt app</li>
            <li><strong>Original Intent:</strong> Designed for Tableau pages, understanding page context</li>
          </ul>

          <h4 className="mt-1">Context Understanding:</h4>
          <p><strong>What Gets Passed (Tal Barda):</strong></p>
          <div className="code-block">
{`{
  "analytics_page_type": "dashboard",
  "tab_id": "...",
  "target_entity_type": "dashboard" | "metric",
  "target_entity_state": {
    "filters": {...}
  }
}`}
          </div>

          <h4 className="mt-1">Key Capabilities:</h4>
          <ul>
            <li>Translates natural language to semantic layer queries (SQL)</li>
            <li>Understands page context (dashboards, filters, SDM)</li>
            <li>Generates visualizations via custom LWC</li>
            <li>Uses conversation history for context</li>
          </ul>

          <h4 className="mt-1">Limitations Discussed:</h4>
          <div className="highlight-box">
            <ul>
              <li><strong>Single SDM:</strong> Works with one SDM per session (can't cross multiple)</li>
              <li><strong>No Multi-Query Reasoning:</strong> Can't answer complex "why" questions yet</li>
              <li><strong>Context Injection Issues:</strong> Requires custom code for non-TabNxt pages</li>
              <li><strong>Business Preferences:</strong> Limited to 20 instructions per SDM</li>
            </ul>
          </div>

          <h4 className="mt-1">Addressing Limitations:</h4>
          <p><strong>Son Chang & Tal Barda:</strong></p>
          <ul>
            <li><strong>For Grounding:</strong> Use Business Preferences (SDM-specific instructions)</li>
            <li><strong>For Accuracy:</strong> Show generated SQL for transparency</li>
            <li><strong>For Context:</strong> Custom logic to inject context from non-TabNxt pages</li>
            <li><strong>Future:</strong> Consider Waii.ai integration for better NL2SQL</li>
          </ul>
        </div>
      </div>

      <div className="card mt-2">
        <div className="card-title">5. Context Management & Topic Drift</div>
        <div className="card-content">
          <h4>The Challenge (Brett Johnson):</h4>
          <p>
            "What if a user drifts across topics in a conversation? For example, they ask about Service Agent 
            metrics, then shift to Employee Agent metrics. Does the agent need to switch SDMs?"
          </p>

          <h4 className="mt-1">SDM Hierarchy (Tal Barda):</h4>
          <div className="info-box">
            <p><strong>SDM Structure:</strong></p>
            <ul>
              <li><strong>Foundation SDM:</strong> Base tables and metrics for all agents</li>
              <li><strong>Service Agent SDM:</strong> Extends foundation with service-specific metrics</li>
              <li><strong>Employee Agent SDM:</strong> Extends foundation with employee-specific metrics</li>
              <li><strong>Custom SDMs:</strong> Customer-specific extensions</li>
            </ul>
            <p className="mt-1">
              Definitions (like "deflection rate") may differ across contexts, so using the wrong SDM could 
              provide incorrect answers.
            </p>
          </div>

          <h4 className="mt-1">Proposed Solutions:</h4>
          <ul>
            <li><strong>Entry Point Mapping:</strong> Map SDM based on page context (which agent/type is selected)</li>
            <li><strong>User Override:</strong> Allow users to specify SDM in conversation</li>
            <li><strong>Future:</strong> Agent could detect topic drift and ask for confirmation to switch SDMs</li>
          </ul>

          <h4 className="mt-1">Context Variable Challenge:</h4>
          <div className="highlight-box">
            <p><strong>Technical Issue (Tal Barda):</strong></p>
            <p>
              Agent Graph doesn't support optional context variables. If a variable isn't set, it causes an error. 
              The team wanted to use context variables if sent, but fall back to state variables if not.
            </p>
            <p className="mt-1">
              <strong>Workaround:</strong> Filed feature request with Agent Graph team; using state variables as fallback.
            </p>
          </div>
        </div>
      </div>

      <div className="card mt-2">
        <div className="card-title">6. Evaluation Framework: Benchforce Deep Dive</div>
        <div className="card-content">
          <h4>Presented by Ascander Dost</h4>
          <p>
            Ascander provided a detailed (and challenging) demonstration of setting up the Benchforce evaluation 
            framework, noting significant brittleness in the development stack.
          </p>

          <h4 className="mt-1">Prerequisites:</h4>
          <ul>
            <li><strong>Required Repositories:</strong>
              <ul>
                <li><code>benchforce</code> - Evaluation framework</li>
                <li><code>service-llm-agent</code> - Java planner (session management)</li>
                <li><code>service-agentic-reasoner</code> - Python planner (reasoning engine)</li>
                <li><code>runtime-docker-compose</code> - Utility for running full stack</li>
              </ul>
            </li>
            <li><strong>Required Services:</strong> Docker, Redis, Java/Maven, Python/UV</li>
            <li><strong>Required Credentials:</strong> Soma access, LLM gateway API key, test org credentials</li>
          </ul>

          <h4 className="mt-1">Major Challenges Encountered:</h4>
          <div className="highlight-box">
            <ul>
              <li><strong>Current Status:</strong> System broken for Ascander due to Protobuf migration</li>
              <li><strong>Session Initiation:</strong> 500 error when trying to connect to remote agent</li>
              <li><strong>Version Mismatches:</strong> Core API version and core version misalignments</li>
              <li><strong>Configuration Brittleness:</strong> "What worked yesterday breaks today" due to external changes</li>
              <li><strong>Runtime Docker Compose:</strong> Ascander hasn't successfully gotten it working</li>
            </ul>
          </div>

          <h4 className="mt-1">Setup Process (When Working):</h4>
          <ol>
            <li>Clone all required repositories</li>
            <li>Run <code>make setup</code> in runtime-docker-compose</li>
            <li>Fetch org config using <code>RTC org config</code> utility</li>
            <li>Get JOT token from Salesforce URL manipulation</li>
            <li>Start Redis (often fails first time, succeeds second try)</li>
            <li>Start Java planner with Maven</li>
            <li>Start Python planner in virtual environment</li>
            <li>Test connectivity with chat client</li>
            <li>Run Benchforce test suite</li>
          </ol>

          <h4 className="mt-1">Test Org Details:</h4>
          <p><strong>"Tab Next Org" Configuration:</strong></p>
          <ul>
            <li>Org farm org with Agent Force features enabled</li>
            <li>Session tracing and Tab Next features activated</li>
            <li>STDM and optimizer tables manually set up</li>
            <li>Data streams configured in Data Cloud</li>
            <li>Fields mapped correctly</li>
            <li><strong>Challenge:</strong> Difficult to replicate setup in new orgs</li>
          </ul>

          <h4 className="mt-1">Benchforce Components:</h4>
          <ul>
            <li><strong>Evaluation Data Set:</strong> JSON Lines format in <code>environment/evals</code> folder</li>
            <li><strong>Runtime Config:</strong> Debug mode, agent mode, metric bundles, data set selection</li>
            <li><strong>Agent Configuration:</strong> Org ID, User ID, Planner ID, core settings</li>
          </ul>

          <h4 className="mt-1">Ascander's Assessment:</h4>
          <div className="info-box">
            <p><strong>Time Investment:</strong> Took 2 weeks to get working the first time</p>
            <p><strong>Difficulty:</strong> "Not conceptually hard, but tedious. Every component must be in exact required state."</p>
            <p><strong>Recommendation:</strong> Use runtime-docker-compose when it's stable</p>
            <p><strong>Alternative:</strong> Build custom evaluation framework (simpler for basic needs)</p>
          </div>
        </div>
      </div>

      <div className="card mt-2">
        <div className="card-title">7. Data Set Strategy</div>
        <div className="card-content">
          <h4>Current Synthetic Data (Ascander Dost):</h4>
          <div className="highlight-box">
            <p><strong>Source:</strong> Agent Force Data Generator</p>
            <p><strong>Scenario:</strong> Strive (athleisure company)</p>
            <p><strong>Coverage:</strong> Session data for STDM, service agent interactions</p>
            <p><strong>Limitations:</strong></p>
            <ul>
              <li>Only 2 unique users</li>
              <li>Single support agent</li>
              <li>Limited failure scenarios (no stack traces, complex errors)</li>
              <li>Escalations baked in but not realistic failure patterns</li>
            </ul>
          </div>

          <h4 className="mt-1">Real-World Data Strategy:</h4>
          <p><strong>Recommended Approach (Ascander & Ryan):</strong></p>
          <ul>
            <li><strong>Customer Partnerships:</strong> Partner with willing customers to share anonymized data</li>
            <li><strong>Customer Zero:</strong> Use help.salesforce.com data (but may be pathological user)</li>
            <li><strong>Notebooking Environments:</strong> Airgapped, ephemeral storage for data safety</li>
            <li><strong>Applied Research Team:</strong> Loop in John Emmens' team for data annotation platform</li>
          </ul>

          <h4 className="mt-1">Action Items:</h4>
          <ul>
            <li>Maor Pichadze to organize data set strategy</li>
            <li>Connect with Equinox (potential customer partner)</li>
            <li>Ryan & Maor to meet next day to formulate plan</li>
            <li>Document: How to generate JSON for conversations (Maor to share)</li>
          </ul>

          <h4 className="mt-1">Data Challenges:</h4>
          <div className="info-box">
            <p><strong>Historical Challenge (Ascander):</strong></p>
            <p>
              "Getting real customer data for empirical work at Salesforce has historically been challenging."
            </p>
            <p className="mt-1">
              Need to balance data quality/realism with customer privacy and data security requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="card mt-2">
        <div className="card-title">8. Development Workflow & Team Onboarding</div>
        <div className="card-content">
          <h4>Spindle Team Setup Questions (Angad Nadkarni):</h4>
          <ul>
            <li><strong>Setup Guide:</strong> Tony's guide might take 2-3 days to replicate workspace setup</li>
            <li><strong>Branch Selection:</strong> Use 260 patch branch vs. main line?</li>
            <li><strong>Workflow:</strong> How to update agent graph using workbench?</li>
          </ul>

          <h4 className="mt-1">Recommendations (Vinitha & Son):</h4>
          <div className="highlight-box">
            <p><strong>Use 260 Patch Branch:</strong></p>
            <ul>
              <li>258 is no longer in development</li>
              <li>260 patch is where dependent teams are working</li>
              <li>Changes auto-promoted to main line (occasional conflicts)</li>
              <li>Pushed to customers faster than main branch</li>
              <li>More stable than main for current development</li>
            </ul>
          </div>

          <h4 className="mt-1">Development Environment Options:</h4>
          <p><strong>Discussion with Lu Han:</strong></p>
          <ul>
            <li><strong>Org Farm Org:</strong> Good for navigation and testing functionality</li>
            <li><strong>Local Setup:</strong> Significantly more effort but required for customization</li>
            <li><strong>Recommendation:</strong> Depends on goal (testing vs. development)</li>
          </ul>

          <h4 className="mt-1">Agent Graph Experience (Tal Barda):</h4>
          <div className="success-box">
            <p><strong>Assessment:</strong> Highly collaborative and responsive team</p>
            <ul>
              <li>Successfully debugged parity issues between planners</li>
              <li>Contributed visualization page for agent JSON</li>
              <li>Aware that contributions support many users (may face delays)</li>
              <li>Agent graph itself is off-core (but core component calls it)</li>
            </ul>
          </div>

          <h4 className="mt-1">Platform Usage (Son Chang):</h4>
          <p>
            Preference for using the platform to gain functionalities like tracing and data gathering. 
            Platform team addresses deficiencies, especially bugs or roadmap items.
          </p>
        </div>
      </div>

      <h3 className="mt-2">📋 Key Action Items & Next Steps</h3>

      <div className="grid grid-2 mt-2">
        <div className="card">
          <div className="card-title">Immediate (Week of Jan 13)</div>
          <div className="card-content">
            <ul>
              <li>Tal Barda: Share ST thread with Benchforce documents</li>
              <li>Son Chang: Ping Testing Center about environment bridging</li>
              <li>Ascander: Share tab next org with participants</li>
              <li>Ascander: Fix Benchforce connectivity issues</li>
              <li>Ascander: Forward LLM gateway branch to team</li>
              <li>Vinitha: Share Ascander's recorded demo</li>
              <li>Vinitha: Add Spindlers to old team channel</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Short-term (Next 2 Weeks)</div>
          <div className="card-content">
            <ul>
              <li>Ryan & Maor: Formulate data set strategy</li>
              <li>Tal: Schedule hands-on session in SF</li>
              <li>Ryan: Follow up with spindle engineers on architecture</li>
              <li>Ryan: Reach out to concierge team re: state management</li>
              <li>Maor: Organize data set collection (synthetic + customer)</li>
              <li>Maor: Share conversation JSON generation doc</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="mt-2">💡 Key Takeaways & Decisions</h3>

      <div className="grid grid-3 mt-2">
        <div className="card">
          <div className="card-title">✅ Confirmed Decisions</div>
          <div className="card-content">
            <ul>
              <li>Use Agent Graph for determinism</li>
              <li>Leverage Concierge Agent for Phase 1</li>
              <li>Develop primarily on Core (not near-core)</li>
              <li>Use 260 patch branch for development</li>
              <li>Implement file-based (OOTB) agent</li>
              <li>Start with Service Analytics SDM</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">⚠️ Known Liabilities</div>
          <div className="card-content">
            <ul>
              <li>Production-to-test data bridging unsolved</li>
              <li>Benchforce setup is brittle/complex</li>
              <li>Limited real-world test data available</li>
              <li>Optional context variables not supported</li>
              <li>Single SDM per session limitation</li>
              <li>Development stack brittleness</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">🔮 Future Explorations</div>
          <div className="card-content">
            <ul>
              <li>Own backend for Observability Agent</li>
              <li>Waii.ai integration for NL2SQL</li>
              <li>Multi-agent orchestration (Phase 5)</li>
              <li>Custom evaluation framework</li>
              <li>Cross-SDM query support</li>
              <li>Enhanced context management</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="success-box mt-2">
        <h4>🎯 Meeting Outcomes</h4>
        <p>
          The deep dive session provided critical context for the Spindle team to understand:
        </p>
        <ul>
          <li>Technical architecture and design decisions</li>
          <li>Current challenges and known limitations</li>
          <li>Development workflow and tools (Benchforce, org farm)</li>
          <li>Data strategy for testing and evaluation</li>
          <li>Team dependencies and collaboration channels</li>
          <li>Realistic expectations for development complexity</li>
        </ul>
        <p className="mt-1">
          <strong>Next Step:</strong> Alignment meeting planned for Jan 13 afternoon to discuss "What problems 
          do we need to address before we start building stuff?"
        </p>
      </div>
    </div>
  );
};

export default MeetingNotes;
