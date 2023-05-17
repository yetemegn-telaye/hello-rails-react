import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


export const fetchRandomGreeting = createAsyncThunk(
    'greetings/fetchRandomGreeting',
    async () => {
        const response = await fetch('/get_random_greeting.json');
        const data = await response.json();
        return data.message;
    }
);

const initialState = {
    message: '',
};

const greetingSlice = createSlice({
    name: 'greetings',
    initialState,
    extraReducers(builder){
        builder
            .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
                state.message = action.payload;
            });
    },
});
export default greetingSlice.reducer;