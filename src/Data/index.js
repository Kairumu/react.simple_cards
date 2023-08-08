import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './Session';

const store = configureStore({
    reducer: {
        session : sessionReducer,
    },
});

export default store;
