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
        <div className={ui.wrap}>
          <header className={ui.head}>
            <i>PP</i>
            <div className={ui.inner}>
              <h1>{metadata.title}</h1>
              <p>{metadata.description}</p>
            </div>
          </header>
          <main className={ui.main}>{children}</main>
          <footer className={ui.foot}>
            <dl>
              <dt>Created By</dt>
              <dd>{authorEmail}</dd>
            </dl>
            <dl>
              <dt>Repository</dt>
              <dd>
                <Link href={repositoryURL} target='_black'>
                  {repositoryURL.replace('https://', '')}
                </Link>
              </dd>
            </dl>
          </footer>
        </div>
      </body>
    </html>
  )
}
