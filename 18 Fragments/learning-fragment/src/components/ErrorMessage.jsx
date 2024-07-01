
// const ErrorMessage = () => {
//   let foodItems = ["dal", "rice", "chapati", "rotti", "sajjaka"];
//   return (
//     <>
//       {foodItems.length === 0 && (
//         <h3>i am still hungry so please feed me something</h3>
//       )}
//     </>
//   );
// };
// export default ErrorMessage;

// import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ items }) => {
  if (items.length === 0) {
    return <h3>I am still hungry, so please feed me something!</h3>;
  }
  return null;
};

ErrorMessage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ErrorMessage;

