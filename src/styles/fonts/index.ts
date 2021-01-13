import { Fortescue } from '~/styles/fonts/FortescueFontFaceStyles'
import { Perpetua } from '~/styles/fonts/PerpetuaFontFaceStyles'

export { default as FortescueFontFaceStyles } from '~/styles/fonts/FortescueFontFaceStyles'
export { default as PerpetuaFontFaceStyles } from '~/styles/fonts/PerpetuaFontFaceStyles'

export type FontFacesType = {
  Fortescue: {
    bold: string
    regular: string
  }
  Perpetua: {
    regular: string
  }
}

export const fontFaces = {
  Fortescue,
  Perpetua,
}
