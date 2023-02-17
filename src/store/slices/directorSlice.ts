import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TDirectorState = {
    director: TDirector,
}

type TDirector = {
    name: string
}

const initialState: TDirectorState = {
    director: {
        name: ' - ',
    },
}

export const directorSlice = createSlice({
    name: 'director',
    initialState,
    reducers: {
        setDirector: (state, action: PayloadAction<TDirector>) => {
            state.director = action.payload
        }
    }
})


export const { setDirector } = directorSlice.actions

const directorReducer = directorSlice.reducer;

export default directorReducer; 