
// import Item from "./Item";
// const foodItems = () => {
//    let foodItems = ['dal', 'rice', 'chapati', 'rotti', 'sajjaka'];
//   return (
//     <ul className="list-group">
//       {foodItems.map((item) => (
//        <Item key={item} foodItem={item}
//         handleBuyButton={() => console.log(`${item} bought`)}
//          ></Item>
//       ))}
//     </ul>
//   );
// };
// export default foodItems;
// import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import { useState } from 'react';

const FoodItems = ({ items }) => {
  // Initialize state to track active (bought) items
  let [activeItems, setActiveItems] = useState([]);

  // Event handler for when the Buy button is clicked
  const onBuyButton = (item) => {
    // Add the bought item to the activeItems list
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
    console.log(`Bought item: ${item}`);
  };

  return (
    <ul className="list-group">
      {items.map((foodItem, index) => (
        <Item
          key={index}
          foodItem={foodItem}
          bought={activeItems.includes(foodItem)}
          handleBuyButton={() => onBuyButton(foodItem)}
        />
      ))}
    </ul>
  );
};

// Prop type validation
FoodItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FoodItems;
