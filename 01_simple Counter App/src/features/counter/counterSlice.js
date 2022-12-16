import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
};

export const counterSlice = createSlice({
    name: 'hitungzz',
    initialState,
    reducers: {
        plusValue: (state) => {
            state.count += 1;
        },
        minusValue: (state) => {
            state.count -= 1;
        },
        resetValue: (state) => {
            state.count = 0;
        },
        increaseAmount: (state, action) => {
            state.count += action.payload;
        }
    }
});

export const { plusValue, minusValue, resetValue, increaseAmount } = counterSlice.actions;

export default counterSlice.reducer;
