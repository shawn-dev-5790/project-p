import ReactMarkdown from 'react-markdown'
import ui from './page.module.css'
import { getFile } from '@/utils'
import { VideoCSR } from './components/Video.csr'

export default function Home() {
  const HomeMD = getFile(['docs', 'home.md'])
  const HomeOverviewMD = getFile(['docs', 'home.overview.md'])
  const HomeScenariosMD = getFile(['docs', 'home.scenarios.md'])

  return (
    <div className={ui.home}>
      <section>
        <ReactMarkdown>{HomeMD}</ReactMarkdown>
      </section>
      <section className={ui.overview}>
        <div className={ui.cont_main}>
          <ReactMarkdown>{HomeOverviewMD}</ReactMarkdown>
        </div>
        <div className={ui.cont_sub}>
          <VideoCSR type='overview' />
        </div>
      </section>
      <section className={ui.scenarios}>
        <ReactMarkdown>{HomeScenariosMD}</ReactMarkdown>
      </section>
    </div>
  )
}
