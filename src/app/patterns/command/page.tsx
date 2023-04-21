import { GIPage } from '@/interfaces/globals'
import { CommandPatternExample } from './components/Example.csr'

export default function CommandPatternDetail(props: GIPage) {
  return (
    <>
      <h3>CommandPatternDetail</h3>
      <div>
        <CommandPatternExample />
      </div>
    </>
  )
}
