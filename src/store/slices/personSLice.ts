import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { filmApi, personApi } from '../../API/Api'
import type { RootState } from '../store'


export const getPersonById = createAsyncThunk<any, any, any>("person/getPersonById", async function (personId: number, { rejectWithValue }) {
    try {
        const data = await personApi.get(personId);

        return data;
    } catch (error) {
        return rejectWithValue("Error");
    }
});



type TPersonState = {
    person: TPerson,
}

type TPerson = {
 name: string
}


const initialState: TPersonState = {
   person: {
    name: ''
   }
}


export const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        setPerson: (state, action: PayloadAction<TPerson>) => {
            state.person = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getPersonById.fulfilled,
            (state, action: PayloadAction<any>) => {
                console.log(action.payload);

                state.person = (action.payload);

            }
        )
    },
})


export const { setPerson } = personSlice.actions

const personReducer = personSlice.reducer;

export default personReducer; 