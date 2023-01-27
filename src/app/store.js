import { configureStore } from '@reduxjs/toolkit';
import clientReducer from '../features/clients/clientSlice';

export const store = configureStore({
    reducer: {
        clients: clientReducer,
    },
    devTools: true,
});
