import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../api/apiUrl';

const initialState = {
    clients: [],
};

export const fetchClients = createAsyncThunk(
    'clients/fetchClients',
    async () => {
        const response = await axios.get(API_URL);
        return response.data.results;
    }
);

const clientSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchClients.fulfilled, (state, action) => {
            state.clients = action.payload.sort((a, b) => {
                return a.dob.age - b.dob.age;
            });
        });
    },
});

export const selectClients = (state) => state.clients.clients;

export default clientSlice.reducer;
