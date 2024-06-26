import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {

    const navigation = useNavigation(); // for loading sign;

    return (
        <div>

            {/* children use korle <outlet/> home component e na dile asbe na kichu e */}
            {/* majhe <outlet></outlet> deya, that means header and footer still thakbe and every click e just outlet er part tuku change hobe */}
            <Header></Header>
            <h1>This is the Home Component</h1>
            {
                navigation.state === "loading" ? <p>Loading...</p>:<Outlet></Outlet>
                // using if else statement;
            }
            {/* <Outlet></Outlet>  */}
            <Footer></Footer>
        </div>
    );
};

export default Home;