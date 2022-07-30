import { createSlice } from '@reduxjs/toolkit'

// Slice for liveview data

export enum StreamType {
    TWITCH = 'twitch',
    YOUTUBE = 'youtube',
}

export interface StreamConfig {
    url: string
    streamType: StreamType
    name?: string
    showChat: boolean
}

export interface LiveViewState {
    initialized: boolean, // if not initialized show initial component
    streamConfig: StreamConfig,
    streamerConfig: StreamConfig
}

const initialState: LiveViewState = {
    initialized: false,
    streamConfig: {} as StreamConfig,
    streamerConfig: {} as StreamConfig,
}

const liveViewSlice = createSlice({
    name: 'liveView',
    initialState,
    reducers: {
        clear: () => initialState,
        setStreamerConfig: (state: LiveViewState, action: { payload: StreamConfig }) => ({ ...state, streamerConfig: action.payload }),
        setStreamConfig: (state: LiveViewState, action: { payload: StreamConfig }) => ({ ...state, streamConfig: action.payload }),
        initialize: (state: LiveViewState, action: { payload: [StreamConfig, StreamConfig] }) => ({
            ...state,
            initialized: true,
            streamerConfig: action.payload[0],
            streamConfig: action.payload[1]
        }),
    }
})

export const { clear, setStreamerConfig, setStreamConfig, initialize } = liveViewSlice.actions
const liveViewReducer = liveViewSlice.reducer
export default liveViewReducer