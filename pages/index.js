import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import Home from 'pages-components/Home';
// const sampleImage = '/images/sample-image.jpg';

const useStyles = makeStyles(
  ({ palette, typography, breakpoints }) => ({
    root: {
      margin: 50,
    },
  }),
);

function HomePage() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Home />
    </Box>
  );
}

HomePage.defaultProps = {};
HomePage.propTypes = {};

export default HomePage;
