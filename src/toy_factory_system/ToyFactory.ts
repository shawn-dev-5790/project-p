import { MonkeyToy, SnakeToy } from './Toy'

export class ToyFactory {
  monkeys: MonkeyToy[] = []
  snakes: SnakeToy[] = []

  createToy(type: 'snake' | 'monkey') {
    if (type === 'snake') return this.createSnakeToy()
    if (type === 'monkey') return this.createMonkeyToy()
  }
  createSnakeToy() {
    const seq = this.snakes.length + 1
    const snake = new SnakeToy({ name: `Snake-M-${seq}` })
    snake.updatePrice(this.generateRandomPriceBy(1000))
    snake.moveTo(0, seq)
    this.snakes.push(snake)
  }
  createMonkeyToy() {
    const seq = this.monkeys.length + 1
    const monkey = new MonkeyToy({ name: `Monkey-M-${seq}` })
    monkey.updatePrice(this.generateRandomPriceBy(1000))
    monkey.moveTo(seq, 0)
    this.monkeys.push(monkey)
  }
  generateRandomPriceBy(by: number) {
    const res = Math.floor(Math.random() * 1000) + 1
    return res * by
  }
}

/**

        
## Mediator Pattern

**목표** → 모든 장난감에게 명령을 내릴 수 있습니다.

**요구사항**

- `손흔들기` 팔이 있는 장난감에게 손을 흔들게 할 수 있습니다.
- `정렬하기` (0, 0) 부터 장난감들을 A-B-A-B..의 순서대로, 여러줄에 걸쳐 정렬합니다.

## observer pattern

**목표** → 장난감은 점원을 구독하여 특정 상황이 되었을 때 특정 함수를 실행할 수 있습니다. 

**요구사항**

- `할인 이벤트` 점원이 할인 이벤트를 시행하면, 모든 장난감은 1000원 이상일 때 자신의 가격을 10%씩 내립니다.
- `장난감 위치 찾기` 점원이 장난감의 위치를 찾으려고 하면, 모든 장난감은 자신의 이름과 함께 좌표를 출력합니다.
 */
