const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ytxnzx",

  e2e: {
    baseUrl: "https://sqlverifier-staging-08050d656f7a.herokuapp.com",
    testIsolation: false,
    taskTimeout: 10000,
    setupNodeEvents(on, config) {},
  },

  viewportWidth: 1920,
  viewportHeight: 1080,
});
