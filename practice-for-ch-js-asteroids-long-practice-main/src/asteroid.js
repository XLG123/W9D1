import MovingObject from "./moving-object";
import * as Util from "./util.js";

class Asteroid extends MovingObject {
  static RADIUS = 50;
  static COLOR = "darkbrown";

  constructor(pos) {
    super(pos, Util.randomVec(200), Asteroid.RADIUS, Asteroid.COLOR);
  }
}

export default Asteroid;