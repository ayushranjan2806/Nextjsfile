// reducer.js
'use client'
import { INCREMENT, DECREMENT } from '../action/Action';

// Initial state
const initialState = {
  count: 0
};

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default reducer;
