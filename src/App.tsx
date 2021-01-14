import * as React from 'react'
import Helmet from 'react-helmet'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import theme from '~/styles/theme'
import GlobalStyles from '~/styles/global'

import '~/styles/sass/base.scss'

/**
 * Layout component for all pages.
 * Live above the page components and persist across page changes.
 *
 * This can be helpful for:
 *  - Persisting layout between page changes for e.g. animating navigation
 *  - Storing state when navigating pages
 *  - Custom error handling using componentDidCatch
 *  - Inject additional data into pages using React Context.
 *
 * More info: https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
 * @param props
 */

type Props = {
  children: any
}

const og = {
  desc: 'Marca de joyería de diseñador que se inspira en la magia blanca, la astrología, el tarot y los rituales para la creación de piezas únicas o personalizadas, con un sentido místico y espiritual que busca la trascendencia del portador y su esencia.',
  image:
    'https://res.cloudinary.com/khriztianmoreno/image/upload/v1610582550/astromystic/cover.png',
  title: 'Astromystic',
  type: 'article',
  url: process.env.GATSBY_OG_URL,
}

const tw = {
  card: 'summary_large_image',
  image:
    'https://res.cloudinary.com/khriztianmoreno/image/upload/v1610582550/astromystic/cover.png',
}

const App = (props: Props) => (
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <Helmet
      title={og.title}
      meta={[
        { name: 'description', content: og.desc },
        { name: 'keywords', content: 'Joyería, Joyería de diseñador, Joyería espiritual, Joyas de oro, Joyas personalizadas, Piedras sanadoras, Joyas (Anillos, aretes, collares), Rituales, Magia, Tarot, Astrología, Joyería Simbólica' },
        { property: 'og:title', content: og.title },
        { property: 'og:description', content: og.desc },
        { property: 'og:image', content: og.image },
        { property: 'og:type', content: og.type },
        { property: 'og:url', content: og.url },
        { name: 'twitter:card', content: tw.card },
        { name: 'twitter:title', content: og.title },
        { name: 'twitter:description', content: og.desc },
        { name: 'twitter:image', content: tw.image },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0',
        },
      ]}
    />
    {props.children}
  </ThemeProvider>
)

export default React.memo(App)
