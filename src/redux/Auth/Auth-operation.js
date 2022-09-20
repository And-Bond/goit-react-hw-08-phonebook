import { createAsyncThunk } from "@reduxjs/toolkit";
import { register } from "shared/api";
export const authRegister = createAsyncThunk(
    'auth/register',
    async(newUser, thunkApi) => {
        try {
            console.log('works-operation')
            const data = await register(newUser)
            console.log(data)
            const {user} = data
            if(user !== undefined){
                console.log('user is not undefind')
                return data
            }
            console.log('user is undefind')
            thunkApi.rejectWithValue('Error')
        } catch (error) {
            thunkApi.rejectWithValue(error)
        }
    }
)

