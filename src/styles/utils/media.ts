import { css, SerializedStyles, Interpolation } from '@emotion/core'
import { omit } from 'lodash'

export interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

export const breakpoints: Breakpoints = {
  xs: 0,
  sm: 320,
  md: 768,
  lg: 1025,
  xl: 1440,
}

export interface Layout {
  section: {
    padding: {
      desktop: number
      mobile: number
      tablet: number
    }
  }
}

export const layoutSizes: Layout = {
  section: {
    padding: {
      desktop: 5,
      mobile: 3,
      tablet: 4,
    },
  },
}

export interface NavSize {
  height: {
    desktop: {
      sticky: number
      top: number
    }
    mobile: {
      sticky: number
      top: number
    }
  }
}

export const navSize: NavSize = {
  height: {
    desktop: {
      sticky: 8,
      top: 8,
    },
    mobile: {
      sticky: 14,
      top: 14,
    },
  },
}

/**
 * Creates a general rules for hover state. Also, prevent CSS hover on touch devices
 * @param template
 * @param args
 */
const hover = (parent = '&', child: '') => (
  template: TemplateStringsArray,
  ...args: Interpolation<undefined>[]
) => css`
  @media not all and (pointer: coarse) {
    ${parent}:hover ${child} {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
      ${css(template, ...args)}
    }
  }

  ${parent}.hover ${child} {
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    ${css(template, ...args)}
  }
`

export interface MediaQuery {
  sm(
    template: TemplateStringsArray,
    ...args: Interpolation<undefined>[]
  ): SerializedStyles
  md(
    template: TemplateStringsArray,
    ...args: Interpolation<undefined>[]
  ): SerializedStyles
  lg(
    template: TemplateStringsArray,
    ...args: Interpolation<undefined>[]
  ): SerializedStyles
  xl(
    template: TemplateStringsArray,
    ...args: Interpolation<undefined>[]
  ): SerializedStyles
  hover: (
    parent?: string,
    child?: string
  ) => (
    template: TemplateStringsArray,
    ...args: Interpolation<undefined>[]
  ) => SerializedStyles
}

/**
 * Util for add media queries to styled components based on the breakpoints
 *
 * Example:
 *
 * const Button = styled('button')`
 *  color: red;
 *  ${media.md`
 *    color: blue;
 *  `}
 * `
 */
const media: MediaQuery = Object.keys(omit(breakpoints, ['xs'])).reduce(
  (accumulator, key: string) => {
    accumulator[key] = function(
      template: TemplateStringsArray,
      ...args: Interpolation<undefined>[]
    ) {
      return css`
        @media (min-width: ${breakpoints[key]}px) {
          ${css(template, ...args)};
        }
      `
    }

    return accumulator
  },
  { hover }
) as MediaQuery

export default media
