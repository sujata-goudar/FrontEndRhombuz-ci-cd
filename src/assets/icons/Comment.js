import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ color = '#585858' }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.83767 16.3678H7.52678L7.30707 16.5878L5.25781 18.6392V7.11784C5.25781 6.87447 5.3544 6.64123 5.52607 6.46938C5.69771 6.29756 5.93034 6.20117 6.17274 6.20117H17.8273C18.0697 6.20117 18.3023 6.29756 18.4739 6.46938C18.6456 6.64123 18.7422 6.87447 18.7422 7.11784V15.4512C18.7422 15.6945 18.6456 15.9278 18.4739 16.0996C18.3023 16.2715 18.0697 16.3678 17.8273 16.3678H7.83767Z"
        fill="white"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

Comment.propTypes = {
  color: PropTypes.string,
};

export default Comment;
