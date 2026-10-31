// tests/collector.js
// Test suite collector and registry for E2E tests

class TestCollector {
  constructor() {
    this.tiers = {
      'Tier 1: Feature Coverage': [],
      'Tier 2: Boundary & Corner Cases': [],
      'Tier 3: Cross-Feature Combinations': [],
      'Tier 4: Real-World Scenarios': [],
      'Tier 5: Adversarial Hardening': []
    };
    this.currentTier = 'Tier 1: Feature Coverage';
    this.currentSuite = 'General';
  }

  setTier(tierName) {
    if (!this.tiers[tierName]) {
      this.tiers[tierName] = [];
    }
    this.currentTier = tierName;
  }

  suite(suiteName, suiteFn) {
    const prevSuite = this.currentSuite;
    this.currentSuite = suiteName;
    const suiteObj = {
      name: suiteName,
      tier: this.currentTier,
      tests: []
    };
    this.tiers[this.currentTier].push(suiteObj);

    const test = (arg1, arg2, arg3) => {
      const name = typeof arg3 === 'function' ? arg2 : arg1;
      const fn = typeof arg3 === 'function' ? arg3 : arg2;
      suiteObj.tests.push({ name, fn });
    };

    suiteFn(test);
    this.currentSuite = prevSuite;
  }
}

export const collector = new TestCollector();
