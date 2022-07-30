import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store, { persistor } from './features/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import Home from './features/home/Home'

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ChakraProvider>
                    <Home />
                </ChakraProvider>
            </PersistGate>
        </Provider>
    )
}

export default App
