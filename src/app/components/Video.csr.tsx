'use client'

import { useEffect } from 'react'

/**
 * constants
 */
const SRC_MAP = {
  // prettier-ignore
  overview:'https://res.cloudinary.com/dq8xfyhu4/video/upload/q_auto/v1661500378/FM%20Workshop/design-patterns/factory-pattern/factory1_esuucn.mov',
} as const

/**
 * interfaces
 */
export interface IVideoCSR {
  type: keyof typeof SRC_MAP
}

/**
 * components
 * @param IVideoCSR
 * @returns ReactNode
 */
export const VideoCSR = ({ type }: IVideoCSR) => {
  useEffect(() => {
    console.log(window && window.innerHeight)
  }, [])

  return (
    <video
      width='100%'
      height='100%'
      src={SRC_MAP[type]}
      autoPlay={true}
      muted={true}
      loop={true}
    />
  )
}
