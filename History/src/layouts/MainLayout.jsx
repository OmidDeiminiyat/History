import { Outlet } from 'react-router-dom';
import  {Navbar}  from '../components/Navigation';
import { Header } from '../components/header/Header'; 
import {Since} from '../pages/Since';

export function MainLayout() {
    return(
        <>
        <Header />
        <Navbar />
        <main>
  
        <Since />
 
            <Outlet />
        </main>

        </>
    );
}