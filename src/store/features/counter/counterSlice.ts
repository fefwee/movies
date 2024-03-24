import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value:[]
}

const initialState: any = {
    value: [],
    movie:[]
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        },
        removeFavorite: (state,action: PayloadAction<any>) => {
            state.value = action.payload
        },
        addFavoriteMovie: (state, action: PayloadAction<any>) => {
            state.movie = action.payload
        },
        removeFavoriteMovie: (state,action: PayloadAction<any>) => {
            state.movie = action.payload
        },
     
    },
})

export const { addFavorite, removeFavorite,addFavoriteMovie,removeFavoriteMovie } = counterSlice.actions

export default counterSlice.reducer