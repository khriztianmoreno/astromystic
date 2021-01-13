import { css } from '@emotion/core'

import { ThemeType } from '~/styles/theme'
import { media } from '~/styles/utils'

import { FortescueFontFaceStyles } from '~/styles/fonts'

export default (theme: ThemeType) => css`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  ${FortescueFontFaceStyles}

  a,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  *,
  a:visited,
  a:active {
    text-decoration: none;
  }

  *,
  *:focus {
    outline: none;
  }

  html {
    box-sizing: border-box;
  }

  html,
  body {
    -webkit-font-smoothing: antialiased;
    font-family: ${theme.fontFaces.Fortescue.regular};
    font-weight: 400;
    font-size: 10px;
    padding: 0;
    margin: 0;

    strong {
      font-family: ${theme.fontFaces.Fortescue.bold};
    }
  }

  .markdown {
    p {
      margin-bottom: 1.2rem;

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    a {
      color: ${theme.colors.mineShaft};
      font-weight: bold;
      border-bottom: 1px solid ${theme.colors.mineShaft};

      &:visited {
        color: ${theme.colors.mineShaft};
        border-bottom: 1px solid ${theme.colors.mineShaft};
      }
    }
  }
`
