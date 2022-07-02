import { assert } from "chai";
import { Board } from "./index.js";

describe("User can", () => {
  const board = new Board();
  const rectA = board.addRect({ x: 10, y: 10, width: 10, height: 10 });
  const rectB = board.addRect({ x: 14, y: 14, width: 10, height: 10 });
  const rectC = board.addRect({ x: 16, y: 16, width: 10, height: 10 });
  const rectD = board.addRect({ x: 17, y: 17, width: 10, height: 10 });
  const rectE = board.addRect({ x: 18, y: 18, width: 10, height: 10 });
  it("find rectangles under pointer", () => {
    assert.deepEqual(board.getAllUnderPoint({ x: 15, y: 15 }), [rectA, rectB]);
  });
  it("reorder rectangles", () => {
    board.moveFirstAfterSecond(rectA, rectB);
    assert.deepEqual(board.getAllUnderPoint({ x: 19, y: 19 }), [
      rectB,
      rectA,
      rectC,
      rectD,
      rectE,
    ]);
    board.moveFirstAfterSecond(rectA, rectD);
    assert.deepEqual(board.getAllUnderPoint({ x: 19, y: 19 }), [
      rectB,
      rectC,
      rectD,
      rectA,
      rectE,
    ]);
    board.moveFirstAfterSecond(rectE, rectC);
    assert.deepEqual(board.getAllUnderPoint({ x: 19, y: 19 }), [
      rectB,
      rectC,
      rectE,
      rectD,
      rectA,
    ]);
  });
  it("undo operation", () => {
    board.undo();
    assert.deepEqual(board.getAllUnderPoint({ x: 19, y: 19 }), [
      rectB,
      rectC,
      rectD,
      rectA,
      rectE,
    ]);
    board.undo();
    assert.deepEqual(board.getAllUnderPoint({ x: 19, y: 19 }), [
      rectB,
      rectA,
      rectC,
      rectD,
      rectE,
    ]);
    board.undo();
    assert.deepEqual(board.getAllUnderPoint({ x: 19, y: 19 }), [
      rectA,
      rectB,
      rectC,
      rectD,
      rectE,
    ]);
    board.undo();
    assert.deepEqual(board.getAllUnderPoint({ x: 19, y: 19 }), [
      rectA,
      rectB,
      rectC,
      rectD,
    ]);
  });
});
