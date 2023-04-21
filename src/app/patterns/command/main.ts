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
import { CloseToyStore, OpenToyStore } from './CommandInvokers'
import { Door, Lamp, RoboticVacuum, Window } from './CommandReceivers'

// create receivers
const doorReceiver = new Door()
const windowReceiver = new Window()
const lampReceiver = new Lamp()
const roboticVacuumReceiver = new RoboticVacuum()

// create concrete commands
const openDoorCommand = new OpenDoor(doorReceiver)
const openWindowCommand = new OpenWindow(windowReceiver)
const turnOnLampCommand = new TurnOnLamp(lampReceiver)
const turnOnRoboticVacuumCommand = new TurnOnRoboticVacuum(roboticVacuumReceiver)
const closeDoorCommand = new CloseDoor(doorReceiver)
const closeWindowCommand = new CloseWindow(windowReceiver)
const turnOffLampCommand = new TurnOffLamp(lampReceiver)
const turnOffRoboticVacuumCommand = new TurnOffRoboticVacuum(roboticVacuumReceiver)

// create invokers
const openToyStoreInvoker = new OpenToyStore(
  openDoorCommand,
  openWindowCommand,
  turnOnLampCommand,
  turnOnRoboticVacuumCommand
)
const closeToyStoreInvoker = new CloseToyStore(
  closeDoorCommand,
  closeWindowCommand,
  turnOffLampCommand,
  turnOffRoboticVacuumCommand
)

// client - btns
const onStartOpenStore = () => openToyStoreInvoker.start()
const onStopOpenStore = () => openToyStoreInvoker.stop()
const onStartCloseStore = () => closeToyStoreInvoker.start()
const onStopCloseStore = () => closeToyStoreInvoker.stop()
