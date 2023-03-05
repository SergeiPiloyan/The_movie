import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { actorApi, filmApi, reviewApi } from '../../API/Api'

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
export const getReviewById = createAsyncThunk<any, any, any>("movie/getReviewById", async function (id: number, { rejectWithValue }) {
    try {
        const data = await reviewApi.get(id);
        return data;
    } catch (error) {
        return rejectWithValue("Error");
    }
});



type TMovieState = {
    movie: TMovie | null,
    isLoading: boolean
    actors: TActor[]
    reviews: TReview[]
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
    order: number
    name: string
    profile_path: string
    character: string
}

type TReview = {
    content: string
    author: string
    author_details: {
        avatar_path: string
    }

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
    reviews: [],
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
        setReviews:  (state, action: PayloadAction<TReview[]>) => {
            state.reviews = action.payload
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
                    state.actors = (action.payload.cast);
                },
            )
            .addCase(
                getReviewById.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.reviews = (action.payload.results);
                },
            )
    },
})







export const { setMovie } = movieSlice.actions

const movieReducer = movieSlice.reducer;

export default movieReducer; 