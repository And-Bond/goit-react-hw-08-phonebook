import { createAsyncThunk } from "@reduxjs/toolkit";
import { register } from "shared/api";
export const authRegister = createAsyncThunk(
    'auth/register',
    async(newUser, thunkApi) => {
        try {
            const data = await register(newUser)
            return data
        } catch (error) {
            thunkApi.rejectWithValue(error)
        }
    }
)

