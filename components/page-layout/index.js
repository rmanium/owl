import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from 'components/copyright';
import Header from 'components/header';
// import './layout.css';

const HEADER_HEIGHT = 100;
const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    // background: "rebeccapurple",
    marginBottom: '1.45rem',
  },
  notFullWidth: {
    maxWidth: 960,
  },
  innerRoot: {
    margin: '0 auto',
    marginTop: -1,
    // padding: `1.45rem 1.0875rem`
  },
  fixedHeaderGap: {
    // marginTop: HEADER_HEIGHT
  },
  footer: {
    // margin: '0 auto',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: 50,
    fontSize: 16,
    display: 'flex',
  },
}));
const Layout = ({
  children,
  title,
  brandComp,
  notFullWidth,
  fixedHeader = true,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <>
      <Header
        height={HEADER_HEIGHT}
        pageTitle={title}
        brandComp={brandComp}
        {...(fixedHeader ? { fixed: 'true' } : {})}
      />
      {/* TODO: page title prop should be used to show a header on each page <h1>{title}</h1> */}
      <div
        className={clsx(
          classes.innerRoot,
          notFullWidth && classes.notFullWidth,
          fixedHeader && classes.fixedHeaderGap,
        )}
        // style={{
        //   margin: `0 auto`,
        //   maxWidth: 960,
        //   padding: `0 1.0875rem 1.45rem`,
        // }}
      >
        <main {...rest}>{children}</main>
        <footer className={classes.footer}>
          <Copyright />
          {/* © {new Date().getFullYear()}, All rights reserved - RapidCrete.ca */}
          {/* {` `}
          <a href="https://www.RapidCrete.ca">
            Copyright 2019 - RapidCrete.ca
          </a> */}
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
