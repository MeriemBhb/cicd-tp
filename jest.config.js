const os = require("node:os");

module.exports = {
  testEnvironment: "allure-jest/node",

  testEnvironmentOptions: {
    resultsDir: "allure-results",

    links: {
      issue: {
        nameTemplate: "Issue #%s",
        urlTemplate: "https://github.com/MeriemBhb/cicd-tp/issues/%s",
      },
      tms: {
        nameTemplate: "TMS #%s",
        urlTemplate: "https://tms.example.com/%s",
      },
    },

    environmentInfo: {
      os_platform: os.platform(),
      os_release: os.release(),
      os_version: os.version?.() ?? "unknown", // os.version() existe sur Node récent, mais on sécurise
      node_version: process.version,
    },
  },

  testMatch: ["**/tests/**/*.test.js"],
};
