import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { map } from 'lodash'

import { getClassName } from './index'

describe('DOM Utils', () => {
  describe('getClassName', () => {
    it('should return a valid class name', () => {
      expect(
        getClassName({
          class1: true,
          class2: true,
          class3: true,
        })
      ).toBe('class1 class2 class3')
    })
    it('should ignore falsy value', () => {
      const className = getClassName({
        class1: true,
        class2: false,
        class3: true,
      })
      expect(className).toBe('class1 class3')
      expect(className).not.toContain('class2')
    })
  })
})
