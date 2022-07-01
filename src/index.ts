export class Point {
  x = 0;
  y = 0;
}

export class Rect {
  x = 0;
  y = 0;
  width = 10;
  height = 10;
}

export class Board {
  addRect(rect: Rect): Rect {
    return rect;
  }

  getAllUnderPoint(point: Point): Rect[] {
    return [];
  }

  moveFirstAfterSecond(first: Rect, second: Rect): void {}

  undo(): void {}
}
