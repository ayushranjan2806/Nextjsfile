// store.js

import { createStore } from 'redux';
import reducer from '../reducers/Reducers';

// Create the Redux store
const store = createStore(reducer);

export default store;
