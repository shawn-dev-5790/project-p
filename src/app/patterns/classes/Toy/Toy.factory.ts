import { Toy } from './Toy'

export class ToyFactory {
  id: number = 0
  productionLimit: number = 40
  toys: Toy[] = []

  create(type: string): ToyFactory {
    if (type === 'Monkey') return this.createMonkey()
    if (type === 'Snake') return this.createSnake()
    return this
  }

  // create types
  createMonkey(): ToyFactory {
    const type = 'Monkey'
    const monkeys = this._get_toys_by(type)
    if (!this._is_toys_limited(monkeys)) return this

    const name = [type, this._get_auto_increment_id()].join('_')
    const hasHands = this._get_has_hands(type)
    const price = this._get_random_number_incremented_by(1000)
    const monkey = new Toy(name, hasHands, price)
    monkey.move(monkeys.length, 0)
    this.toys.push(monkey)
    return this
  }
  createSnake(): ToyFactory {
    const type = 'Snake'
    const snakes = this._get_toys_by(type)
    if (!this._is_toys_limited(snakes)) return this

    const name = [type, this._get_auto_increment_id()].join('_')
    const hasHands = this._get_has_hands(type)
    const price = this._get_random_number_incremented_by(1000)
    const snake = new Toy(name, hasHands, price)
    snake.move(0, snakes.length)
    this.toys.push(snake)
    return this
  }

  // helpers
  _get_auto_increment_id() {
    this.id += 1
    return this.id
  }
  _get_random_number_incremented_by(increment: number): number {
    return +[Math.floor(Math.random() * 100) + 1, increment].join('')
  }
  _get_has_hands(type: string): boolean {
    if (type === 'Monkey') return true
    if (type === 'Snake') return false
    return false
  }
  _get_toys_by(type: string): Toy[] {
    return this.toys.filter((toy) => toy.name.includes(type))
  }
  _is_toys_limited(toys: Toy[]): boolean {
    const pass = toys.length < this.productionLimit
    if (!pass) console.log('Production limit reached')
    return pass
  }
}
