
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

const PrivateRoute = ({children}) => {

    const {user} = useAuth()
    const location = useLocation()

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoute.propTypes = {
    children:PropTypes.node
};

export default PrivateRoute;