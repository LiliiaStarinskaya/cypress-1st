const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ytxnzx",

  e2e: {
    baseUrl: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com",
    setupNodeEvents(on, config) {},
  },

  // user: {
  //   username: "testUser",
  //   email: "test@example.com",
  //   password: "StrongPassword123!@#",
  // },
});
