# 🧪 Evaluation Set Guide

## Overview

The **Evaluation Set** section provides a comprehensive test suite for validating the Observability Agent's accuracy, completeness, and reliability across different query types and complexity levels.

## 🎯 What's Included

### 1. Test Query Categories (8 Categories, 40+ Queries)

#### 📚 Data Literacy (Definitions)
- **Priority:** High | **Phase:** Phase 1 | **Difficulty:** Simple
- Focus: Metric definitions and calculations
- Example: "How do you define Deflection Rate?"
- Queries: 4 test cases

#### 📊 Exploratory Analysis (Summary Questions)
- **Priority:** High | **Phase:** Phase 1 | **Difficulty:** Medium
- Focus: High-level performance summaries
- Example: "Give me a summary of the service agent"
- Queries: 3 test cases

#### ⏱️ Time-Based & Trend Queries
- **Priority:** Medium | **Phase:** Phase 2 | **Difficulty:** Medium
- Focus: Trend analysis and time comparisons
- Example: "Show me the 90-day trend for Total Sessions"
- Queries: 3 test cases

#### 🔍 Diagnostic (Metric-driven Questions)
- **Priority:** High | **Phase:** Phase 2 | **Difficulty:** Complex
- Focus: Root cause analysis and problem diagnosis
- Example: "Why did escalation rate spike by 15%?"
- Queries: 3 test cases

#### ✅ Validation (Change-driven Questions)
- **Priority:** High | **Phase:** Phase 2 | **Difficulty:** Medium-Complex
- Focus: Verifying changes and comparing versions
- Example: "Did the new prompt reduce conversation loops?"
- Queries: 3 test cases

#### 📐 Basic Segmentation (SDM-level)
- **Priority:** Medium | **Phase:** Phase 1 | **Difficulty:** Simple-Medium
- Focus: Filtering and grouping by dimensions
- Example: "Compare Mobile vs. Web channel performance"
- Queries: 3 test cases

#### 💼 Business Intelligence (CRM Dimensions)
- **Priority:** Medium | **Phase:** Phase 3 | **Difficulty:** Medium-Complex
- Focus: Customer segmentation and business analysis
- Example: "Compare VIP vs. Standard customers"
- Queries: 3 test cases

#### 🔬 Explainability (Evidence-based)
- **Priority:** High | **Phase:** Phase 2 | **Difficulty:** Complex
- Focus: Providing evidence and examples
- Example: "Show conversations where resolution was 'yes' but customer was unhappy"
- Queries: 3 test cases

## 📏 Evaluation Metrics

Each query is evaluated using one or more of these metrics:

### Core Metrics
- **Accuracy** - LLM-as-judge comparison with expected output
- **Groundedness** - Answer supported by actual data
- **Coherence** - Well-structured, clear response
- **Completeness** - All required information provided
- **Turn Efficiency** - Number of turns to resolution
- **Latency** - Response time in milliseconds

### Specialized Metrics
- **Root Cause Accuracy** - Correct identification of underlying issues
- **Evidence Quality** - Relevance and usefulness of examples
- **Pattern Discovery** - Ability to identify common patterns
- **Insight Quality** - Depth and actionability of insights
- **Fair Comparison** - Balanced comparisons across segments

## 🗂️ Test Data Format

### JSON Lines Format
```json
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
```

### With Evidence Requirements
```json
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
}
```

## 🎯 Success Criteria

### Phase 1 Targets (Current)
- ✅ **Accuracy:** ≥85% for simple queries
- ✅ **Groundedness:** ≥90% (must cite SDM)
- ✅ **Coherence:** ≥90%
- ✅ **Turn Efficiency:** ≤2 turns for simple queries
- ✅ **Latency:** <3s for metric lookups
- ✅ **Guardrails:** Correctly reject out-of-scope queries

### Phase 2 Targets (Customer Pilot)
- 🎯 **Accuracy:** ≥80% for diagnostic queries
- 🎯 **Evidence Quality:** ≥85% (relevant examples)
- 🎯 **Root Cause:** ≥70% correct identification
- 🎯 **Turn Efficiency:** ≤3 turns for complex queries
- 🎯 **Latency:** <10s for multi-step analysis
- 🎯 **Completeness:** ≥90%

