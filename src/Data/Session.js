import { createSlice } from '@reduxjs/toolkit';

const data = createSlice({
    name : "session",
    initialState : {
        user    : null,
    },
    reducers : {
        clearSession : (state, action) => {
            state.user   = null;
        },
        setUser : (state, action) => {
            state.user = action.payload;
        },
    },
});

export default data.reducer;
export const session = state => state.session;
export const { clearSession, } = data.actions;
export const { setUser, } = data.actions;
