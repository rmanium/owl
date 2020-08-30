// @flow
import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import Box from '@material-ui/core/Box';

function IconWrapper({
  color,
  children,
  classes,
  component,
  fontSize,
  htmlColor,
  shapeRendering,
  titleAccess,
  width,
  height,
  viewBox,
  style,
  onClick,
  onTouchEnd,
  onMouseDown,
  SvgIconProps,
  ...rest
}) {
  const svgColor =
    color === 'primary' ||
    color === 'secondary' ||
    color === 'inherit' ||
    color === 'action' ||
    color === 'error' ||
    color === 'disabled'
      ? color
      : undefined;
  return (
    <Box clone color={color} {...rest}>
      <SvgIcon
        width={width}
        height={height}
        viewBox={viewBox}
        component={component}
        fontSize={fontSize}
        classes={classes}
        htmlColor={htmlColor}
        shapeRendering={shapeRendering}
        titleAccess={titleAccess}
        color={svgColor}
        style={style}
        onClick={onClick}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        {...SvgIconProps}
      >
        {children}
      </SvgIcon>
    </Box>
  );
}

IconWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IconWrapper;
