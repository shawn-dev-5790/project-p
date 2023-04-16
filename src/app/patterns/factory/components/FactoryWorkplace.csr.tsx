'use client'

import { useState } from 'react'
import { ToyFactory } from '../../classes/Toy/Toy.factory'
import { ToyCardCSR } from './ToyCard.csr'
import ui from './FactoryWorkplace.csr.module.css'
import { Toy } from '../../classes/Toy/Toy'

const useFactory = () => {
  const [updateId, setUpdateId] = useState<number>(0)
  const [core, _] = useState<ToyFactory>(new ToyFactory())

  const sync = () => setUpdateId(updateId + 1)

  return { core, sync }
}

export const FactoryWorkplaceCSR = () => {
  const factory = useFactory()

  const [mx, my] = [20, 13]
  const cellSize = 50
  const cells = Array.from({ length: mx * my }, (_, i) => i)

  const onCreate = (type: 'Monkey' | 'Snake') => () => factory.core.create(type) && factory.sync()

  const onCmdToy = (toy: Toy) => () => {
    const cmd = prompt('order to Toy (move, wave, get&set price)')
    const [call, p1, p2] = cmd?.split(' ') || []
    if (call === 'move') return toy.move(+p1, +p2) && factory.sync()
    if (call === 'wave') return console.log([toy.name, call, toy.wave()].join('===>'))
    if (call === 'get-price') return console.log([toy.name, call, toy.price].join('===>'))
    if (call === 'set-price') return console.log([toy.name, call, toy.price, toy.setPrice(+p1)].join('===>'))
  }
  return (
    <div className={ui.comp}>
      <section>
        <button onClick={onCreate('Monkey')}>create Monkeys</button>
        <button onClick={onCreate('Snake')}>create Snakes</button>
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
                ({Math.floor(i / mx)},{Math.floor(i % my)})
              </li>
            ))}
          </ul>
          <ul className={ui.toys}>
            {factory.core.toys.map((toy) => (
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
