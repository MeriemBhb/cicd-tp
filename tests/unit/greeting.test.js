const { getGreeting } = require("../../src/greeting");

describe("getGreeting", () => {
  it("returns the hello world message", () => {
    expect(getGreeting()).toBe("Hello world!");
  });

  it("returns the hello world message from Meriem", () => {
    expect(getGreeting("Meriem")).toBe("Hello world! From Meriem");
  });
});
