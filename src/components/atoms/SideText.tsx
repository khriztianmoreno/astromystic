import React from 'react'

import { styled, media, css } from '~/styles'

interface TextProps {
  bottom?: boolean
  label: string
}

const Text = styled('div')<TextProps>(
  ({ theme, bottom }) => css`
    color: ${theme.colors.espresso};
    font-family: ${theme.fontFaces.Fortescue.regular};
    text-transform: uppercase;
    text-align: center;
    /* display: none;

    ${media.md`
      display: block;
    `} */

    p {
      font-size: 4rem;
      font-style: normal;
      line-height: 2.1rem;

      ${media.md`
        font-size: 6rem;
      `}
    }



    ${
      bottom
      ? css`
        bottom: 0;
        left: 0;
        margin-left: auto;
        margin-right: auto;
        position: fixed;
        right: 0;
      `: css`position: relative;`
    };
  `
)

const SideText = ({ label, bottom }: TextProps) => <Text bottom={bottom}><p>{label}</p></Text>

export default SideText
