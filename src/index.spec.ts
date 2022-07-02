import { assert } from "chai";
import { Board } from "./index.js";

describe("User can", () => {
  const board = new Board();
  const rectA = board.addRect({ x: 10, y: 10, width: 10, height: 10 });
  const rectB = board.addRect({ x: 14, y: 14, width: 10, height: 10 });
  const rectC = board.addRect({ x: 17, y: 17, width: 10, height: 10 });
  it("find rectangles under pointer", () => {
    assert.deepEqual(board.getAllUnderPoint({ x: 15, y: 15 }), [rectA, rectB]);
  });
  it("reorder rectangles", () => {
    board.moveFirstAfterSecond(rectA, rectB);
    assert.deepEqual(board.getAllUnderPoint({ x: 15, y: 15 }), [rectB, rectA]);
  });
  it("undo operation", () => {
    board.undo();
    assert.deepEqual(board.getAllUnderPoint({ x: 18, y: 18 }), [
      rectA,
      rectB,
      rectC,
    ]);
  });
});
