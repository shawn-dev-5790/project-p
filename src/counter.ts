import { ToyMediator } from './toy_factory_system/Mediator'
import { ToyFactory } from './toy_factory_system/ToyFactory'

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)

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

  mediator.notify('wave')
  mediator.notify('mix')

  console.log(factory)
  console.log(mediator)
}
