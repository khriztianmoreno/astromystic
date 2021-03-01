import React from "react"

import { styled, media, css } from '~/styles'

import SideText from '~/atoms/SideText'
import Logo from '~/atoms/Logo'
import AstromysticLogo from '~/atoms/AstromysticLogo'

export const Container = styled('div')`
  background-image: url('img/bg_texture.png');
  background-repeat: repeat;
  background-size: auto;
  min-height: 100vh;
  position: relative;

  ${media.lg`
    height: 8rem;
  `}
`
const Main = styled('main')`
  background-image: url('img/main_texture_mobile.png');
  background-repeat: no-repeat;
  background-size: cover;
  margin: 4rem 2rem;
  min-height: 75vh;
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
const BottomDescription = styled('p')(
  ({ theme }) => css`
    background-image: url('img/bottom_texture_mb.png');
    background-repeat: no-repeat;
    background-size: cover;
    color: ${theme.colors.espresso};
    font-family: ${theme.fontFaces.Fortescue.regular};
    font-size: 1.5rem;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 0.1em;
    line-height: 2rem;
    text-align: center;
    padding: 3rem;
  `
)
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0;
`
const AstromysticLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
`
const Form = styled('form')`
  margin-bottom: 10rem;
`
const Label = styled('label')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: 1.125rem;
    margin-bottom: 0.5rem;

    span {
      color: ${theme.colors.marigold};
      font-family: ${theme.fontFaces.Fortescue.regular};
      font-size: 2.5rem;
      font-style: normal;
      font-weight: normal;
      margin-bottom: 1.5rem;
    }
`
)
const Input = styled('input')(
  ({theme}) => css`
    background-color: transparent;
    border-bottom: 0.2rem solid ${theme.colors.marigold};;
    border-left: none;
    border-right: none;
    border-top: none;
    font-family: ${theme.fontFaces.Fortescue.regular};
    font-size: 1.6rem;
    height: 3rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
    width: 100%;
  `
)
const SubscriptionChecked = styled('label')(
  ({ theme }) => css`
    align-items: center;
    color: ${theme.colors.marigold};
    display: flex;
    font-family: ${theme.fontFaces.Fortescue.regular};
    font-size: 1.5rem;
    margin-bottom: 5rem;

    input[type=checkbox] {
      border: 0.2rem solid ${theme.colors.marigold};
      background-color: transparent;
    }
  `
)


const IndexPage = () => (
  <Container>
    <SideText label="proximamente" />
    <Main>
      <div className="row center-row">
        <div className="col-xs-12 col-md-2 col-lg-3 " />
        <div className="col-xs-12 col-md-8 col-lg-6">
          <Description>
            Bienvenido a ASTROMYSTIC, <br/>
            un mundo de magia, misticismo y conexión
            que no te trajo a esta página por casualidad.
          </Description>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <AstromysticLogoContainer>
            <AstromysticLogo />
          </AstromysticLogoContainer>
          <Form>
            <Label htmlFor="email">
              <span>Email</span>
            </Label>
            <Input type="email" name="email" id="email" />
            <SubscriptionChecked>
              <input type="checkbox" name="subscribe" />
              <span>Quiero conocer mas sobre Astromystic y acepto las condiciones.</span>
            </SubscriptionChecked>
          </Form>
          <BottomDescription>
            Conocerás todo sobre mí
            y mi mundo muy pronto.
          </BottomDescription>
        </div>
        <div className="col-xs-12 col-md-2 col-lg-3" />
      </div>
    </Main>
    <SideText label="proximamente" bottom />
  </Container>
)

export default IndexPage
