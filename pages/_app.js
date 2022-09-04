import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Router from 'next/router'
import NProgress from 'nprogress'

import { NoSsr } from '@material-ui/core'
import ScrollToTop from '@_utils/ScrollToTop'
import { useStore, wrapper } from '../_redux'
import theme from '../_lib/theme'

NProgress.configure({ showSpinner: false })
Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NProgress.done()
}
const Noop = ({ children }) => children

function App(props) {
  const { Component, pageProps } = props
  const store = useStore(pageProps?.initialReduxState)

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  React.useEffect(() => {
    if (window?.Cypress) {
      window.store = store
    }
  }, [store])

  const Layout = Component.Layout || Noop
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <title>{`${process.env.APP_COMPANY}:: ${process.env.APP_DASHBOARD}`}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <NoSsr>
          <CssBaseline />
          <ScrollToTop>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ScrollToTop>
        </NoSsr>
      </ThemeProvider>
    </>
  )
}
export default wrapper.withRedux(App)
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({
    initialReduxState: PropTypes.shape({}),
  }).isRequired,
}
