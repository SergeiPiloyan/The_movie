import { configureStore } from '@reduxjs/toolkit'
import filmReducer from './slices/filmSlice';
import movieReducer from './slices/movieSlice'
import personReducer from './slices/personSLice';

const store = configureStore({
    reducer: {
        movie: movieReducer,
        film: filmReducer,
        person: personReducer,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch