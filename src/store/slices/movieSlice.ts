import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { actorApi, filmApi } from '../../API/Api'

export const getFilmById = createAsyncThunk<any, any, any>("movie/getFilmById", async function (id: number, { rejectWithValue }) {
    try {
        const data = await filmApi.get(id);
        return data;
    } catch (error) {
        return rejectWithValue("Error");
    }
});

export const getActorById = createAsyncThunk<any, any, any>("movie/getActorById", async function (id: number, { rejectWithValue }) {
    try {
        const data = await actorApi.get(id);
        return data;
    } catch (error) {
        return rejectWithValue("Error");
    }
});



type TMovieState = {
    movie: TMovie | null,
    isLoading: boolean
    actors: TActor[]
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
type TActor = {
    id: number
    name: string
    photo: string
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
        overview: '',
    },
    actors: [],
    isLoading: false,
}


export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovie: (state, action: PayloadAction<TMovie>) => {
            state.movie = action.payload
        },
        setActors: (state, action: PayloadAction<TActor[]>) => {
            state.actors = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                getFilmById.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.movie = (action.payload);
                },
            )
            .addCase(
                getActorById.fulfilled,
                (state, action: PayloadAction<any>) => {
                    console.log('data', action.payload)
                    state.actors = (action.payload);
                },
            )
    },
})







export const { setMovie } = movieSlice.actions

const movieReducer = movieSlice.reducer;

export default movieReducer; 