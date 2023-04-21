export class Door {
  static STATE_OPEN = 'open'
  static STATE_CLOSE = 'close'
  state: string = Door.STATE_CLOSE
  open(): Door {
    this.state = Door.STATE_OPEN
    return this
  }
  close(): Door {
    this.state = Door.STATE_CLOSE
    return this
  }
  log(): Door {
    console.log(this.state)
    return this
  }
}
export class Lamp {
  static STATE_ON = 'on'
  static STATE_OFF = 'off'
  state: string = Lamp.STATE_OFF
  on(): Lamp {
    this.state = Lamp.STATE_ON
    return this
  }
  off(): Lamp {
    this.state = Lamp.STATE_OFF
    return this
  }
  log(): Lamp {
    console.log(this.state)
    return this
  }
}
export class RoboticVacuum {
  static STATE_ON = 'on'
  static STATE_OFF = 'off'
  state: string = RoboticVacuum.STATE_OFF
  on(): RoboticVacuum {
    this.state = RoboticVacuum.STATE_ON
    return this
  }
  off(): RoboticVacuum {
    this.state = RoboticVacuum.STATE_OFF
    return this
  }
  log(): RoboticVacuum {
    console.log(this.state)
    return this
  }
}
export class Window {
  static STATE_OPEN = 'open'
  static STATE_CLOSE = 'close'
  state: string = Window.STATE_CLOSE
  open(): Window {
    this.state = Window.STATE_OPEN
    return this
  }
  close(): Window {
    this.state = Window.STATE_CLOSE
    return this
  }
  log(): Window {
    console.log(this.state)
    return this
  }
}
