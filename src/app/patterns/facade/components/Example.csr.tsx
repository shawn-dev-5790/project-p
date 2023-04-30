'use client'

import { useEffect, useState } from 'react'
import { Facade } from '../modules/Facade'
import ui from './Example.csr.module.css'

const dashboard = new Facade()

export const FacadePatternExample = () => {
  const [view, setView] = useState<any>(dashboard.dashboard)

  const dispatch = (func: any) => () => {
    func()
    setView(dashboard.dashboard)
  }

  const onPowerOn = () => dashboard.powerOn(prompt('insert password') || 'none')
  const onPowerOff = () => dashboard.powerOff()
  const onChangeGearUp = () => dashboard.changeGearUp()
  const onChangeGearDown = () => dashboard.changeGearDown()
  const onIncreaseSpeed = () => dashboard.increaseSpeed()
  const onDecreaseSpeed = () => dashboard.decreaseSpeed()
  const onTurnLeft = () => dashboard.turnLeft()
  const onTurnRight = () => dashboard.turnRight()

  useEffect(() => {
    const onKeyDown = ({ code }: KeyboardEvent) => {
      if (code === 'ShiftLeft') dispatch(onChangeGearUp)()
      if (code === 'MetaLeft') dispatch(onChangeGearDown)()
      if (code === 'ArrowUp') dispatch(onIncreaseSpeed)()
      if (code === 'ArrowDown') dispatch(onDecreaseSpeed)()
      if (code === 'ArrowLeft') dispatch(onTurnLeft)()
      if (code === 'ArrowRight') dispatch(onTurnRight)()
    }
    const onKeyUp = ({ code }: KeyboardEvent) => {}
    document.addEventListener('keydown', onKeyDown, false)
    document.addEventListener('keyup', onKeyUp, false)
    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
      document.removeEventListener('keyup', onKeyUp, false)
    }
  }, [])

  return (
    <>
      <h4>FacadePatternExample</h4>
      <div
        className={[
          ui.wrap,
          view.power ? ui.engine_start : ui.engine_stop,
        ].join(' ')}
      >
        <div className={ui.dashboard_wrap}>
          <section className={ui.battery_wrap}>
            <div>{view.battery}%</div>
            <div style={{ top: 100 - view.battery }}></div>
          </section>
          <section className={ui.controller_wrap}>
            <div
              style={{ backgroundColor: view.clutch ? 'gray' : 'transparent' }}
            >
              clutch
            </div>
            <div
              style={{ backgroundColor: view.brake ? 'gray' : 'transparent' }}
            >
              brake
            </div>
            <div
              style={{
                backgroundColor:
                  view.speed > 0 && !view.brake ? 'gray' : 'transparent',
              }}
            >
              accelerator
            </div>
          </section>
          <section className={ui.rpm_wrap}>
            {view.gear === 0 && 'N'}
            {view.gear === -1 && 'R'}
            {view.gear > 0 && view.gear}
          </section>
          <section className={ui.power_wrap}>
            {view.power && <button onClick={dispatch(onPowerOff)}>OFF</button>}
            {!view.power && <button onClick={dispatch(onPowerOn)}>ON</button>}
          </section>
          <section className={ui.speed_wrap}>{view.speed}km/h</section>
          <section
            className={ui.handle_wrap}
            style={{
              transform: `rotate(${view.handle}deg)`,
            }}
          ></section>
          <pre>{JSON.stringify(view, null, 2)}</pre>
        </div>
      </div>
    </>
  )
}
