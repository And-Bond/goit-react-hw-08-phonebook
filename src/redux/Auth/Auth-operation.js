import { createAsyncThunk } from "@reduxjs/toolkit";
import { register, logIn } from "shared/api";
export const authRegister = createAsyncThunk(
    'auth/register',
    async(newUser, {rejectWithValue}) => {
        try {
            const {user, token} = await register(newUser)
            return {user, token}
        } catch ({response}) {
            const {data} = response
            const keyValue = data.keyValue.email
            return rejectWithValue(`${keyValue} is not resolved, try again or check if ure registered yet`)
        }
    }
)

export const authLogin = createAsyncThunk(
    'auth/login',
    async(newLogin, {rejectWithValue}) => {
        
        try {
            const {user, token} = await logIn(newLogin)
            if(!{user, token}){
                return rejectWithValue('Login failed, invalid email or password. Check if ure registered')
            }
            return {user, token} 
        } catch (error) {
            return rejectWithValue('Login failed, invalid email or password. Check if ure registered')
        }
    }
)
