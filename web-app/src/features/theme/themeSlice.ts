import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export interface ThemeState {
    theme: string
}

const initialState = {
    theme: 'light'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state: ThemeState, action: { payload: string }) => ({ ...state, theme: action.payload }),
    }
})

const persistConfig = {
    key: 'theme',
    storage: storage,
}

export const { setTheme } = themeSlice.actions
const themeReducer = persistReducer(persistConfig, themeSlice.reducer)
export default themeReducer
