// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '././components/Navbar/Navbar';
import Home from '././components/Home/Home';
import About from '././components/About/About';
import Services from '././components/Services/Services';
import Contact from '././components/Contact/Contact';
import Footer from './components/Footer/Footer';
import EMDR from './components/Services/EMDR';
import CBT from './components/Services/CBT';
import REBT from './components/Services/REBT';
import ACT from './components/Services/ACT';
import SCHEMA from './components/Services/SCHEMA';
import MINDFULNESS from './components/Services/MINDFULNESS';


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/EMDR" element={<EMDR/>}/>
                <Route path="/services/CBT" element={<CBT/>}/>
                <Route path="/services/REBT" element={<REBT/>}/>
                <Route path="/services/ACT" element={<ACT/>}/>
                <Route path="/services/SCHEMA" element={<SCHEMA/>}/>
                <Route path="/services/MINDFULNESS" element={<MINDFULNESS/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;