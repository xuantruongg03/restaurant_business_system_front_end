import React from 'react';
import { Route, Routes } from "react-router-dom";
import RootLayout from './layout/root';
import Home from './pages/home';
import Menu2 from './pages/menu2';
import Menu from './pages/menu';

function App() {


    return (
        <div className="App">
            <Routes>
                {/* <Route path="/" element={<RootLayout><Menu /></RootLayout>} /> */}
                <Route path="/" index element={<RootLayout><Home /></RootLayout>} />
                <Route path="/menu" element={<RootLayout><Menu /></RootLayout>} />
            </Routes>
        </div>
    );
}

export default App;
