import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from './layouts/MainLayout';
import { Today } from './pages/Today';
import { Since } from './pages/Since';
import { NotFound } from './pages/NoPage';
import ByDate from './pages/ByDate';



import './App.scss'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path='/' element={<Today />} />
                <Route path='/ByDate' element={<ByDate />} />
                <Route path='/Since' element={<Since />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
