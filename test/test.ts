import * as assert from "assert"
import * as express from "express"
import * as simple from "simple-mock"

import * as handlers from "../src/handlers"


function noop(): void { }

console.error = noop;
console.info = noop;
console.warn = noop;

const mockRequest: express.Request = {} as express.Request;
const mockResponse: express.Response = {} as express.Response;

beforeEach("setup mock response object", function () {
  simple.mock(mockResponse, "setHeader");
  simple.mock(mockResponse, "json");
})

afterEach("teardown mock response object", function () {
  simple.restore();
})

describe("handlers", function () {
  describe("index", function () {
    it("GET of index should send 200 response", function () {
      handlers.index(mockRequest, mockResponse);

      assert.equal(mockResponse.json.callCount, 1);
      assert.equal(mockResponse.setHeader.lastCall.args[1], "application/json");
      assert.deepEqual(
        mockResponse.json.lastCall.arg,
        { status: "OK", message: "Hello World" }
      );
    })
  })
})
