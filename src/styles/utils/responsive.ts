import { css, SerializedStyles } from '@emotion/core'
import { omit } from 'lodash'
import get from 'ts-get'

import mq from '~/styles/utils/media'

export const mqiOS = (window, attr: SerializedStyles) => {
  if (window) {
    const isiPhone = get(navigator, it => it.appVersion.indexOf('iPhone'), 0)
    if (isiPhone !== -1) {
      return css`
        ${attr}
      `
    }
  }
}

/**
 * makeResponsive function creates all the middle points for every breakpoint using a min/max
 * @param {Array} responsiveBlock - Usage: [{ property:string, min:number, max:number, unit:string}]
 * @returns {String} Emotion CSS block
 */
type ResponsiveBlockType = {
  property: string
  min: number
  max: number
  unit: string
}

type DeltaType = {
  delta: number
  first: string
  property: string
  min: number
  max: number
  unit: string
}

export const makeResponsive = (responsiveBlock: ResponsiveBlockType[]) => {
  const reducedMq = omit(mq, 'xsm')
  const deltas = responsiveBlock.map(item => ({
    ...item,
    delta: (item.max - item.min) / 3,
    first: `
        ${item.property}: ${item.min}${item.unit || ''};
      `,
  }))

  return Object.keys(reducedMq).reduce(
    (acc, breakpoint, idx) => css`
      ${acc} ${reducedMq[breakpoint](css`
        ${deltas.reduce(
          (group, delta) => `
              ${group}
              ${delta.property}: ${delta.min +
            delta.delta * (idx + 1)}${delta.unit || ''};
            `,
          ''
        )};
      `)};
    `,
    deltas.reduce(
      (firsts: any, delta: DeltaType) => css`
        ${firsts} ${delta.first};
      `,
      ''
    )
  )
}
