import { useState } from 'react';

const Demo = () => {
  const [messages, setMessages] = useState([
    {
      type: 'agent',
      content: '👋 Hello! I\'m the Observability Agent. I can help you analyze your AI agents\' performance, diagnose issues, and identify optimization opportunities.\n\nTry asking me a question like:\n• "What was the escalation rate last week?"\n• "Give me a summary of the service agent"\n• "Why are customers frustrated during password reset?"'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sampleResponses = {
    'what was the escalation rate last week': {
      text: 'The escalation rate last week was **12.4%** (124 escalations out of 1,000 total sessions).\n\n📊 This was slightly lower than the previous week (13.1%), showing a **5.3% improvement**.\n\n💡 Would you like me to break this down by topic to see which areas contributed most to escalations?',
      debug: 'Query: SELECT COUNT(*) FILTER (WHERE escalated = TRUE) * 1.0 / COUNT(*) FROM sessions WHERE timestamp BETWEEN \'2026-01-06\' AND \'2026-01-12\''
    },
    'give me a summary of the service agent': {
      text: '📈 **Service Agent Performance Summary** (Last 30 Days):\n\n**Volume Metrics:**\n• Total Sessions: 15,240\n• Unique Users: 8,450\n• Avg. Sessions per User: 1.8\n\n**Quality Metrics:**\n• Deflection Rate: 68% (10,363 deflected) ✅\n• Escalation Rate: 12% (1,829 escalated) ⚠️\n• Abandonment Rate: 20% (3,048 abandoned)\n\n**User Satisfaction:**\n• Avg. Sentiment Score: 3.8/5 (Positive)\n• Agent Health Score: 82/100\n\n**Top Topics:**\n1. Password Reset (28% of sessions)\n2. Order Status (22%)\n3. Billing Questions (15%)\n\n💡 **Insight:** Performance is strong overall, but escalation rate is slightly above target (10%). Consider investigating password reset and billing topics.',
      debug: 'Queried: Service_Analytics_SDM with filters: date_range=last_30_days, agent_type=service_agent'
    },
    'why are customers frustrated during password reset': {
      text: '🔍 **Root Cause Analysis: Password Reset Frustration**\n\nAnalysis of 5,200 password reset sessions reveals **three main drivers** of frustration:\n\n**1️⃣ OTP Delivery Failures (35% frustration rate)**\n• Issue: Users not receiving verification codes\n• Pattern: Multiple reset attempts (>3)\n• Volume: 900 sessions affected\n• Example: _"I\'ve asked for the code three times, still nothing"_\n\n**2️⃣ Redundant Verification (25% frustration rate)**\n• Issue: Multi-factor flows require repeated login\n• Impact: +40s avg. handling time\n• Volume: 480 sessions affected\n• Example: _"Why do I need to log in twice???"_\n\n**3️⃣ Unclear Instructions (18% frustration rate)**\n• Issue: Users don\'t know where to find verification code\n• Pattern: Loop after "Check your email" message\n• Volume: 320 sessions affected\n• Example: _"Where am I supposed to find this code?"_\n\n✅ **Recommendations:**\n1. Investigate OTP delivery service reliability\n2. Simplify multi-factor authentication flow\n3. Add explicit instructions: "Check your email inbox and spam folder for..."',
      debug: 'Multi-step analysis:\n1. Filtered STDM for topic=password_reset\n2. Calculated frustration_rate from sentiment + escalation tags\n3. Segmented by reset_method, attempt_count, error_type\n4. Retrieved representative transcripts\n5. Generated hypotheses using pattern clustering'
    },
    'compare vip vs standard customers': {
      text: '📊 **Agent Performance: VIP vs. Standard Customers**\n\n**VIP Customers:**\n• Sessions: 5,000\n• Deflection Rate: 75% ⬆️ (+7pp vs. Standard)\n• Escalation Rate: 8.2% ⬇️ (-5pp vs. Standard)\n• Avg. Sentiment: 4.2/5 ⬆️\n• Top Topics: Integration Support, API Questions, Custom Features\n\n**Standard Customers:**\n• Sessions: 10,000\n• Deflection Rate: 68%\n• Escalation Rate: 13.5%\n• Avg. Sentiment: 3.8/5\n• Top Topics: Password Reset, How-To Questions, Billing\n\n**🔍 Key Insights:**\n\n1. **VIP customers have 39% lower escalation rate**\n   • Likely due to simpler, more technical queries\n   • May also receive prioritized handling\n\n2. **Query Complexity Differs**\n   • VIP: Growth-oriented, technical (API, integrations)\n   • Standard: Transactional, self-service (password, how-to)\n\n3. **Satisfaction Variance**\n   • VIP users 11% more satisfied on average\n   • May indicate better alignment of agent capabilities with VIP needs\n\n💡 **Recommendation:** Consider creating specialized flows or knowledge for VIP customer query types to maintain high satisfaction.',
      debug: 'Joined STDM sessions with CRM customer_segment dimension\nAggregated metrics by segment\nCalculated deltas and relative differences'
    },
    'what topics have highest escalation rates': {
      text: '📊 **Top 3 Topics by Escalation Rate** (Last 30 Days):\n\n**1. Billing Disputes** 🔴\n• Escalation Rate: **50%** (900/1,800 sessions)\n• Avg. Sentiment: 2.1/5 (Negative)\n• Common Pattern: Users demand human for refunds\n• Example: _"Your system is charging me twice - get me a human!"_\n\n**2. Password Reset Instructions** 🟡\n• Escalation Rate: **23%** (1,200/5,200 sessions)\n• Avg. Sentiment: 2.8/5 (Mixed)\n• Common Pattern: Multiple failed attempts\n• Example: _"I\'ve reset three times but still can\'t log in..."_\n\n**3. Shipping Address Change** 🟢\n• Escalation Rate: **14%** (600/4,300 sessions)\n• Avg. Sentiment: 3.2/5 (Neutral)\n• Common Pattern: Changes not persisting\n• Example: _"I tried updating my address, but it didn\'t save"_\n\n**📈 Comparison to Baseline:**\n• Average escalation rate across all topics: 12%\n• Billing Disputes are **4.2× higher** than average\n• Password Reset is **1.9× higher** than average\n\n✅ **Next Steps:** Focus optimization efforts on Billing Disputes and Password Reset topics for maximum impact.',
      debug: 'Query: Grouped sessions by topic tag, calculated escalation_rate per topic, ranked by rate DESC, retrieved top 3 with sample transcripts'
    }
  };

  const getResponse = (userInput) => {
    const normalizedInput = userInput.toLowerCase().trim();
    
    // Find matching response
    for (const [key, value] of Object.entries(sampleResponses)) {
      if (normalizedInput.includes(key) || key.includes(normalizedInput.substring(0, 20))) {
        return value;
      }
    }
    
    // Default response
    return {
      text: '🤔 I understand you\'re asking: "' + userInput + '"\n\nIn a production environment, I would:\n1. Parse your query to identify the intent\n2. Determine which data sources to query (SDM, STDM, etc.)\n3. Execute the appropriate queries\n4. Synthesize the results with evidence\n5. Provide visualizations if applicable\n\n💡 **Try one of these sample queries:**\n• "What was the escalation rate last week?"\n• "Give me a summary of the service agent"\n• "Why are customers frustrated during password reset?"\n• "Compare VIP vs standard customers"\n• "What topics have highest escalation rates?"',
      debug: 'Demo mode: No actual data query performed'
    };
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      content: inputValue
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate thinking time
    setTimeout(() => {
      const response = getResponse(inputValue);
      
      // Add agent response
      const agentMessage = {
        type: 'agent',
        content: response.text,
        debug: response.debug
      };
      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSampleQuery = (query) => {
    setInputValue(query);
  };

  return (
    <div className="section">
      <h2>🎮 Interactive Demo</h2>

      <div className="info-box">
        <p>
          <strong>Try out the Observability Agent!</strong> This is a simulated demo with pre-programmed 
          responses based on the meeting notes and documentation. In production, the agent would query 
          real data from your Salesforce org.
        </p>
      </div>

      <div className="demo-container mt-2">
        <div className="chat-window">
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                <div className="message-avatar">
                  {msg.type === 'agent' ? '🤖' : '👤'}
                </div>
                <div className="message-content">
                  <div className="message-text">
                    {msg.content.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                  {msg.debug && (
                    <details className="debug-info">
                      <summary>🔍 Debug Info</summary>
                      <pre>{msg.debug}</pre>
                    </details>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message agent">
                <div className="message-avatar">🤖</div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="input-area">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about your agent's performance..."
              rows="3"
            />
            <button 
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              className="send-button"
            >
              Send 📤
            </button>
          </div>
        </div>

        <div className="sample-queries">
          <h4>💡 Sample Queries</h4>
          <div className="query-buttons">
            <button onClick={() => handleSampleQuery('What was the escalation rate last week?')}>
              📊 Escalation Rate
            </button>
            <button onClick={() => handleSampleQuery('Give me a summary of the service agent')}>
              📈 Agent Summary
            </button>
            <button onClick={() => handleSampleQuery('Why are customers frustrated during password reset?')}>
              🔍 Root Cause Analysis
            </button>
            <button onClick={() => handleSampleQuery('Compare VIP vs standard customers')}>
              👥 Customer Segmentation
            </button>
            <button onClick={() => handleSampleQuery('What topics have highest escalation rates?')}>
              🎯 Top Issues
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .demo-container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .chat-window {
          background: white;
          border: 2px solid #dddbda;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          height: 600px;
        }

        .messages {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .message {
          display: flex;
          gap: 1rem;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .message.user {
          flex-direction: row-reverse;
        }

        .message-avatar {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .message-content {
          flex: 1;
          background: #f3f3f3;
          padding: 1rem;
          border-radius: 8px;
        }

        .message.user .message-content {
          background: #e8f4f8;
        }

        .message.agent .message-content {
          background: #f8f9fa;
        }

        .message-text p {
          margin-bottom: 0.5rem;
        }

        .message-text p:last-child {
          margin-bottom: 0;
        }

        .debug-info {
          margin-top: 1rem;
          padding: 0.75rem;
          background: #16325c;
          color: #ffffff;
          border-radius: 4px;
          font-size: 0.85rem;
        }

        .debug-info summary {
          cursor: pointer;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .debug-info pre {
          margin: 0;
          white-space: pre-wrap;
          font-family: 'Monaco', monospace;
          font-size: 0.8rem;
        }

        .typing-indicator {
          display: flex;
          gap: 0.5rem;
          padding: 0.5rem;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: #0176d3;
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out;
        }

        .typing-indicator span:nth-child(1) {
          animation-delay: -0.32s;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: -0.16s;
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }

        .input-area {
          padding: 1rem;
          border-top: 2px solid #dddbda;
          display: flex;
          gap: 1rem;
        }

        .input-area textarea {
          flex: 1;
          padding: 0.75rem;
          border: 2px solid #dddbda;
          border-radius: 6px;
          font-family: inherit;
          font-size: 1rem;
          resize: none;
        }

        .input-area textarea:focus {
          outline: none;
          border-color: #0176d3;
        }

        .send-button {
          padding: 0.75rem 1.5rem;
          background-color: #0176d3;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .send-button:hover:not(:disabled) {
          background-color: #032d60;
        }

        .send-button:disabled {
          background-color: #dddbda;
          cursor: not-allowed;
        }

        .sample-queries {
          background: white;
          border: 2px solid #dddbda;
          border-radius: 8px;
          padding: 1.5rem;
          height: fit-content;
        }

        .sample-queries h4 {
          margin-bottom: 1rem;
          color: #0176d3;
        }

        .query-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .query-buttons button {
          padding: 1rem;
          background: #f3f3f3;
          border: 2px solid #dddbda;
          border-radius: 6px;
          text-align: left;
          cursor: pointer;
          font-size: 0.95rem;
          transition: all 0.2s;
        }

        .query-buttons button:hover {
          background: #e8f4f8;
          border-color: #0176d3;
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .demo-container {
            grid-template-columns: 1fr;
          }

          .sample-queries {
            order: -1;
          }
        }
      `}</style>
    </div>
  );
};

export default Demo;
