import { createSlice } from "@reduxjs/toolkit";
import { deleteUserCookies, setUserCookies } from "../../utils/tokens";

interface UserState {
    user: {
        userId: string|null;
        email: string | null;
        accessToken: string | null;
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
            setUserCookies(action.payload);
            
        },
        logout: (state) => {
            state.user = null;
            deleteUserCookies();
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;