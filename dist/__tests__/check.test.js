"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../app");
(0, mocha_1.describe)("Test health check", () => {
    (0, mocha_1.it)("should request ping and respond pong", async () => {
        const response = await (0, supertest_1.default)(app_1.app)
            .get('/ping')
            .expect(200);
        (0, chai_1.expect)(response.text).to.be.equal('pong\n');
    });
});
