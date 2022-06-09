import { Vector2D } from "utils/vector";

export class Obstacle {
  private position: Vector2D;
  constructor(
    x: number,
    y: number,
    public sizeX: number,
    public sizeY: number
  ) {
    this.position = new Vector2D(x, y);
  }
  public draw() {
    fill("white");
    rect(this.position.x, this.position.y, this.sizeX, this.sizeY);
  }
  update(heroSpeed: Vector2D) {
    this.position = this.position.add(heroSpeed.reverse());
  }
}
