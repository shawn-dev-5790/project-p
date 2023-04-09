import { ToyMediator } from './toy_factory_system/Mediator'
import { MonkeyToy, SnakeToy } from './toy_factory_system/Toy'
import { ToyFactory } from './toy_factory_system/ToyFactory'

export function setupCounter(element: HTMLButtonElement) {
  // let counter = 0
  // const setCounter = (count: number) => {
  //   counter = count
  //   element.innerHTML = `count is ${counter}`
  // }
  // element.addEventListener('click', () => setCounter(counter + 1))
  // setCounter(0)

  // test

  const factory = new ToyFactory()

  factory.createToy('monkey')
  factory.createToy('monkey')
  factory.createToy('monkey')
  factory.createToy('monkey')

  factory.createToy('snake')
  factory.createToy('snake')
  factory.createToy('snake')
  factory.createToy('snake')
  factory.createToy('snake')

  const mediator = new ToyMediator([...factory.monkeys, ...factory.snakes])

  // mediator.notify('wave')
  // mediator.notify('mix')

  console.log(factory)
  console.log(mediator)

  // render
  const _grid = document.querySelector('.grid')
  console.log(_grid)

  const _btnMix = document
    .querySelector('#btnMix')
    ?.addEventListener('click', () => {
      mediator.notify('mix')
      const toys = Array.from(document.querySelectorAll('[class^="toy_"]'))
      toys.map((toy: any, i) => {
        const target: any = mediator.toys.find(({ name }) => name === toy.id)
        toy.style.top = target.y * 50 + 'px'
        toy.style.left = target.x * 50 + 'px'
      })
    })
  const _btnWave = document
    .querySelector('#btnWave')
    ?.addEventListener('click', () => {
      mediator.notify('wave')
    })

  const render = () => {
    mediator.toys.map((toy) => {
      const _toy = document.createElement('div')
      _toy.style.top = toy.y * 50 + 'px'
      _toy.style.left = toy.x * 50 + 'px'
      if (toy instanceof MonkeyToy) _toy.setAttribute('class', 'toy_monkey')
      if (toy instanceof SnakeToy) _toy.setAttribute('class', 'toy_snake')
      _toy.setAttribute('id', toy.name)
      _grid?.append(_toy)
    })
  }

  render()
}
