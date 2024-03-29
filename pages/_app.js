import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from 'styles/theme';
import createEmotionCache from 'styles/createEmotionCache';
  
// Client-side cache shared for the whole session 
// of the user in the browser.
  
const clientSideEmotionCache = createEmotionCache();

const MyApp = props => {
  const { Component, emotionCache = 
      clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>FreshCut</title>
        <meta charSet='utf-8' />
        <meta name='keywords' content='Keywords' />
        <meta name='description' content='Description' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='theme-color' content='#FFFFFF' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no' />
        {/* <meta name="viewport" content="initial-scale=1, width=device-width" /> */}
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, 
        consistent, and simple baseline to
        build upon. */}
          
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
