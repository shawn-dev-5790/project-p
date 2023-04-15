'use client'

import { useEffect } from 'react'

/**
 * constants
 */
const SRC_MAP = {
  // prettier-ignore
  module:'https://res.cloudinary.com/dq8xfyhu4/video/upload/q_auto/v1654008290/FM%20Workshop/design-patterns/module-pattern/Screen_Recording_2022-05-31_at_9.43.04_AM_dbq340.mov',
  // prettier-ignore
  singleton:'https://res.cloudinary.com/dq8xfyhu4/video/upload/q_auto/v1652717288/FM%20Workshop/Screen_Recording_2022-05-16_at_11.05.50_AM_xzeo41.mov',
  // prettier-ignore
  factory:'https://res.cloudinary.com/dq8xfyhu4/video/upload/q_auto/v1661500378/FM%20Workshop/design-patterns/factory-pattern/factory1_esuucn.mov',
  // prettier-ignore
  observer:'https://res.cloudinary.com/dq8xfyhu4/video/upload/q_auto/v1661499081/FM%20Workshop/design-patterns/observable-pattern/observable2_nsxqmi.mov',
  // prettier-ignore
  observer_2:'https://res.cloudinary.com/dq8xfyhu4/video/upload/q_auto/v1661499025/FM%20Workshop/design-patterns/observable-pattern/observable_dtcqep.mov',
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
    // console.log(window && window.innerHeight)
  }, [])

  return <video width='100%' height='100%' src={SRC_MAP[type]} autoPlay={true} muted={true} loop={true} />
}
