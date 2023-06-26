class MovingObject {
  constructor(pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  }

  draw(ctx) {
    ctx.clearRect(0, 0, 800, 600);
    ctx.beginPath();
    ctx.arc(...this.pos, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeColor = this.color;
    ctx.stroke();
  }

  move(ctx) {
    const [x, y] = this.pos;
    this.pos = [x + this.vel, y + this.vel];

    this.draw(ctx);
  }
}

export default MovingObject;
