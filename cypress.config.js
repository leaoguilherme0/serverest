const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', cucumber());
      return config;
    },
    video: true,
    videosFolder: "cypress/evidences/videos",
    screenshotsFolder: "cypress/evidences/screenshots",
    specPattern: [
      'cypress/e2e/cucumber_tests/*.feature',
      'cypress/e2e/*.cy.js',
      'cypress/e2e/backend-tests/*.spec.js'
    ],
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/report/mochawesome-report",
      overwrite: false, 
      html: true,       
      json: true,       
      timestamp: "mm-dd-yyyy_HH-MM" 
    }
  },
});
