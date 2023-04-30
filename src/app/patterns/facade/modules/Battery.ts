export class Battery {
  min: number = 0
  max: number = 10000
  charge: number = this.max

  log(msg: string = '') {
    const logs = [`[베터리장치] ${msg}`, ` | 충전량 : ${this.charge / 100}%`]
    console.log(logs.join('\n'))
  }

  discharge(): void {
    if (this.charge === this.min) return this.log('배터리 부족, 충전 필요')
    this.charge -= 1
    this.log('배터리 소모')
  }
  recharge(): void {
    if (this.charge === this.min) return this.log('배터리 충전 완료')
    this.charge += 1
    this.log('배터리 충전')
  }
}
