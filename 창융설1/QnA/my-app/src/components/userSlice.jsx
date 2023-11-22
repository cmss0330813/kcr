import { createSlice } from "@reduxjs/tookit";

const userSlice = createSlice({
        name: "user",
        initialState: {
            name: "",
            id: "",
            isLoading: false, // optional
            isLogin: null,
        },
        reducers: {
            loginUser: (state, action) => {
                state.name = action.payload.name;
                state.id = action.payload.id;
                state.isLogin = true;
            },

            clearUser: (state) => {
                state.name = "";
                state.id = "";
                state.isLogin = false;
            },
        },
    });

export default { loginUser, cleanUser } = userSlice.actions;
export default userSlice.reducer;



//redux 설치 필요**