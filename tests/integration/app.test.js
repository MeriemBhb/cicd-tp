const request = require("supertest");
const app = require("../../src/server");

describe("GET /hello", () => {
  it("should return Hello world", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world!");
  });

  it("should return Hello world! From Meriem when x-name header is Meriem", async () => {
    const res = await request(app)
      .get("/hello")
      .set("x-name", "Meriem");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world! From Meriem");
  });

  it("should handle special characters in x-name header", async () => {
    const res = await request(app)
      .get("/hello")
      .set("x-name", "Mériem@#$%^&*()");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world! From Mériem@#$%^&*()");
  });

  it("should handle very long names in x-name header", async () => {
    const longName = "A".repeat(1000);
    const res = await request(app)
      .get("/hello")
      .set("x-name", longName);
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe(`Hello world! From ${longName}`);
  });

  it("should handle empty string in x-name header", async () => {
    const res = await request(app)
      .get("/hello")
      .set("x-name", "");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world!");
  });

  it("should reject names with too many characters", async () => {
    const longName = "A".repeat(101);
    const res = await request(app)
      .get("/hello")
      .set("x-name", longName);
    expect(res.statusCode).toBe(400);
  });
});

describe("POST /hello", () => {
  it("should return Hello world", async () => {
    const res = await request(app).post("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world!");
  });

  it("should return Hello world! From Meriem when x-name header is Meriem", async () => {
    const res = await request(app)
      .post("/hello")
      .set("x-name", "Meriem");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world! From Meriem");
  });

  it("should handle special characters in x-name header", async () => {
    const res = await request(app)
      .post("/hello")
      .set("x-name", "Mériem@#$%^&*()");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world! From Mériem@#$%^&*()");
  });

  it("should handle very long names in x-name header", async () => {
    const longName = "A".repeat(1000);
    const res = await request(app)
      .post("/hello")
      .set("x-name", longName);
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe(`Hello world! From ${longName}`);
  });

  it("should handle empty string in x-name header", async () => {
    const res = await request(app)
      .post("/hello")
      .set("x-name", "");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world!");
  });

  it("should reject names with too many characters", async () => {
    const longName = "A".repeat(101);
    const res = await request(app)
      .post("/hello")
      .set("x-name", longName);
    expect(res.statusCode).toBe(400);
  });
});
