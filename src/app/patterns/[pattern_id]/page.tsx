import { GIPage } from '@/interfaces/globals'

export default function PatternDetail(props: GIPage) {
  return (
    <div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
