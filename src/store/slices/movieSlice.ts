import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type TMovieState = {
    movie: TMovie,
    isLoading: boolean
}

type TMovie = {
    name: string
    direction: string
}

const initialState: TMovieState = {
    movie: {
        name: 'Terminator',
        direction: ' - '
    },
    isLoading: false
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovie: (state, action: PayloadAction<TMovie>) => {
            state.movie = action.payload
        }
    }
})


export const { setMovie } = movieSlice.actions

const movieReducer = movieSlice.reducer;

export default movieReducer; 