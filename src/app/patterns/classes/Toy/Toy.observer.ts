type TAnyFunc = (data: any) => any

export class ToyObserver {
  observers: TAnyFunc[] = []

  notify(data: any) {
    this.observers.map((func) => func(data))
    // console.log('notify ', data, observers)
  }
  subscribe(func: TAnyFunc) {
    this.observers.push(func)
    // console.log('subscribe ', func, observers)
  }
  unsubscribe(func: TAnyFunc) {
    this.observers.map((observer, index) => {
      if (String(observer) == String(func)) {
        this.observers.splice(index, 1)
      }
    })
    // console.log('unsubscribe ', func, observers)
  }
}
