import { Container } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import LiveView from '../liveView/LiveView'
import { RootState } from '../redux/store'
import InitialPage from './InitialPage'

const Home = () => {
    const initialized = useSelector(
        (state: RootState) => state.liveView.initialized
    )

    return <Container>{initialized ? <LiveView /> : <InitialPage />}</Container>
}

export default Home
