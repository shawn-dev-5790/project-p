export class Brake {
  applied: boolean = false

  apply() {
    this.applied = true
  }
  release() {
    this.applied = false
  }
}
