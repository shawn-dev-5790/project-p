import './style.css'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="wrap">
    <div>
      <button id="btnMix">mix</button>
      <button id="btnWave">wave</button>
    </div>
    <div class="grid">
    ${Array.from({ length: 10 * 10 }, (_, i) => i)
      .map((cell) => `<div class="cell">${cell}</div>`)
      .join('')}
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
