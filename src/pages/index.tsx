import React from "react"

import { styled, media, css } from '~/styles'

import SideText from '~/atoms/SideText'

export const Container = styled('div')`
  background-image: url('img/bg_texture_mobile.png');
  background-repeat: repeat;
  background-size: cover;
  min-height: 100vh;

  ${media.lg`
    height: 8rem;
  `}
`

const Main = styled('main')`
  background-image: url('img/main_texture_mobile.png');
  background-repeat: no-repeat;
  background-size: cover;
  margin: 4rem 2rem;
  min-height: 100vh;
  padding: 4rem 2rem;

  ${media.md`
    background-image: url('img/main_texture_desktop.png');
    margin: 4rem;
  `}
`

const Description = styled('p')(
  ({ theme }) => css`
    color: ${theme.colors.espresso};
    font-family: ${theme.fontFaces.Fortescue.regular};
    font-size: 1.5rem;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 0.1em;
    line-height: 2rem;
    text-align: center;
  `
)


const IndexPage = () => (
  <Container>
    <SideText label="proximamente" />
    <Main>
      <Description>
        Bienvenido a ASTROMYSTIC, <br/>
        un mundo de magia, misticismo y conexión
        que no te trajo a esta página por casualidad.
      </Description>
    </Main>

  </Container>
)

export default IndexPage
