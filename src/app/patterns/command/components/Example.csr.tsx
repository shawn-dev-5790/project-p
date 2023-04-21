'use client'

import { useState } from 'react'
import {
  OpenDoor,
  OpenWindow,
  TurnOnLamp,
  TurnOnRoboticVacuum,
  CloseDoor,
  CloseWindow,
  TurnOffLamp,
  TurnOffRoboticVacuum,
} from '../CommandConcrete'
import { OpenToyStore, CloseToyStore } from '../CommandInvokers'
import { Door, Lamp, RoboticVacuum, Window } from '../CommandReceivers'

export const CommandPatternExample = () => {
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

  //   const [refetch, setRefetch] = useState<number>(0)
  const [door, setDoor] = useState<string>(doorReceiver.state)
  const [window, setWindow] = useState<string>(windowReceiver.state)
  const [lamp, setLamp] = useState<string>(lampReceiver.state)
  const [roboticVacuum, setRoboticVacuum] = useState<string>(roboticVacuumReceiver.state)

  const dispatch = (func: any) => () => {
    func()
    setDoor(doorReceiver.state)
    setWindow(windowReceiver.state)
    setLamp(lampReceiver.state)
    setRoboticVacuum(roboticVacuumReceiver.state)
  }

  // client - btns
  const onStartOpenStore = () => openToyStoreInvoker.start()
  const onStopOpenStore = () => openToyStoreInvoker.stop()
  const onStartCloseStore = () => closeToyStoreInvoker.start()
  const onStopCloseStore = () => closeToyStoreInvoker.stop()

  return (
    <>
      <h4>CommandPatternExample</h4>
      <div>
        <div>
          <button onClick={dispatch(onStartOpenStore)}>onStartOpenStore</button>
          <button onClick={dispatch(onStopOpenStore)}>onStopOpenStore</button>
          <button onClick={dispatch(onStartCloseStore)}>onStartCloseStore</button>
          <button onClick={dispatch(onStopCloseStore)}>onStopCloseStore</button>
        </div>
        <div>
          <dl>
            <dt>doorReceiver</dt>
            <dd>{door}</dd>
            <dt>windowReceiver</dt>
            <dd>{window}</dd>
            <dt>lampReceiver</dt>
            <dd>{lamp}</dd>
            <dt>roboticVacuumReceiver</dt>
            <dd>{roboticVacuum}</dd>
          </dl>
        </div>
      </div>
    </>
  )
}
