export class Engine {
  running: boolean = false

  log(msg: string = '') {
    const logs = [`[엔진장치] ${msg}`, ` | 구동 : ${this.running}`]
    console.log(logs.join('\n'))
    return logs
  }
  start(): void {
    this.running = true
    this.log('구동 시작')
  }
  stop(): void {
    this.running = false
    this.log('구동 정지')
  }
}
