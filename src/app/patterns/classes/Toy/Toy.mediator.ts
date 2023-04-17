import { Toy } from './Toy'

export class ToyMediator {
  toys: Toy[] = []

  setToys(toys: Toy[]) {
    this.toys = toys
  }
  notify(sender: any, event: string) {
    if (event === 'sort') {
      const res: Toy[] = []
      const monkeys = this.toys.filter((toy) => toy.name.includes('Monkey'))
      const snakes = this.toys.filter((toy) => toy.name.includes('Snake'))
      this.toys.map((toy, i) => {
        if (monkeys[i]) res.push(monkeys[i])
        if (snakes[i]) res.push(snakes[i])
      })
      res.map((toy, i) => {
        toy.move(i % 20, Math.floor(i / 20))
      })
      return res
    }
  }
}
