import React from 'react';
import PropTypes from 'prop-types';
class RightArrowx extends React.Component {
  render() {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M13.257 7.627L9.864 4.234a.818.818 0 00-1.146 0 .818.818 0 000 1.147l2.003 2.015h-7.41a.806.806 0 00-.811.81c0 .452.359.81.81.81h7.411L8.718 11.02a.818.818 0 00.579 1.39.816.816 0 00.579-.244l3.38-3.381a.824.824 0 00.244-.579.778.778 0 00-.243-.579z"
          fill="#777A80"
          opacity="0.5"
        />
      </svg>
    );
  }
}

RightArrowx.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RightArrowx;
