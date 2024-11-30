import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRouter = ( {element} ) => {
    const { isAuthenticated } = useAuth();

    if(!isAuthenticated){
//    alert('Sesion iniciada');
return isAuthenticated ? element : <Navigate to='/' replace/>
    }
return <Outlet />

};

export default ProtectedRouter;