import React from 'react';
import Proptypes from 'prop-types';

export const VerticleDots = ({ color = '#5C5E60' }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1855_4919)">
        <path
          d="M12 8.54492C12.8284 8.54492 13.5 7.87335 13.5 7.04492C13.5 6.21649 12.8284 5.54492 12 5.54492C11.1716 5.54492 10.5 6.21649 10.5 7.04492C10.5 7.87335 11.1716 8.54492 12 8.54492Z"
          fill={color}
        />
        <path
          d="M12 13.5449C12.8284 13.5449 13.5 12.8733 13.5 12.0449C13.5 11.2165 12.8284 10.5449 12 10.5449C11.1716 10.5449 10.5 11.2165 10.5 12.0449C10.5 12.8733 11.1716 13.5449 12 13.5449Z"
          fill={color}
        />
        <path
          d="M12 18.5449C12.8284 18.5449 13.5 17.8733 13.5 17.0449C13.5 16.2165 12.8284 15.5449 12 15.5449C11.1716 15.5449 10.5 16.2165 10.5 17.0449C10.5 17.8733 11.1716 18.5449 12 18.5449Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1855_4919">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.544922)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

VerticleDots.propTypes = {
  color: Proptypes.string,
};
