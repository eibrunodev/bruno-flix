import { BrowserRouter, Routes, Route} from 'react-router-dom';

function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/filme/:id" element={<h1>Filme</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;