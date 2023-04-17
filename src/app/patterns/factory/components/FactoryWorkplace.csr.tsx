'use client'

import { useState } from 'react'
import { ToyFactory } from '../../classes/Toy/Toy.factory'
import { ToyCardCSR } from './ToyCard.csr'
import ui from './FactoryWorkplace.csr.module.css'
import { Toy } from '../../classes/Toy/Toy'
import { ToyObserver } from '../../classes/Toy/Toy.observer'
import { ToyMediator } from '../../classes/Toy/Toy.mediator'

const usePattern = () => {
  const [updateId, setUpdateId] = useState<number>(0)
  const [factory] = useState<ToyFactory>(new ToyFactory())
  const [observer] = useState<ToyObserver>(new ToyObserver())
  const [mediator] = useState<ToyMediator>(new ToyMediator())

  const sync = () => setUpdateId(updateId + 1)

  return { factory, observer, mediator, sync }
}

export const FactoryWorkplaceCSR = () => {
  const pattern = usePattern()

  const [mx, my] = [20, 13]
  const cellSize = 50
  const cells = Array.from({ length: mx * my }, (_, i) => i)

  const onCmdToy = (toy: Toy) => () => {
    const cmd = prompt('order to Toy (move, wave, get&set price)')
    const [call, p1, p2] = cmd?.split(' ') || []
    if (call === 'move') return toy.move(+p1, +p2) && pattern.sync()
    if (call === 'wave') return console.log([toy.name, call, toy.wave()].join('===>'))
    if (call === 'get-price') return console.log([toy.name, call, toy.price].join('===>'))
    if (call === 'set-price') return console.log([toy.name, call, toy.price, toy.setPrice(+p1)].join('===>'))
  }
  return (
    <div className={ui.comp}>
      <section>
        <button onClick={() => pattern.factory.create('Monkey') && pattern.sync()}>create Monkeys</button>
        <button onClick={() => pattern.factory.create('Snake') && pattern.sync()}>create Snakes</button>
        <button
          onClick={() => {
            pattern.factory.toys.map((toy) => {
              pattern.observer.subscribe(
                (data) =>
                  data === 'wave' && console.log(['observer.subscribe', toy.name, data, toy.wave()].join('===>'))
              )
              pattern.observer.subscribe(
                (data) =>
                  data === 'discount 10%' &&
                  console.log(
                    ['observer.subscribe', toy.name, data, toy.price, toy.setPrice(toy.price * 0.9)].join('===>')
                  )
              )
            })
          }}
        >
          subscribe
        </button>
        <button onClick={() => pattern.observer.notify('wave')}>wave</button>
        <button onClick={() => pattern.observer.notify('discount 10%')}>discount 10%</button>
        <button
          onClick={() => {
            pattern.factory.toys.map((toy) => {
              pattern.observer.unsubscribe(
                (data) =>
                  data === 'wave' && console.log(['observer.subscribe', toy.name, data, toy.wave()].join('===>'))
              )
              pattern.observer.unsubscribe(
                (data) =>
                  data === 'discount 10%' &&
                  console.log(
                    ['observer.subscribe', toy.name, data, toy.price, toy.setPrice(toy.price * 0.9)].join('===>')
                  )
              )
            })
          }}
        >
          unsubscribe
        </button>
        <button
          onClick={() => {
            pattern.mediator.setToys(pattern.factory.toys)
            pattern.factory.toys = pattern.mediator.notify({}, 'sort') || []
            pattern.sync()
            console.log(pattern)
          }}
        >
          mediator
        </button>
      </section>
      <section>
        <div
          className={ui.workspace}
          style={{
            width: `calc(${cellSize}px * ${mx})`,
            height: ` calc(${cellSize}px * ${my})`,
          }}
        >
          <ul
            className={ui.cells}
            style={{
              gridTemplateRows: `repeat(${my}, ${cellSize}px)`,
              gridTemplateColumns: `repeat(${mx}, ${cellSize}px)`,
            }}
          >
            {cells.map((i) => (
              <li key={i}>
                ({i % mx},{Math.floor(i / mx)})
              </li>
            ))}
          </ul>
          <ul className={ui.toys}>
            {pattern.factory.toys.map((toy) => (
              <li
                key={toy.name}
                onClick={onCmdToy(toy)}
                style={{ position: 'absolute', top: `${cellSize * toy.y}px`, left: `${cellSize * toy.x}px` }}
              >
                <ToyCardCSR toy={toy} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
