const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ytxnzx",

  e2e: {
    baseUrl: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com",
    testIsolation: false,
    taskTimeout: 10000,
    setupNodeEvents(on, config) {},
  },

  viewportWidth: 1366,
  viewportHeight: 768,
});
