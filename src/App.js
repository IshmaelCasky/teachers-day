import logo from './logo.svg';
import './App.css';
import maam from './assets/maam.jpg';
import kumpas from './assets/kumpas.mp3';
import { TypeAnimation } from 'react-type-animation';
import './index.css';
import raining from './assets/raining.mp3';
import { Route, Routes } from 'react-router-dom';
import SirJem from './SirJem';
import MaamCarla from './MaamCarla';

function App() {
    return (
        
        <Routes>
            <Route index path="/sirjem" element={<SirJem />} />
            <Route path="/maamcarla" element={<MaamCarla />} />
        </Routes>
    )
}

export default App;
