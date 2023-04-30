export class Steering {
  min: number = -90
  max: number = 90
  direction = 0
  turnRight() {
    if (this.direction === this.max) return
    this.direction += 15
  }
  turnLeft() {
    if (this.direction === this.min) return
    this.direction -= 15
  }
}
