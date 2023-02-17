import { configureStore } from '@reduxjs/toolkit'
import directorReducer from './slices/directorSlice';
import movieReducer from './slices/movieSlice'

const store = configureStore({
    reducer: {
        movie: movieReducer,
        director: directorReducer, 
    }
})

export default store; 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch