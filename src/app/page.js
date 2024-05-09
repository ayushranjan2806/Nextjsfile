
// pages/_app.js

// pages/example.js

'use client'
// import store from '../app/store/store'
// import { Provider } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment } from './action/Action';

// const ExamplePage = () => {
//   // Access the count state from the Redux store
//   const count = useSelector(state => state.count);

//   // Initialize the useDispatch hook
//   const dispatch = useDispatch();

//   // Define functions to dispatch actions
//   const handleIncrement = () => {
//     dispatch(increment());
//   };

//   const handleDecrement = () => {
//     dispatch(decrement());
//   };

//   return (
//       <Provider store={store} >
//       <h1>Count: {count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//       </Provider>
   
//   );
// };

// export default ExamplePage;


import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>

    <Link href="./Productlist" style={{textDecoration:'none'}}>
      this is product rendering 
    </Link>
    </div>
  );
};

export default HomePage;
