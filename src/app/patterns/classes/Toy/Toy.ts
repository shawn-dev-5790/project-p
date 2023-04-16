import { AbsToy } from './Toy.abs'

export class Toy implements AbsToy {
  name: string
  hasHand: boolean
  price: number
  x: number = 0
  y: number = 0
  constructor(name: string, hasHand: boolean, price: number) {
    this.name = name
    this.hasHand = hasHand
    this.price = price
  }
  wave(): string {
    return this.hasHand ? 'wave' : 'can not wave with out hands.'
  }
  move(x: number, y: number): [number, number] {
    this.x = x
    this.y = y
    return [this.x, this.y]
  }
  setPrice(price: number): number {
    this.price = price
    return this.price
  }
}
