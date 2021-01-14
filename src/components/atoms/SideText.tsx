import React from 'react'

import { styled, media, css } from '~/styles'

const Text = styled('div')(
  {
    fontSize: '3.5rem',
    fontStyle: 'normal',
    lineHeight: '2.1rem',
  },
  ({ theme }) => css`
    color: ${theme.colors.espresso};
    font-family: ${theme.fontFaces.Fortescue.regular};
    text-transform: uppercase;
    text-align: center;
  `
)

const SideText = ({ label }) => <Text><p>{label}</p></Text>

export default SideText
