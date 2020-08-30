import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from 'components/icon-wrapper';

const AddPhotoIcon = ({
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  ...rest
}) => (
  <IconWrapper
    width={width}
    height={height}
    viewBox={viewBox}
    SvgIconProps={{ 'data-testid': 'AddPhotoIcon' }}
    {...rest}
  >
    <path data-name="Path 8237" d="M0 0h24v24H0z" fill="none" />
    <path
      data-name="Path 8238"
      d="M21.02 5H19V2.98a.982.982 0 0 0-.98-.98h-.03a.984.984 0 0 0-.99.98V5h-2.01a1 1 0 0 0-.99.98v.03a.986.986 0 0 0 .99.99H17v2.01a.977.977 0 0 0 .99.98h.03a.982.982 0 0 0 .98-.98V7h2.02a.982.982 0 0 0 .98-.98v-.04a.982.982 0 0 0-.98-.98zM16 9.01V8h-1.01A1.981 1.981 0 0 1 13 5.98a1.921 1.921 0 0 1 .27-.98H5a2.006 2.006 0 0 0-2 2v12a2.006 2.006 0 0 0 2 2h12a2.006 2.006 0 0 0 2-2v-8.28a2.048 2.048 0 0 1-1.02.28A2 2 0 0 1 16 9.01zM15.96 19H6a.5.5 0 0 1-.4-.8l1.98-2.63a.505.505 0 0 1 .82.02L10 18l2.61-3.48a.5.5 0 0 1 .79-.01l2.95 3.68a.5.5 0 0 1-.39.81z"
    />
  </IconWrapper>
);

AddPhotoIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  viewBox: PropTypes.string,
};
export default AddPhotoIcon;
