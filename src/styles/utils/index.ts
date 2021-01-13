import { chain, get } from 'lodash'

export { default as media } from '~/styles/utils/media'
export { space, getLayoutSpace, getLayoutStyle } from '~/styles/utils/layout'

/**
 * Convert an object into a string, filtering out all the keys with falsy values
 * @param object
 */
export const getClassName = (object: { [key: string]: boolean }) =>
  chain(object)
    .reduce((acc: string[], value: boolean, key: string): string[] => {
      if (value) {
        acc.push(key)
      }
      return acc
    }, [])
    .value()
    .join(' ')
