const axios = require("axios");
const app = require("../../src/server");
let server;
let baseURL;

beforeAll((done) => {
  server = app.listen(0, () => {
    const { port } = server.address();
    baseURL = `http://127.0.0.1:${port}`;
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe("E2E GET /hello", () => {
  it("responds with Hello world", async () => {
    const res = await axios.get(`${baseURL}/hello`);
    expect(res.status).toBe(200);
    expect(res.data).toBe("Hello world!");
  });

  it("responds with Hello world! From Meriem when x-name header is Meriem", async () => {
    const res = await axios.get(`${baseURL}/hello`, {
      headers: {
        "x-name": "Meriem"
      }
    });
    // Ajoute un test pour l'endpoint GET /hello avec header x-name qui contient "Meriem", doit retourner "Hello world! From Meriem". AI!
    expect(res.status).toBe(200);
    expect(res.data).toBe("Hello world! From Meriem");
  });
});
