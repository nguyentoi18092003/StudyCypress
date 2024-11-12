const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
    projectId:"sdetpro",
    specPattern:"./cypress/tests/*/*",
    reporter:"mochawesome",
    baseUrl:"https://www.demoblaze.com/",
    screenshotOnRunFailure: true,
    screenshotsFolder: "./screenshots"
  },
  defaultCommandTimeout:10000

});
