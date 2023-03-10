import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { actorApi, filmApi, recommendationsApi, reviewApi } from '../../API/Api'

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
export const getRecommendationsById = createAsyncThunk<any, any, any>("movie/getRecommendationsById", async function (id: number, { rejectWithValue }) {
    try {
        const data = await recommendationsApi.get(id);
        return data;
    } catch (error) {
        return rejectWithValue("Error");
    }
});


type TMovieState = {
    movie: TMovie ,
    isLoading: boolean
    actors: TActor[]
    reviews: TReview[]
    recommendations: TRecommendations[]
}
type TMovie = {
    title: string
    poster_path: string
    backdrop_path: string
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
        rating: number
    }
}
type TRecommendations = {
    id: number
    backdrop_path: string
    title: string
}


const initialState: TMovieState = {
    movie: {
        title: '',
        poster_path: '',
        backdrop_path: '',
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
    recommendations: []
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
        setRecommendations:  (state, action: PayloadAction<TRecommendations[]>) => {
            state.recommendations = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                getFilmById.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.movie = action.payload;
                },
            )
            .addCase(
                getActorById.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.actors = action.payload.cast;
                },
            )
            .addCase(
                getReviewById.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.reviews = action.payload.results;
                },
            )
            .addCase(
                getRecommendationsById.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.recommendations = action.payload.results;
                },
            )
    },
})







export const { setMovie } = movieSlice.actions

const movieReducer = movieSlice.reducer;

export default movieReducer; 