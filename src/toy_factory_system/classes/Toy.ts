abstract class AbsToy {
  name: string
  price: number = 1000
  position: [x: number, y: number] = [0, 0]
  parts: string[] = []
  constructor(
    name?: string,
    price?: number,
    position?: [number, number],
    parts?: string[]
  ) {
    this.name = name || 'unnamed'
    this.price = price || 1000
    this.position = position || [0, 0]
    this.parts = parts || []
  }
  abstract moveTo(x: number, y: number): [x: number, y: number]
  abstract updatePrice(price: number): number
  abstract printPrice(): number
}

export class SnakeToy implements AbsToy {
  name: string
  price: number
  position: [x: number, y: number]
  parts: string[]
  moveTo(x: number, y: number): [x: number, y: number] {
    throw new Error('Method not implemented.')
  }
  updatePrice(price: number): number {
    throw new Error('Method not implemented.')
  }
  printPrice(): number {
    throw new Error('Method not implemented.')
  }
}
export class MonkeyToy {}
