import { CommandAbs } from './Command.abs'
import { Door, Lamp, RoboticVacuum, Window } from './CommandReceivers'

export class OpenDoor implements CommandAbs {
  door: Door
  constructor(door: Door) {
    this.door = door
  }
  execute(): void {
    this.door.open().log()
  }
  undo(): void {
    this.door.close().log()
  }
}
export class CloseDoor implements CommandAbs {
  door: Door
  constructor(door: Door) {
    this.door = door
  }
  execute(): void {
    this.door.close().log()
  }
  undo(): void {
    this.door.open().log()
  }
}
export class OpenWindow implements CommandAbs {
  window: Window
  constructor(window: Window) {
    this.window = window
  }
  execute(): void {
    this.window.open().log()
  }
  undo(): void {
    this.window.close().log()
  }
}
export class CloseWindow implements CommandAbs {
  window: Window
  constructor(window: Window) {
    this.window = window
  }
  execute(): void {
    this.window.close().log()
  }
  undo(): void {
    this.window.open().log()
  }
}
export class TurnOnLamp implements CommandAbs {
  lamp: Lamp
  constructor(lamp: Lamp) {
    this.lamp = lamp
  }
  execute(): void {
    this.lamp.on().log()
  }
  undo(): void {
    this.lamp.off().log()
  }
}
export class TurnOffLamp implements CommandAbs {
  lamp: Lamp
  constructor(lamp: Lamp) {
    this.lamp = lamp
  }
  execute(): void {
    this.lamp.off().log()
  }
  undo(): void {
    this.lamp.on().log()
  }
}
export class TurnOnRoboticVacuum implements CommandAbs {
  roboticVacuum: RoboticVacuum
  constructor(roboticVacuum: RoboticVacuum) {
    this.roboticVacuum = roboticVacuum
  }
  execute(): void {
    this.roboticVacuum.on().log()
  }
  undo(): void {
    this.roboticVacuum.off().log()
  }
}
export class TurnOffRoboticVacuum implements CommandAbs {
  roboticVacuum: RoboticVacuum
  constructor(roboticVacuum: RoboticVacuum) {
    this.roboticVacuum = roboticVacuum
  }
  execute(): void {
    this.roboticVacuum.off().log()
  }
  undo(): void {
    this.roboticVacuum.on().log()
  }
}
