import { Outlet } from 'react-router-dom';
import  {Navbar}  from '../components/Navigation';
import { Header } from '../components/header/Header'; 
import {Since} from '../pages/Since';
import {useLocation} from 'react-router-dom';
import { ByDate } from '../pages/ByDate';
import SearchForm from '../components/search/SearchForm';

export function MainLayout() {
    const location = useLocation();
    console.log(location);
    
    let title = '';
    if (location.pathname === '/ByDate') {
        title = 'On: ';
    } else if (location.pathname === '/Since') {
        title = 'Since';
    } else if(location.pathname === '/') {
        title = 'On this day';
    }
    

    return(
        <>
        <Header title={title}  />
       

        <main>
         <Since />
         <Outlet />
        </main>

        </>
    );
}