import './App.css'
import {Header} from './layout/header/Header';
import {Main} from "./layout/sections/main/Main.tsx";
import {Works} from "./layout/sections/works/Works.tsx";
import {Testimony} from "./layout/sections/testimony/Testimony.tsx";
import {Contact} from "./layout/sections/contact/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Services} from "./layout/sections/services/Services.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Particle} from "./components/particle/Particle.tsx";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn.tsx";


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Works/>
            <About/>
            <Services/>
            <Testimony/>
            <Contact/>
            <Footer/>
            <GoTopBtn/>
        </div>
    )
}

export default App

