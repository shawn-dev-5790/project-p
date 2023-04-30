export class Motor {
  min: number = 0
  max: number = 280
  speed: number = 0

  accelerator() {
    if (this.speed === this.max) return
    this.speed += 1
  }
  reducer() {
    if (this.speed === this.min) return
    this.speed -= 1
  }
}
