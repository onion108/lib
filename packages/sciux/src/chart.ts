import type { RegisterContext } from './types'
import { barChart } from '@sciux/chart'

export default function ({ root }: RegisterContext): void {
  root.set('bar-chart', barChart)
}

export * from '@sciux/chart'
