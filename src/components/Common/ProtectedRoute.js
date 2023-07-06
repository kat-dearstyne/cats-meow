import {Navigate} from 'react-router-dom';

function ProtectedRoute({ component: Component, flag, redirectTo = '/login' }) {
    // redirect to the given path if flag is false, else render component
    return flag ? <Component /> : <Navigate to={redirectTo} replace />;
}

export default ProtectedRoute;