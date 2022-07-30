import { configureStore } from '@reduxjs/toolkit'
import persistStore from 'redux-persist/es/persistStore'
import liveViewReducer from '../liveView/liveViewSlice'
import themeReducer from '../theme/themeSlice'
import logger from 'redux-logger'

const store = configureStore({
    reducer: {
        // List of all reducers in the store
        liveView: liveViewReducer,
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
})


export default store
export const persistor = persistStore(store)
export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
