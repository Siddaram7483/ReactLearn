// import PropTypes from 'prop-types';
// const Container = ({ children }) => {
//   return (
//     <div className="card" style={{ width: "50%" }}>
//       <div className="card-body">
//         {children}
//       </div>
//     </div>
//   );
// };

// Container.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default Container;


import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div className="card" style={{ width: "50%" }}>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
