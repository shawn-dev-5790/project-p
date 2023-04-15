import ReactMarkdown from 'react-markdown'
import ui from './page.module.css'
import { getFile } from '@/utils'
import { VideoCSR } from './components/Video.csr'

export default function Home() {
  const HomeMD = getFile(['docs', 'home.md'])
  const HomeOverviewMD = getFile(['docs', 'home.overview.md'])
  const HomeScenariosMD = getFile(['docs', 'home.scenarios.md'])
  const HomeScenariosFactoryMD = getFile(['docs', 'home.scenarios.factory.md'])
  const HomeScenariosMediatorMD = getFile(['docs', 'home.scenarios.mediator.md'])
  const HomeScenariosObserverMD = getFile(['docs', 'home.scenarios.observer.md'])

  return (
    <div className={ui.home}>
      <section>
        <ReactMarkdown>{HomeMD}</ReactMarkdown>
      </section>
      <section className={ui.row}>
        <div className={ui.cont_main}>
          <ReactMarkdown>{HomeOverviewMD}</ReactMarkdown>
        </div>
        <div className={ui.cont_sub}>
          <VideoCSR type='module' />
        </div>
      </section>
      <section>
        <ReactMarkdown>{HomeScenariosMD}</ReactMarkdown>
      </section>
      <section className={ui.row}>
        <div className={ui.cont_main}>
          <ReactMarkdown>{HomeScenariosFactoryMD}</ReactMarkdown>
        </div>
        <div className={ui.cont_sub}>
          <VideoCSR type='factory' />
        </div>
      </section>
      <section className={ui.row}>
        <div className={ui.cont_main}>
          <ReactMarkdown>{HomeScenariosMediatorMD}</ReactMarkdown>
        </div>
        <div className={ui.cont_sub}>
          <VideoCSR type='observer_2' />
        </div>
      </section>
      <section className={ui.row}>
        <div className={ui.cont_main}>
          <ReactMarkdown>{HomeScenariosObserverMD}</ReactMarkdown>
        </div>
        <div className={ui.cont_sub}>
          <VideoCSR type='observer' />
        </div>
      </section>
    </div>
  )
}
