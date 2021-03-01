import React from 'react'

import { styled, media, css } from '~/styles'

interface TextProps {
  bottom?: boolean
  label: string
}

const Text = styled('div')(
  {
    fontSize: '3.5rem',
    fontStyle: 'normal',
    lineHeight: '2.1rem',
  },
  ({ theme, bottom }) => css`
    color: ${theme.colors.espresso};
    font-family: ${theme.fontFaces.Fortescue.regular};
    text-transform: uppercase;
    text-align: center;

    ${
      bottom
      ? css`
        bottom: 0;
        left: 0;
        margin-left: auto;
        margin-right: auto;
        position: fixed;
        right: 0;
      `: css`position: relative`
    };
  `
)

const SideText = ({ label, bottom }: TextProps) => <Text bottom={bottom}><p>{label}</p></Text>

export default SideText
