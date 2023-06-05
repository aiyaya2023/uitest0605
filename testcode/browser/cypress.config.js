const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "x3jbxv",
  key: "943b8917-2586-41c7-a944-9676c46248f5",
  "env": {
    "CYPRESS_RECORD_KEY": "943b8917-2586-41c7-a944-9676c46248f5"
  },
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    supportFile: false,
  },
})
