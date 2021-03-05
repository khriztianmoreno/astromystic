import React, { useState } from 'react'

import { styled, media, css } from '~/styles'

import SideText from '~/atoms/SideText'

export const Container = styled('div')`
  background-image: url('img/bg_texture.png');
  background-repeat: repeat;
  background-size: auto;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;

  ${media.lg`
    height: 8rem;
    padding-top: 0.5rem;
  `}
`
const Main = styled('main')`
  background-image: url('img/main_texture_mobile.png');
  background-repeat: no-repeat;
  background-size: cover;
  margin: 4rem 2rem;
  min-height: 75vh;
  padding-bottom: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 8.5rem;

  ${media.md`
    background-image: url('img/main_texture_desktop.png');
    min-height: 80vh;
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

    ${media.md`
      font-size: 2.5rem;
      line-height: 2.4rem;
    `}
  `
)
const BottomDescription = styled('p')(
  ({ theme }) => css`
    color: ${theme.colors.espresso};
    font-family: ${theme.fontFaces.Fortescue.regular};
    font-size: 1.5rem;
    font-style: normal;
    letter-spacing: 0.1em;
    line-height: 2rem;
    text-align: center;

    ${media.md`
      font-size: 3rem;
      line-height: 89%;
    `}
  `
)
const HelenaImage = styled.img`
  margin-top: -1.5rem;
`
const ContainerFooter = styled.div`
  background-image: url('img/bottom_texture_mb.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem 0;

  ${media.md`
    background-image: none;
  `}
`
const AstromysticLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 5rem 0;

  ${media.md`
    margin-top: 5rem;
  `}
`
const Form = styled('form')`
  margin-bottom: 10rem;

  ${media.lg`
    margin-top: 8rem;
    margin-bottom: 8rem;
  `}
`
const Label = styled('label')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    span {
      color: ${theme.colors.marigold};
      font-family: ${theme.fontFaces.Fortescue.regular};
      font-size: 1.8rem;
      font-style: normal;
      font-weight: normal;
      margin-bottom: 1.5rem;

      ${media.md`
        font-size: 2rem;
      `}
    }
  `
)
const Input = styled('input')(
  ({ theme }) => css`
    background-color: transparent;
    border-bottom: 0.2rem solid ${theme.colors.marigold};
    border-left: none;
    border-right: none;
    border-top: none;
    color: ${theme.colors.espresso};
    font-family: ${theme.fontFaces.Fortescue.regular};
    font-size: 1.6rem;
    height: 3rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
    padding-bottom: 0.5rem;
    width: 100%;

    ${media.md`
      font-size: 2.5rem;
    `}
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
    text-align: left;

    ${media.md`
      font-size: 2rem;
    `}

    input[type='checkbox'] {
      border: 0.2rem solid ${theme.colors.marigold};
      background-color: transparent;
      margin-right: 1rem;
    }

    span {
      margin-top: 1rem;
      ${media.md`
        margin-top: 2rem;
      `}
    }
  `
)
const ButtonSubmit = styled('button')(
  ({ theme }) => css`
    bottom: 2rem;
    color: ${theme.colors.marigold};
    font-size: 1.5rem;
    position: absolute;
    right: 0;

    ${media.md`
      font-size: 2rem;
    `}
  `
)
const Inputontainer = styled.div`
  position: relative;
`
const ContainerTextureImage = styled.div`
  ${media.md`
    padding-right: 3rem;
  `}

  ${media.lg`
    padding-right: 8rem;
  `}
`
const TextureImage = styled.div`
  display: none;

  ${media.md`
    background-image: url('img/texture_text_desktop.png');
    display: block;
    height: 80vh;
    background-size: cover;
    background-repeat: no-repeat;
    padding-right: 3rem;
  `}
`
const ContainerLeftSideText = styled.div`
  ${media.md`
    position: absolute;
    top: 21vh;
    transform: rotate(180deg);
    writing-mode: vertical-lr;
  `}
`
const ContainerRightSideText = styled.div`
  ${media.md`
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    position: absolute;
    right: 0;
    top: 27vh;
  `}
`
const ContentMain = styled.div`
  text-align: center;
  z-index: 4;
`
const AbsoluteCenterDiv = styled.div`
  display: none;
  left: 0;
  margin: auto;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;

  ${media.md`
    display: block;
  `}
`
const GoldenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const BorderLine = styled.img`
  margin: 1rem 0;
  height: auto;

  ${media.md`
    margin: 1.5rem 0;
  `}
`

const IndexPage = () => {
  const [form, setForm] = useState({})

  const handleInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handlerSubmit = (evt) => {
    evt.preventDefault()
    console.log(form)
  }
  return (
    <Container>
      <AbsoluteCenterDiv>
        <GoldenContainer>
          <img src="img/golden_ring.png" alt="Golden" />
        </GoldenContainer>
      </AbsoluteCenterDiv>
      <ContainerLeftSideText>
        <SideText label="proximamente" />
      </ContainerLeftSideText>
      <Main>
        <div className="row center-row">
          <ContainerTextureImage className="col-xs-12 col-md-3 col-lg-4">
            <TextureImage />
          </ContainerTextureImage>
          <ContentMain className="col-xs-12 col-md-6 col-lg-4">
            <BorderLine src="img/border_line.png" alt="border line" />
            <Description>
              Bienvenidos <br />
              a un mundo de magia,
              <br />
              misticismo y conexión
              <br />
              que no te trajo a esta página
              <br />
              por casualidad.
            </Description>
            <BorderLine src="img/border_line.png" alt="border line" />
            <AstromysticLogoContainer>
              <img src="img/logo_astromystic.png" alt="logo_astromystic" />
            </AstromysticLogoContainer>
            <Form onSubmit={handlerSubmit}>
              <Inputontainer>
                <Label htmlFor="email">
                  <span>Email</span>
                </Label>
                <div>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <ButtonSubmit type="submit">Subscribirse</ButtonSubmit>
              </Inputontainer>
              <SubscriptionChecked>
                <input
                  type="checkbox"
                  name="subscribe"
                  required
                  onChange={handleInputChange}
                />
                <span>
                  Quiero conocer mas sobre Astromystic y acepto las condiciones.
                </span>
              </SubscriptionChecked>
            </Form>
            <ContainerFooter>
              <BottomDescription>
                Conocerás todo sobre mí <br/>
                y mi mundo muy pronto.
              </BottomDescription>
              <HelenaImage src="img/helena.png" alt="helena sign" />
            </ContainerFooter>
          </ContentMain>
          <div className="col-xs-12 col-md-4 col-lg-4" />
        </div>
      </Main>
      <ContainerRightSideText>
        <SideText label="proximamente" bottom />
      </ContainerRightSideText>
    </Container>
  )
}

export default IndexPage
