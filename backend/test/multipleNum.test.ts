import { multipleNum } from "../src/calc/multipleNum";

describe("multipleNum", () => {
  it("1 * 2 = 2", () => {
    expect(multipleNum(1, 2)).toBe(2);
  });
});
