import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type TFilmState = {
    film: {},
    isLoading: boolean,
    error: string,
}

const initialState: TFilmState = {
    film: {},
    isLoading: false,
    error: " ",
}

export const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        getFilm: (state, action: PayloadAction<TFilmState>) => {
            state.film = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getFilm, (state, action) => {
            state.isLoading = true;
            state.error = "";
            state.film = action.payload
        
        })
    }
})





export const { getFilm } = filmSlice.actions

const filmReducer = filmSlice.reducer;

export default filmReducer; 