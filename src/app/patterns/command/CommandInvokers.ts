import {
  CloseDoor,
  CloseWindow,
  OpenDoor,
  OpenWindow,
  TurnOffLamp,
  TurnOffRoboticVacuum,
  TurnOnLamp,
  TurnOnRoboticVacuum,
} from './CommandConcrete'

export class OpenToyStore {
  openDoor: OpenDoor
  openWindow: OpenWindow
  turnOnLamp: TurnOnLamp
  turnOnRoboticVacuum: TurnOnRoboticVacuum
  constructor(
    openDoor: OpenDoor,
    openWindow: OpenWindow,
    turnOnLamp: TurnOnLamp,
    turnOnRoboticVacuum: TurnOnRoboticVacuum
  ) {
    this.openDoor = openDoor
    this.openWindow = openWindow
    this.turnOnLamp = turnOnLamp
    this.turnOnRoboticVacuum = turnOnRoboticVacuum
  }
  start(): void {
    this.openDoor.execute()
    this.openWindow.execute()
    this.turnOnLamp.execute()
    this.turnOnRoboticVacuum.execute()
  }
  stop(): void {
    this.openDoor.undo()
    this.openWindow.undo()
    this.turnOnLamp.undo()
    this.turnOnRoboticVacuum.undo()
  }
}
export class CloseToyStore {
  closeDoor: CloseDoor
  closeWindow: CloseWindow
  turnOffLamp: TurnOffLamp
  turnOffRoboticVacuum: TurnOffRoboticVacuum
  constructor(
    closeDoor: CloseDoor,
    closeWindow: CloseWindow,
    turnOffLamp: TurnOffLamp,
    turnOffRoboticVacuum: TurnOffRoboticVacuum
  ) {
    this.closeDoor = closeDoor
    this.closeWindow = closeWindow
    this.turnOffLamp = turnOffLamp
    this.turnOffRoboticVacuum = turnOffRoboticVacuum
  }
  start(): void {
    this.closeDoor.execute()
    this.closeWindow.execute()
    this.turnOffLamp.execute()
    this.turnOffRoboticVacuum.execute()
  }
  stop(): void {
    this.closeDoor.undo()
    this.closeWindow.undo()
    this.turnOffLamp.undo()
    this.turnOffRoboticVacuum.undo()
  }
}
