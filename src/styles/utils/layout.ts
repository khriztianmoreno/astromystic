import { LayoutSize } from '~/styles/constants/layout'
import { ThemeType } from '~/styles/theme'

/** Types */
type LayoutType = 'section' | 'header' | 'footer'
type ComponentPropsType = {
  theme: ThemeType
}
type VariantType = 'sm' | 'lg'
type PositionsType = Array<'top' | 'right' | 'bottom' | 'left'>

/**
 * calc the spacing based on a base layout
 * @param theme
 */
export const space = (quantity: number) => ({
  theme,
}: {
  theme: ThemeType
}): string => `${(theme.space / 10) * quantity}rem`

/**
 * Get spacing for given layout
 * @param type
 * @param variant
 */
export const getLayoutSpace = (
  type: LayoutType,
  variant: VariantType = 'sm'
) => ({
  theme,
}: ComponentPropsType): {
  top: string
  right: string
  bottom: string
  left: string
} => {
  const { layout } = theme
  const size: LayoutSize = layout[type]?.[variant] ?? layout[type]

  return {
    top: space(size.top)({ theme }),
    right: space(size.right)({ theme }),
    bottom: space(size.bottom)({ theme }),
    left: space(size.left)({ theme }),
  }
}

/**
 * Return a string with the values of the layout
 * @param key
 * @param variant
 */
export const getLayoutStyle = (
  key: LayoutType,
  variant: VariantType = 'sm'
) => ({ theme }: ComponentPropsType): string => {
  const { top, right, bottom, left } = getLayoutSpace(key, variant)({ theme })

  return `${top} ${right} ${bottom} ${left}`
}