## 🗄️ Test Data Sets

### Synthetic Data
**Source:** Agent Force Data Generator  
**Scenario:** Strive (Athleisure company)

**Current Coverage:**
- Session data for STDM data model
- Service agent interactions
- Common support scenarios
- Escalation and deflection cases

**Limitations:**
- Only 2 unique users
- Single support agent
- Limited failure scenarios
- No stack traces or complex errors

### Real-World Data Strategy
**Preferred Sources:**
1. **Customer Partnerships** - Anonymized production data
2. **Customer Zero** - help.salesforce.com data
3. **Internal Testing** - Pilot org data

**Benefits:**
- Real failure patterns
- Diverse user behaviors
- Production-scale volume
- Actual edge cases

**Data Safety:**
- Notebooking environments (airgapped)
- Ephemeral storage
- Data anonymization protocols

## 🔄 Evaluation Workflow

### Using Benchforce

1. **Prepare Test Data**
   - Create/update JSON Lines file with test cases
   - Organize by category and difficulty
   - Define expected outputs and metrics

2. **Configure Environment**
   - Set org configuration (IDs, credentials)
   - Configure LLM gateway keys
   - Specify agent version to test

3. **Start Services**
   - Redis (caching)
   - Java planner (session management)
   - Python planner (reasoning engine)

4. **Run Benchforce**
   ```bash
   python run.py --config eval_config.json --data eval_data.jsonl
   ```

5. **Simulate Sessions**
   - Event-driven simulation of each test case
   - Captures full conversation flow
   - Records all actions and responses

6. **Evaluate Results**
   - Run all configured metrics
   - LLM-as-judge evaluations
   - Custom metric calculations

7. **Generate Report**
   - Dashboard with pass/fail rates
   - Detailed failure analysis
   - Metric breakdowns

8. **Iterate**
   - Fix identified issues
   - Update prompts or logic
   - Re-run tests to validate

## 📊 Sample Evaluation Results

```json
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
      "issue": "CRM dimension not joined (Phase 3 feature)",
      "category": "business_intelligence",
      "action": "Expected in Phase 3"
    }
  ]
}
```

## 🎓 How to Use This Section

### For QA Engineers
1. Navigate to the **Evaluation Set** tab
2. Click on each category to expand test cases
3. Review expected outputs and metrics
4. Use queries as templates for Benchforce tests
5. Add new test cases following the format

### For Product Managers
1. Understand what queries are being tested
2. Review success criteria for each phase
3. Validate that test cases cover key JTBDs
4. Prioritize coverage for high-priority use cases

### For Data Scientists
1. Study evaluation metrics and calculations
2. Review test data set composition
3. Analyze failure patterns
4. Design custom metrics for specific needs

### For Developers
1. Reference expected actions for each query type
2. Understand required parameters
3. Debug failures using detailed test cases
4. Validate fixes against test suite

## 💡 Best Practices

### Writing Test Cases
- ✅ Be specific about expected outputs
- ✅ Include all required elements
- ✅ Specify relevant evaluation metrics
- ✅ Provide sufficient context
- ✅ Cover edge cases and failure modes

### Running Evaluations
- 🔄 Run full suite before each release
- 🔄 Test on multiple data sets (synthetic + real)
- 🔄 Track metrics over time
- 🔄 Document regression patterns
- 🔄 Share results with team

### Iterating on Quality
- 🎯 Start with high-priority categories
- 🎯 Fix failures systematically
- 🎯 Update tests as features evolve
- 🎯 Add new tests for discovered issues
- 🎯 Maintain minimum success thresholds

## 🔗 Related Resources

- **Benchforce Documentation:** [Internal Link]
- **Test Data Generator:** Agent Force Data Generator
- **Evaluation Metrics Guide:** See Technical Details section
- **Sample Test Files:** In `/evaluation/` directory

## 📞 Support

- **Slack:** #observability-agent-workgroup
- **Evaluation Questions:** Contact Ascander Dost
- **Benchforce Issues:** #benchforce-support

---

**Access the Evaluation Set section at:** http://localhost:5173/ → Navigate to 🧪 Evaluation Set
