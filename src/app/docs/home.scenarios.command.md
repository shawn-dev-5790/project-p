# [4. Command pattern](/patterns/command)

## 커맨드 패턴을 사용하는 이유

요청을 발신자와 수신자로 분리해야 하는 상황에서 유용합니다.

요청을 캡슐화 할 수 있기 때문에, 발신자나 수신자가 처리방식을 알지 못한다 하여도, 요청을 전달, 저장, 실행 할 수 있습니다.

커멘드 패턴을 사용하면 다음과 같은 이점이 있습니다.

- 유연성: 커멘드 패턴을 사용하면 응용 프로그램 코드를 수정하지 않고 사용 중인 커멘드 개체를 간단히 변경하여 응용 프로그램의 동작을 변경할 수 있습니다.

- 재사용성: 커멘드 개체는 자체 포함되어 있고 응용 프로그램의 나머지 부분과 독립적으로 호출할 수 있으므로 응용 프로그램의 여러 부분에서 재사용할 수 있습니다.

- 실행 취소/다시 실행 기능: 커멘드 개체는 일반적으로 실행 취소 작업을 구현하므로 커멘드 패턴을 사용하여 응용 프로그램에서 실행 취소/다시 실행 기능을 구현할 수 있습니다.

- 트랜잭션 지원: 커멘드 개체는 필요한 경우 롤백할 수 있는 단일 작업 단위로 여러 커멘드가 실행되는 트랜잭션 동작을 구현하는 데 사용할 수 있습니다.

전반적으로 커멘드 패턴은 해당 작업의 실제 구현에서 작업을 호출하는 책임을 분리하는 방법을 제공하는 강력한 디자인 패턴입니다.

이것은 코드를 보다 모듈화되고 유연하며 재사용 가능하게 만듭니다.

## 

- command pattern은 메서드를 직접 호출하지 않고, 요청(Invoker)과 처리(Receiver)를 분리합니다.
  - 행동은 Command로 래핑됩니다. Client에서 Invoker -> Command -> Receiver 를 거쳐 명령을 수행합니다.
  - (요청은 객체에 명령으로 래핑되어 Invoker 객체에 전달이 됩니다. )
- Receiver
  - 객체의 행동을 가지고 있습니다.
  - Command에서 execute()를 구현할 때 필요한 클래스입니다.
  - Command의 기능을 실행하기 위해 사용하는 수신자 클래스가 됩니다.
- ConcreteCommand
  - Receiver가 수행해야 하는 행동을 바인딩합니다.
  - Receiver에서 해당 작업을 호출합니다.
- Invoker
  - 기능의 실행을 명령합니다.
  - 각 Command들이 모여있는 곳으로, Command group 처럼 볼 수 있습니다.

간단한 예시로, 열고 닫는 명령을 수행하는 커튼은 아래와 같은 방식으로 구현이 될 수 있습니다.

```jsx
// Receiver (수신자)
class CurtainReceiver {
  constructor() {
    this.isOpen = false
  }

  open() {
    this.isOpen = true
    console.log('curtain open')
  }

  close() {
    this.isOpen = false
    console.log('curtain close')
  }
}

// Command interface
class Command {
  execute() {}
}

// ConcreteCommand (open)
class CurtainOpen extends Command {
  constructor(curtain) {
    super()
    this.curtain = curtain
  }
  execute() {
    this.curtain.open()
  }
}

// ConcreteCommand (close)
class CurtainClose extends Command {
  constructor(curtain) {
    super()
    this.curtain = curtain
  }
  execute() {
    this.curtain.close()
  }
}

// Inovker (호출자)
class CurtainOpenInvoker {
  constructor(curtainOpen) {
    this.open = curtainOpen
  }

  execute() {
    this.open.execute()
  }
}

// Client
// 1. receiver 생성
const curtainReceiver = new CurtainReceiver()

// 2. command 생성
const curtainOpen = new CurtainOpen(curtainReceiver)
const curtainClose = new CurtainClose(curtainReceiver)

// 3. invoker 생성
const invoker = new Invoker(curtainOpen)

// 4. 명령
invoker.execute()
```

### 특징

- 각 명령에 대한 구체적인 클래스는 오직 자신의 기능을 수행하는 것에만 초점이 맞춰져있습니다.
- 작은 기능 구현에 집중해서 개발할 수 있으며 복합적이고 더 큰 기능을 만들어나갈 수 있습니다.
- undo/redo, 우선순위가 높은 명령을 먼저 실행하기 등 다양한 명령 수행이 가능해집니다.
- 옵저버 패턴과 다른점
  - 옵저버 패턴은 주제 객체와 여러 옵저버 객체 간의 일대다 관계를 정의합니다.
    - A 객체의 상태가 변경되면, A객체를 구독하고 있는 B, C, D 다른 객체들에게 변경 사실을 알려줍니다. 이는 객체간의 상호작용을 위한 패턴입니다.
  - 커맨드 패턴은 하나의 요청 객체(Invoker)와 수신자(Reciver) 객체 간의 일대일 관계가 됩니다.
    - 요청 객체(Invoker)가 호출될 때 명령이 동작하게 됩니다.
- 미디에이터 패턴과 다른점
  - 미디에이터 패턴은 중간에서 객체들을 상태를 알 수 있으며, 이에 따라 명령을 내릴 수 있습니다.
  - 커맨드 패턴은 명령을 캡슐화하고 실행합니다. 커맨드패턴은 객체의 상태를 알 수 없으며, 필요한 시점에 명령을 실행합니다.

### 시나리오 : 장난감가게 오픈하기

각 행동을 command pattern으로 만들어주세요.

1. 필요한 Receiver 객체는 아래와 같습니다.
   - Door
     - 행동 : 문 열기 / 문 닫기
   - Window
     - 행동 : 창문 열기 / 창문 닫기
   - Lamp
     - 행동 : 불 켜기 / 불 끄기
   - Robovac
     - 행동 : 청소 시작하기 / 청소 끝내기
2. 필요한 Invoker는 두개가 있습니다.
   - 청소하기 Inovker :
     문열기, 창문 열기, 청소 시작하기, 불 키기
   - 청소 끝내는 Invoker:
     청소 끝내기, 창문 닫기, 문 닫기


참고 
- https://gmlwjd9405.github.io/2018/07/07/command-pattern.html