import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AllItem from './Components/AllItem';
import CreateItem from './Components/CreateItem';
import UpdateItem from './Components/UpdateItem';

function App() {
    return (
        <div >
            <Router>
                <Routes>
                    <Route extact path="/" element={<AllItem />} />
                    <Route path="/item" element={<CreateItem />} />
                    <Route path="/items/:id" element={<UpdateItem />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;