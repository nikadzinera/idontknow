import "p5";
import { Environemnt } from "environment/environment";
import { WeatherProvider } from "weather/weatherProvider";
import { Hero } from "hero/hero";
import { Vector2D } from "utils/vector";
let hero: Hero;
let environment: Environemnt;
const weatherProvider = new WeatherProvider();

// obstacles
function setup() {
  frameRate(10);
  createCanvas(Environemnt.worldSizeX, Environemnt.worldSizeY);
  hero = new Hero(Environemnt.worldSizeX / 2, Environemnt.worldSizeY * 0.9);
  environment = new Environemnt(hero);
}

function draw() {
  background(200);
  const currentWeather = weatherProvider.getCurrentWeather();
  environment.update(currentWeather);
  environment.draw();
}

// It will be explained later.
export { setup, draw };
