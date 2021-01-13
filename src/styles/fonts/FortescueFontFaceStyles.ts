import { css } from '@emotion/core'

import * as fonts from '~/fonts/index.js'

export const Fortescue = {
  bold: 'Fortescue Bold',
  regular: 'Fortescue Regular',
}

const FontFaces = css`
  @font-face {
    font-family: 'Fortescue Regular';
    src: url('${fonts.FortescueRegular}?#iefix');
    src: url('${fonts.FortescueRegular}?#iefix') format('truetype');
  }
  @font-face {
    font-family: 'Fortescue Bold';
    src: url('${fonts.FortescueBold}?#iefix');
    src: url('${fonts.FortescueBold}?#iefix') format('truetype');
  }
`

export default FontFaces
