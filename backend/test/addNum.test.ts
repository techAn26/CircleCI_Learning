import { addNum } from "../src/calc/addNum";

describe("addNum", () => {
  it("1 + 2 = 3", () => {
    expect(addNum(1, 2)).toBe(3);
  });
});
