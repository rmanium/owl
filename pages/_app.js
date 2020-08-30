import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import * as gtag from 'shared/gtag';
import theme from 'pages-components/theme';
import './styles.css';
import { TITLE, DESCRIPTION } from './../shared/constants';
import PageLayout from 'components/page-layout';
import Info from 'components/info';

const LOGO = '/images/logo.png';

const useStyles = makeStyles(
  ({ palette, typography, breakpoints }) => ({
    root: {},
    // logo: {
    //   backgroundRepeat: 'no-repeat',
    //   backgroundSize: 'cover',
    //   display: 'inline-block',
    //   float: 'left',
    //   margin: 0,
    //   padding: 0,
    //   width: 270,
    //   height: 45,
    //   backgroundColor: 'transparent',
    //   [breakpoints.down('xs')]: {
    //     width: 150,
    //     height: 25,
    //   },
    // },
  }),
);

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const classes = useStyles();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  const handleCallToActionClick = () => {
    if (process.env.NODE_ENV !== 'development') {
      gtag.event({
        action: 'call_to_action',
        category: 'Promotion',
        label: 'Bottom left phone number',
      });
      window.location = 'tel:7782277979';
    }
  };
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <PageLayout
          brandComp={
            <Info
              backgroundImage={LOGO}
              backgroundImageStyles={classes.logo}
              className={classes.logo}
            />
          }
          className={classes.root}
          title="Rapid Coring"
        > */}
        <Component {...pageProps} />
        {/* </PageLayout> */}
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
