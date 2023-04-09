import { describe, it, assert } from 'vitest'
import { ToyFactory } from '../src/toy_factory_system/ToyFactory'

describe('#장난감 공장', () => {
  it('모든 장난감은 처음 생산될 때 가격은 1000원 단위로 랜덤하게 결정됩니다.', () => {
    const factory = new ToyFactory()
    factory.createToy('snake')
    factory.snakes.map((snake) => assert.ok(snake.price % 1000 > 0))
    factory.createToy('monkey')
    factory.monkeys.map((monkey) => assert.ok(monkey.price % 1000 > 0))
  })

  it('& 모든 장난감은 처음 생성될 때 이름을 지정할 수 있습니다.', () => {
    const factory = new ToyFactory()
    factory.createToy('snake')
    factory.snakes.map((snake) => assert.ok(snake.name !== 'unnamed'))
    factory.createToy('monkey')
    factory.monkeys.map((monkey) => assert.ok(monkey.name !== 'unnamed'))
  })

  it('모든 장난감은 팔이 있으면 손을 흔들 수 있습니다. & A 타입은(Monkey) 는 팔이 있고 손을 흔들 수 있습니다.', () => {
    const factory = new ToyFactory()
    factory.createToy('monkey')
    factory.monkeys.map((monkey) => {
      assert.ok(monkey.parts.includes('hands'))
      assert.deepEqual(monkey.waveHands(), { action: 'wave hands' })
    })
  })

  it('모든 장난감은 원하는 위치로 이동할 수 있습니다. & 모든 장난감은 자신의 위치를 알고 x,y 좌표로 출력할 수 있습니다.', () => {
    const factory = new ToyFactory()
    factory.createToy('snake')
    factory.snakes.map((snake) => {
      snake.moveTo(10, 10)
      assert.deepEqual(snake.printPosition(), { x: 10, y: 10 })
    })
    factory.createToy('monkey')
    factory.monkeys.map((monkey) => {
      monkey.moveTo(20, 10)
      assert.deepEqual(monkey.printPosition(), { x: 20, y: 10 })
    })
  })

  it('모든 장난감은 각자의 가격을 알고 출력할 수 있습니다 & 자신의 가격을 변경시킬 수 있습니다.', () => {
    const factory = new ToyFactory()
    factory.createToy('snake')
    factory.snakes.map((snake) => {
      snake.updatePrice(2000)
      assert.deepEqual(snake.printPrice(), { price: 2000 })
    })
    factory.createToy('monkey')
    factory.monkeys.map((monkey) => {
      monkey.updatePrice(3000)
      assert.deepEqual(monkey.printPrice(), { price: 3000 })
    })
  })
  it('A 타입은(Monkey) 첫 A타입 인형이 생산될 때 좌표는 (1, 0) 이며, 하나가 생산될 때마다 x값이 1씩 올라갑니다. (1,0) - (2,0) - (3,0) ..', () => {
    const factory = new ToyFactory()
    factory.createToy('monkey')
    factory.createToy('monkey')
    factory.createToy('monkey')
    factory.monkeys.map((monkey, i) => {
      assert.deepEqual(monkey.printPosition(), { x: i + 1, y: 0 })
    })
  })
  it('B 타입은(Snake) 첫 B타입 인형이 생산될 때 좌표는 (0, 1) 이며, 하나가 생산될 때마다 y값이 1씩 올라갑니다. (0, 1) - (0, 2) - (0, 3) ..', () => {
    const factory = new ToyFactory()
    factory.createToy('snake')
    factory.createToy('snake')
    factory.createToy('snake')
    factory.snakes.map((snake, i) => {
      assert.deepEqual(snake.printPosition(), { x: 0, y: i + 1 })
    })
  })
})
