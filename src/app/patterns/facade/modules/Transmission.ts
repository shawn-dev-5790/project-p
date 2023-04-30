export class Transmission {
  min: number = -1
  max: number = 5
  gear: number = 0
  clutch: boolean = false

  log(msg: string = '') {
    const logs = [
      `[기어장치] ${msg}`,
      ` | 클러치 : ${this.clutch ? '개방' : '폐쇠'}`,
      ` | 기 어 : ${this.gear === 0 ? '중립' : `${this.gear}단`}`,
    ]
    console.log(logs.join('\n'))
  }

  openClutch(): void {
    this.clutch = true
    this.log('클러치 개방, 기어 분리')
  }
  closeClutch() {
    this.clutch = false
    this.log('클러치 패쇠, 기어 결속')
  }

  shiftUp() {
    if (!this.clutch) return this.log('클러치 패쇠, 기어변속 불가')
    if (this.gear === this.max) return this.log('최대 기어, 기어변속 불가 ')
    this.gear += 1
    this.log('기어변속, 높은기어 채용, 출력 감폭')
  }

  shiftDown() {
    if (!this.clutch) return this.log('클러치 패쇠, 기어변속 불가')
    if (this.gear === this.min) return this.log('최소 기어, 기어변속 불가 ')
    this.gear -= 1
    this.log('기어변속, 낮은기어 채용, 출력 상승')
  }
}
