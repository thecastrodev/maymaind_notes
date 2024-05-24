import { describe, it } from "mocha";
import { expect } from "chai";
import supertest from "supertest";
import { app } from "../app";

describe("Test health check", () => {
  it("should request ping and respond pong", async () => {
    const response = await supertest(app)
    .get('/ping')
    .expect(200)

    expect(response.text).to.be.equal('pong\n');
  })
})