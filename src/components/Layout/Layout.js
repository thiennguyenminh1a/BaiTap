import React from 'react';
import Aux from '../../hoc/Aux'
import './Layout.css'
import Header from '../Header/Header';

const Layout = (props) => {
    return(
        <Aux>
            <div>
                <Header/>
            </div>
            <main className="App">
                {props.children}
            </main>
           
        </Aux>
    )
    
}

export default Layout;