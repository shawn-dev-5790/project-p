export class Auth {
  key: string

  constructor(key: string) {
    this.key = key
  }

  log(msg: string = '') {
    const logs = [`[인증장치] ${msg}`]
    console.log(logs.join('\n'))
    return logs
  }

  authenticate(key: string): boolean {
    const isAuth = key === this.key
    this.log(`인증 결과 ${isAuth}`)
    return isAuth
  }
}
