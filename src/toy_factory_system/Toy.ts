export interface IToy {
  name: string
  price: number
  x: number
  y: number
}

export class Toy implements IToy {
  name: string
  price: number
  x: number
  y: number

  constructor(data: Partial<IToy>) {
    this.name = data.name || 'unnamed'
    this.price = data.price || 1000
    this.x = data.x || 0
    this.y = data.y || 0
  }

  printPrice() {
    console.log({ price: this.price })
    return { price: this.price }
  }
  printPosition() {
    console.log({ x: this.x, y: this.y })
    return { x: this.x, y: this.y }
  }
  updatePrice(price: number) {
    this.price = price
  }
  moveTo(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

export class SnakeToy extends Toy {
  parts: string[] = ['head', 'body', 'tail']
}
export class MonkeyToy extends Toy {
  parts: string[] = ['head', 'body', 'tail', 'hands', 'legs']
  waveHands() {
    console.log({ action: 'wave hands' })
    return { action: 'wave hands' }
  }
}
