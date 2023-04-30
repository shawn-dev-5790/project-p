import { GIPage } from '@/interfaces/globals'
import { FacadePatternExample } from './components/Example.csr'

export default function FacadePatternDetail(props: GIPage) {
  return (
    <>
      <h3>FacadePatternDetail</h3>
      <div>
        <FacadePatternExample />
      </div>
    </>
  )
}
