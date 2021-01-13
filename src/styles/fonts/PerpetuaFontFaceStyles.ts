import { css } from '@emotion/core'

import * as fonts from '~/fonts/index.js'

export const Perpetua = {
  regular: 'Perpetua Regular',
}

const FontFaces = css`
  @font-face {
    font-family: 'Perpetua Regular';
    src: url('${fonts.PerpetuaRegular}?#iefix');
    src: url('${fonts.PerpetuaRegular}?#iefix') format('truetype');
  }
`

export default FontFaces
