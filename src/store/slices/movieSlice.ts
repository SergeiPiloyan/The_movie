import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { filmApi } from '../../API/Api'
import type { RootState } from '../store'

export const getFilmById = createAsyncThunk<any, any, any>("movie/getFilmById", async function (id: number, { rejectWithValue }) {
    try {

        const data = await filmApi.get(id);
        console.log(data);

        return data;
    } catch (error) {
        return rejectWithValue("Error");
    }
});



type TMovieState = {
    movie: TMovie | null,
    isLoading: boolean
}

type TMovie = {
    title: string
    poster_path: any;
    backdrop_path: any
    release_date: string
    genres: Array<TGenres>
    tagline: string
    overview: string
}
type TGenres = {
    id: number | null,
    name: string
}

const initialState: TMovieState = {
    movie: {
        title: '',
        poster_path: null,
        backdrop_path: null,
        release_date: '',
        genres: [{
            id: null,
            name: ''
        }],
        tagline: '',
        overview: ''
    },
    isLoading: false,

}


export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovie: (state, action: PayloadAction<TMovie>) => {
            state.movie = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getFilmById.fulfilled,
            (state, action: PayloadAction<any>) => {
                console.log(action.payload);

                state.movie = (action.payload);

            }
        )
    },
})







export const { setMovie } = movieSlice.actions

const movieReducer = movieSlice.reducer;

export default movieReducer; 