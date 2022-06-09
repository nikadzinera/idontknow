import { Weather } from "../weather/weather";
import { Vector2D } from "../utils/vector";
import { Environemnt } from "environment/environment";
import "p5";

export class Hero {
  public position: Vector2D;
  private sprite;

  constructor(x: number, y: number) {
    this.position = new Vector2D(x, y);
    this.sprite = loadImage("data/catto.sprite.gif");
  }
  public move(speed: Vector2D) {
    //const speed = this.handleKeyDown();
    this.position = this.position.add(speed);
    if (this.position.x > Environemnt.worldSizeX) {
      this.position.x = 0;
    }
    if (this.position.x < 0) {
      this.position.x = Environemnt.worldSizeX;
    }
  }

  public jump() {}

  public pickUp() {}

  public update(weather: Weather) {
    const speed = this.handleKeyDown();
    // this.move(speed);
    return speed;
  }
  private handleKeyDown() {
    if (keyIsDown(LEFT_ARROW)) {
      return new Vector2D(-10, 0);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      return new Vector2D(10, 0);
    }
    return new Vector2D(0, 0);
  }
  public show() {
    image(this.sprite, this.position.x, this.position.y - 20, 100, 50);
  }
}
