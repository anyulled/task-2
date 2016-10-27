exports.config = {
  specs: ['test/index.spec.js'],
  capabilities: {
      "browserName": "chrome"
  },
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  onPrepare: function() {
    browser.ignoreSynchronization = true;
  }
};