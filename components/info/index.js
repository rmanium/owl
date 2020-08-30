import React, { useEffect, useCallback } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Paper, Typography, Box } from '@material-ui/core';
import clsx from 'clsx';
// import Link from 'next/link';
import PropTypes from 'prop-types';
import Content from './content';

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // margin: 10,
    color: palette.primary.main,
  },
  vertical: {
    flexDirection: 'column',
  },
  // bold: {
  //   fontWeight: 600
  // },
  link: {
    textDecoration: 'none',
    '&:hover': {
      color: palette.secondary.main,
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },
  icon: {},
  // withBorder: {
  //   borderStyle: "solid",
  //   borderWidth: 3
  //   // padding: 10
  // },
  withPaper: {
    padding: 10,
  },
  bkImage: (props) => {
    if (props.backgroundImage) {
      return {
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // backgroundPosition: "-356px 76px"
      };
    } else {
      return null;
    }
  },
  // large: {
  //   fontSize: typography.h5.fontSize,
  //   "& *": {
  //     fontSize: typography.h3.fontSize
  //   }
  // },
  square: (props) => {
    return {
      width: props.large ? '280px' : '180px',
      height: props.large ? '280px' : '180px',
    };
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  // small: {
  //   fontSize: typography.body2.fontSize,
  //   "& *": {
  //     fontSize: typography.h5.fontSize
  //   }
  // }
}));

/**
 * A component to render all types of small info blocks. Sample usage:
 *      <Info
 *        vertical
 *       withBorder
 *       withPaper
 *       large
 *       square
 *       Icon={AddPhotoIcon}
 *       backgroundImage={scanningImage}
 *       label="Email"
 *       text="abbas@ziba.com"
 *       link="/baghali"
 *     />
 */
function Info({
  Icon,
  label,
  text,
  link,
  externalLink,
  vertical,
  // withBorder,
  withPaper,
  square,
  large,
  onClickHandler,
  backgroundImage,
  backgroundImageStyles,
  contentProps,
  iconProps,
  labelProps,
  textProps,
  className,
  ...rest
}) {
  const classes = useStyles({
    square: square,
    large: large,
    backgroundImage: backgroundImage,
  });

  return (
    <Paper
      className={clsx(
        square && classes.square,
        className && className,
        !withPaper && classes.transparent,
        // withBorder && classes.withBorder
      )}
      elevation={withPaper ? 3 : 0}
    >
      <Box
        // TODO {...(link && (externalLink ? { href: link } : { to: link }): {})}
        // component={link ? (externalLink ? "a" : Link) : "div"}
        component={'div'}
        onClick={onClickHandler}
        className={clsx(
          classes.root,
          vertical && classes.vertical,
          withPaper && classes.withPaper,
          square && classes.square,
          large ? classes.large : classes.small,
          link && classes.link,
          backgroundImage && classes.bkImage,
          backgroundImageStyles,
        )}
        {...rest}
      >
        <Content
          Icon={Icon}
          text={text}
          label={label}
          iconProps={iconProps}
          labelProps={labelProps}
          textProps={textProps}
          {...contentProps}
        />
      </Box>
    </Paper>
  );
}

Info.defaultProps = {};
Info.propTypes = {};

export default Info;
