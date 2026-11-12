
import request from "supertest";
import app from "../src/app";

describe("Health endpoint", () => {
  it("should return API status as online", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("Online");
    expect(response.body.message).toBe(
      "API funcionando corretamente"
    );
  });
});
