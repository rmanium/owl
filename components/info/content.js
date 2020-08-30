import React, { useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    // backgroundColor: palette.primary.light,
    // height: '100vh',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
}));

function Content({
  Icon,
  text,
  label,
  iconProps,
  labelProps,
  textProps,
  ...rest
}) {
  const classes = useStyles();
  return (
    <>
      {Icon ? <Icon {...iconProps} className={classes.icon} /> : ""}

      {label && text ? (
        <Box {...rest} {...labelProps}>
          {`${label}: `}
        </Box>
      ) : label ? (
        <Box {...labelProps} {...rest}>
          {label}
        </Box>
      ) : (
        ""
      )}
      {text ? (
        <Box {...textProps} {...rest}>
          {text}
        </Box>
      ) : (
        ""
      )}
    </>
  );
}

Content.defaultProps = {};
Content.propTypes = {};

export default Content;
