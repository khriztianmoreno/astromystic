import { breakpoints, Breakpoints } from '~/styles/utils/media'

import colors, { ColorsType } from '~/styles/constants/colors'
import { fontFaces, FontFacesType } from '~/styles/fonts'
import layout, { LayoutType } from '~/styles/constants/layout'

export type ThemeType = {
  breakpoints: Breakpoints
  colors: any
  fontFaces: FontFacesType
  layout: LayoutType
  space: number
}

const theme: ThemeType = {
  breakpoints,
  colors,
  fontFaces,
  layout,
  space: 8,
}

export default theme
