// // const Item = (props) => {
// //   return <li className="list-group-item">{props.foodItem}</li>;

// // };
// // export default Item;



// import styels from "./Item.module.css";
// import PropTypes from "prop-types";
// // we can also destructure here const Item={(foodItem)}=>{let {foodItem} =props;}

// const Item = ({foodItem, handleBuyButton}) => {
  
//   return (
//     <li className={`${styels["kg-sidd"]} list-group-item`}>
//       <span className={styels["kg-span"]}>{foodItem}</span>
//       <br />
//       <button className={`${styels.button} btn btn-info`}
//       onClick={handleBuyButton}
//       >Buy</button>
//     </li>
//   );
// };

// Item.propTypes = {
//   foodItem: PropTypes.string.isRequired,
//   handleBuyButton: PropTypes.func.isRequired,
// };

// export default Item;
import styles from "./Item.module.css";
import PropTypes from "prop-types";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li className={`${styles["kg-sidd"]} list-group-item ${bought && 'active'}`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <br />
      <button className={`${styles.button} btn btn-info`} onClick={handleBuyButton}>
        Buy
      </button>
    </li>
  );
};

Item.propTypes = {
  foodItem: PropTypes.string.isRequired,
  handleBuyButton: PropTypes.func.isRequired,
  bought: PropTypes.bool.isRequired,
};

export default Item;
