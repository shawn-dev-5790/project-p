import fs from 'fs'

export const getFile = (paths: string[]) => {
  const pathString = [process.cwd(), 'src', 'app', ...paths].join('/')
  return fs.readFileSync(pathString, 'utf8')
}
