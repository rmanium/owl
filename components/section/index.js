import React, { useEffect, useCallback, Children } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    // backgroundColor: "lightgray"
    // width: '100%',
    // height: '400px',
    // display: 'block',
    flexGrow: 1,
    // [breakpoints.down('sm')]: {
    //   flexDirection: 'column',
    // },
  },
  gridItem: (props) => {
    if (!props.withGrid) {
      return {
        margin: 10,
      };
    }
  },
}));

function Section({
  children,
  sectionId,
  direction,
  justify = 'center',
  withGrid,
  alignItems = 'center',
  ...rest
}) {
  const classes = useStyles({ withGrid });

  // let numberOfColumns = Math.floor(12 / children.length);
  // numberOfColumns = console.log("cols", numberOfColumns);
  // console.log("direction", direction);
  let columnWidth =
    direction && !direction.includes('row')
      ? 12
      : Math.floor(12 / children.length || 1);

  const isChildrenArray = Array.isArray(children);

  return (
    <Grid
      {...(sectionId ? { id: sectionId } : {})}
      container
      alignItems={alignItems}
      // alignContent="center"
      justify={justify}
      // justify="center"
      direction={direction || null}
      className={classes.root}
      {...rest}
    >
      {!isChildrenArray && (
        <Grid
          className={classes.gridItem}
          item
          {...(!withGrid ? {} : { xs: 12 })}
        >
          {children}
        </Grid>
      )}
      {isChildrenArray &&
        children.map((child, index) => (
          <Grid
            item
            className={classes.gridItem}
            {...(!withGrid ? {} : { xs: columnWidth })}
            key={`child-${index}`}
          >
            {child}
          </Grid>
        ))}
    </Grid>
  );
}

export default Section;
