const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "z4j9wf",
  key: "cbfa8b78-74fa-44d6-99cb-aa18e0044dc4",
  "env": {
    "CYPRESS_RECORD_KEY": "cbfa8b78-74fa-44d6-99cb-aa18e0044dc4"
  },
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    supportFile: false,
  },
})
