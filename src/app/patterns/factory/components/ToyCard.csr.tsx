'use client'

import { Toy } from '../../classes/Toy/Toy'
import ui from './ToyCard.csr.module.css'
import Image from 'next/image'

export const TOY_IMAGE_SRC_MAP = {
  monkey: 'https://p.kindpng.com/picc/s/504-5045222_spider-monkey-pictures-free-realistic-spider-monkey-monkey.png',
  snake: 'https://p.kindpng.com/picc/s/46-460224_snake-png-image-snake-png-transparent-png.png',
} as const

export interface IToyCardCSR {
  toy: Toy
}

export const ToyCardCSR = ({ toy }: IToyCardCSR) => {
  const type = toy.name.includes('Monkey') ? 'monkey' : 'snake'
  const src = TOY_IMAGE_SRC_MAP[type]

  return (
    <div className={ui.card}>
      <Image loading='lazy' src={src} alt='toy img' width={50} height={50} />
      <div className={ui.info}>
        <strong>{toy.name}</strong>
        <p>
          (<span>{toy.x}</span>,<span>{toy.y}</span>)
        </p>
      </div>
    </div>
  )
}
