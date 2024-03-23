import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    user: {
        email: string | null;
        refreshToken: string | null;
    } | null;
}

const initialState: UserState = {
    user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Modify the backend to send user data on login and then update this code
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;