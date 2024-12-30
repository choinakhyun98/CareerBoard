import TopNav from '../components/TopNav.js';
import HomeContent from '../components/HomeContent.js';
import {useLocation} from 'react-router';

function Home(){
    
    const {state} = useLocation();

    return(
        <>
        <TopNav state={state}></TopNav>
        <HomeContent></HomeContent>
        </>
    )
}

export default Home