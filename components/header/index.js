import { makeStyles } from '@material-ui/core/styles';
import Link from 'components/Link';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import Menu from 'components/menu';

const useStyles = makeStyles(
  ({ palette, typography, breakpoints }) => ({
    root: {
      zIndex: 99999,
      backgroundColor: 'white',
      width: '100vw',
    },
    notFullWidth: {
      maxWidth: 960,
    },
    innerRoot: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 12,
      flexGrow: 1,
    },
    headerHeight: (props) => {
      return { height: props.headerHeight || 100 };
    },
    title: {
      margin: 0,
      float: 'left',
    },
    menu: {
      float: 'right',
    },
    fixed: {
      // position: "sticky",
      position: 'fixed',
      top: 0,
      [breakpoints.down('sm')]: {
        position: 'sticky',
      },
    },
    menuItems: {
      [breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  }),
);

const Header = ({
  pageTitle,
  notFullWidth,
  fixed,
  height,
  brandComp,
  ...rest
}) => {
  const classes = useStyles({ headerHeight: height });
  return (
    <header
      className={clsx(classes.root, fixed && classes.fixed)}
      {...rest}
    >
      <div
        className={clsx(
          classes.innerRoot,
          classes.headerHeight,
          notFullWidth && classes.notFullWidth,
        )}
      >
        <Link
          href="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {brandComp}
        </Link>
        {/* <h1 className={classes.title}>{pageTitle}</h1> */}
        <div className={classes.menuItems}>
          <Menu position="right" />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string,
};

Header.defaultProps = {
  pageTitle: ``,
};

export default Header;
