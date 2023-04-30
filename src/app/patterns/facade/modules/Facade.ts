import { Auth } from './Auth'
import { Battery } from './Battery'
import { BodyFrame } from './BodyFrame'
import { Brake } from './Brake'
import { Engine } from './Engine'
import { Motor } from './Motor'
import { Steering } from './Steering'
import { Transmission } from './Transmission'
import { Wheel } from './Wheel'

// Car Dashboard with Facade pattern
export class Facade {
  auth: Auth = new Auth('486')
  bodyFrame: BodyFrame = new BodyFrame('gold')
  wheels: Wheel[] = [new Wheel(1), new Wheel(2), new Wheel(3), new Wheel(4)]
  engine: Engine = new Engine()
  battery: Battery = new Battery()
  motor: Motor = new Motor()
  brake: Brake = new Brake()
  steering: Steering = new Steering()
  transmission: Transmission = new Transmission()

  get dashboard() {
    return {
      power: this.engine.running,
      battery: this.battery.charge / 100,
      handle: this.steering.direction,
      clutch: this.transmission.clutch,
      brake: this.brake.applied,
      speed: this.motor.speed,
      gear: this.transmission.gear,
      frame: this.bodyFrame.color,
    }
  }

  powerOn(key: string) {
    if (!this.auth.authenticate(key)) return
    this.battery.discharge()
    this.engine.start()
  }
  powerOff() {
    if (!this.engine.running) return
    this.engine.stop()
  }
  changeGearUp() {
    this.transmission.openClutch()
    this.transmission.shiftUp()
  }
  changeGearDown() {
    this.transmission.openClutch()
    this.transmission.shiftDown()
  }
  increaseSpeed() {
    if (!this.engine.running) return
    this.battery.discharge()
    this.transmission.closeClutch()
    this.brake.release()
    this.motor.accelerator()
  }
  decreaseSpeed() {
    if (!this.engine.running) return
    this.battery.discharge()
    this.transmission.closeClutch()
    this.brake.apply()
    this.motor.reducer()
  }
  turnLeft() {
    this.battery.discharge()
    this.steering.turnLeft()
  }
  turnRight() {
    this.battery.discharge()
    this.steering.turnRight()
  }
}
