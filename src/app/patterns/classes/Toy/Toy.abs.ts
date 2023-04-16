export abstract class AbsToy {
  abstract name: string
  abstract hasHand: boolean
  abstract price: number
  abstract x: number
  abstract y: number
  abstract wave(): string
  abstract move(x: number, y: number): [number, number]
  abstract setPrice(price: number): number
}
