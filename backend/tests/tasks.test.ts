import request from "supertest";
import app from "../src/app";
import { resetTasks } from "../src/routes/task.routes";

describe("Tasks endpoint", () => {
    beforeEach(() => {
        resetTasks();
    });

  it("should return a list of tasks", async () => {
    const response = await request(app).get("/tasks");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

  });

      it("should create a new task", async () => {
  const response = await request(app)
    .post("/tasks")
    .send({
      title: "Prepare REC'n'Play workshop"
    });

  expect(response.status).toBe(201);
  expect(response.body).toHaveProperty("id");
  expect(response.body.title).toBe(
    "Prepare REC'n'Play workshop"
  );
  expect(response.body.completed).toBe(false);
});
});