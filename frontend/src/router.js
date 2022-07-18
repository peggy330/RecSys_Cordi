import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
