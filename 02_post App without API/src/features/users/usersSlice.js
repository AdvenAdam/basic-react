import { createSlice } from '@reduxjs/toolkit';
const initialState = [
    { id: '0', name: 'udin' },
    { id: '1', name: 'budi' },
    { id: '2', name: 'santoso' }
];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
