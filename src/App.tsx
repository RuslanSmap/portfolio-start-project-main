import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import { About } from './layout/sections/about/About';
import { Contacts } from './layout/sections/contacts/Contacts';



function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <About />
            <Skills />
            <Works />
            <Contacts />
        </div>
    );
}

export default App;
