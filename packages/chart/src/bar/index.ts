import { type } from 'arktype'
import { defineComponent } from 'sciux-laplace'

const T = type({
  dummy: 'string',
})

export const barChart = defineComponent<'bar-chart', typeof T.infer>((attrs, context) => {
  return {
    name: 'bar-chart',
    attrs: T,
    defaults: {
      dummy: 'oh.',
    },
    setup(children) {
      const container = document.createElement('div')
      container.innerHTML = `[0.000000] Package chart created<br />* I finally knew how to create a chart package.<br />* I'm the original &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: yellow">Starwalker</span>`
      container.style.fontFamily = '\'VGA New\', \'Perfect DOS VGA 437\', \'GNU Unifont\', monospace'
      container.style.fontSize = '1.2em'
      container.style.padding = '10px'
      container.style.lineHeight = '120%'
      return container
    },
  }
})
