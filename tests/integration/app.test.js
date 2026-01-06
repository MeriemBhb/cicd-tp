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
});
