import { GILayout } from '@/interfaces/globals'
import Link from 'next/link'
import '@/assets/globals.css'
import ui from './layout.module.css'

export const metadata = {
  title: 'Project-Patterns',
  description: 'Applying JavaScript design patterns',
}

export default function RootLayout({ children }: GILayout) {
  const repositoryURL = 'https://github.com/shawn-dev-5790/project-p'
  const authorEmail = 'shawn.dev.5790@gmail.com'
  return (
    <html lang='ko'>
      <body>
        <div className={ui.app}>
          <header className={ui.head}>
            <Link className={ui.logo} href={repositoryURL} target='_black'>
              PP
            </Link>
            <div className={ui.title}>
              <h1>{metadata.title}</h1>
              <p>{metadata.description}</p>
            </div>
          </header>
          <main className={ui.main}>{children}</main>
          <footer className={ui.foot}>
            <small>
              <dl>
                <dt>Repository</dt>
                <dd>
                  <Link href={repositoryURL} target='_black'>
                    {repositoryURL.replace('https://', '')}
                  </Link>
                </dd>
              </dl>
            </small>
            <small>
              <dl>
                <dt>Created By</dt>
                <dd>{authorEmail}</dd>
              </dl>
            </small>
          </footer>
        </div>
      </body>
    </html>
  )
}
