import { MonkeyToy, SnakeToy } from './Toy'

export class ToyMediator {
  toys: Array<SnakeToy | MonkeyToy> = []

  constructor(toys: Array<SnakeToy | MonkeyToy>) {
    this.toys = toys
  }

  notify(evt: 'wave' | 'mix') {
    if (evt === 'wave') return this.wave()
    if (evt === 'mix') return this.mix()
  }

  wave() {
    console.log('notify - do wave!')
    this.toys.map((toy) => {
      if (toy instanceof MonkeyToy) {
        console.log({ 'monkey can wave ! ': toy.name })
        toy.waveHands()
      }
    })
  }
  mix() {
    console.log('notify - do mix!')
    const snakes = this.toys.filter((toy) => toy instanceof SnakeToy)
    const monkeys = this.toys.filter((toy) => toy instanceof MonkeyToy)

    const mixedToys: Array<SnakeToy | MonkeyToy> = []

    this.toys.map((toy, i) => {
      if (snakes[i]) mixedToys.push(snakes[i])
      if (monkeys[i]) mixedToys.push(monkeys[i])
    })

    mixedToys.map((toy, i) => {
      toy.moveTo(i + 1, 0)
    })

    this.toys = mixedToys
  }
}
