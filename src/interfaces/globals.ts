import { Route } from 'next/dist/server/router'

export interface GILayout {
  children: React.ReactNode
}
export interface GIPage extends Route {
  params: {
    pattern_id: string
  }
}
