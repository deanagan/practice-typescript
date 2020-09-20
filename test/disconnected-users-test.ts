import { disconnected_users, Pair } from "../src/disconnected-users";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("Disconnected Users functions", () => {
  it("Test 1", () => {
    const net: Pair<string, string>[] = [
      { first: "A", second: "B" },
      { first: "B", second: "C" },
      { first: "C", second: "D" },
    ];
    const lookup = { "A": 10, "B": 20, "C": 30, "D": 40 };
    const source = "A";
    const crushes: string[] = ["C"];
    expect(disconnected_users(net, lookup, source, crushes)).to.be.equal(70);
  });

  it("Test 2", () => {
    const net: Pair<string, string>[] = [
      { first: "A", second: "B" },
      { first: "B", second: "D" },
      { first: "A", second: "C" },
      { first: "C", second: "D" },
    ];
    const lookup = { "A": 10, "B": 0, "C": 0, "D": 40 };
    const source = "A";
    const crushes: string[] = ["B"];
    expect(disconnected_users(net, lookup, source, crushes)).to.be.equal(0);
  });

  it("Test 3", () => {
    const net: Pair<string, string>[] = [
      { first: "A", second: "B" },
      { first: "A", second: "C" },
      { first: "A", second: "D" },
      { first: "A", second: "E" },
      { first: "A", second: "F" },
    ];
    const lookup = { "A": 10, "B": 10, "C": 10, "D": 10, "E": 10, "F": 10 };
    const source = "C";
    const crushes: string[] = ["A"];
    expect(disconnected_users(net, lookup, source, crushes)).to.be.equal(50);
  });

  it("Nobody will get a mesage if node that sends emails is crushed", () => {
    const net: Pair<string, string>[] = [
      { first: "A", second: "B" },
      { first: "B", second: "C" },
      { first: "C", second: "D" },
    ];
    const lookup = { "A": 10, "B": 20, "C": 30, "D": 40 };
    const source = "A";
    const crushes: string[] = ["A"];
    expect(disconnected_users(net, lookup, source, crushes)).to.be.equal(100);
  });
});
