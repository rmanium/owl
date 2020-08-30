import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import Link from 'next/link';

const useStyles = makeStyles(
  ({ palette, typography, breakpoints }) => {
    return {
      root: {},
    };
  },
);

const Menu = ({ position }) => {
  const classes = useStyles();

  return (
    <ul
      className={clsx(
        classes.root,
        position === 'right' ? classes.right : classes.left,
      )}
    >
      <li>Main</li>
    </ul>
  );
};

export default Menu;
