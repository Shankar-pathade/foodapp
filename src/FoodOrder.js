import React, { useState } from 'react';

const restaurantInfo = [
  {
    restaurantName: 'abc',
    location: 'Pune',
    rating: '4',
    contactNumber: 4215466233,
    restaurantID: 1,
    imageUrl: 'https://www.swiggy.com/collections/56413?type=rcv2',
  },
  {
    restaurantName: 'pqr',
    location: 'Mumbai',
    rating: '4.5',
    contactNumber: 4215851233,
    restaurantID: 2,
    imageUrl:
      'https://www.swiggy.com/restaurants/louis-burger-junction-of-main-avenue-road-santa-cruz-west-mumbai-543837',
  },
  {
    restaurantName: 'LaLa',
    location: 'A.nagar',
    rating: '5',
    contactNumber: 2314851233,
    restaurantID: 3,
    imageUrl:
      'https://www.swiggy.com/restaurants/new-lajawaab-seekh-corner-kurla-bhd-kurla-weight-bridge-mumbai-372200',
  },
  {
    restaurantName: 'Tastyfood',
    location: 'Pathardi',
    rating: '9',
    contactNumber: 2314852211,
    restaurantID: 4,
    imageUrl:
      'https://www.swiggy.com/restaurants/meraki-ak-road-marol-sakinaka-mumbai-239500',
  },
  {
    restaurantName: 'Ganesh',
    location: 'Thane',
    rating: '5',
    contactNumber: 213352211,
    restaurantID: 5,
    imageUrl:
      'https://www.swiggy.com/restaurants/zakir-seekh-corner-besides-lucky-auto-garage-kurla-mumbai-562636',
  },
];

const OrderForm = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [foodItems, setFoodItems] = useState('');

  const handleRestaurantChange = (event) => {
    setSelectedRestaurant(event.target.value);
  };

  const handleFoodItemsChange = (event) => {
    setFoodItems(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Restaurant: ${selectedRestaurant}, Food Items: ${foodItems}`);
  };

  const selectedRestaurantInfo = restaurantInfo.find(
    (restaurant) => restaurant.restaurantName === selectedRestaurant
  );

  return (
    <div>
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="restaurant">Select a restaurant:</label>
          <select id="restaurant" onChange={handleRestaurantChange}>
            <option value="">Please select a restaurant</option>
            {restaurantInfo.map((restaurant) => (
              <option key={restaurant.restaurantID} value={restaurant.restaurantName}>
                {restaurant.restaurantName}
              </option>
            ))}
          </select>
        </div>
        {selectedRestaurantInfo && (
          <div>
            <img src={selectedRestaurantInfo.imageUrl} alt={selectedRestaurantInfo.restaurantName} />
          </div>
        )}
        <div>
          <label htmlFor="foodItems">Enter food items:</label>
          <input type="text" id="foodItems" onChange={handleFoodItemsChange} />
        </div>
        <button type="submit">Order Now</button>
      </form>
    </div>
  );
};

export default OrderForm;
