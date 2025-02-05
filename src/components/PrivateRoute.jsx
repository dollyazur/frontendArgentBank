import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { loadUser } from '../redux/userSlice'; 

const PrivateRoute = ({ children }) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        if (!token && !user) {
            dispatch(loadUser());
        }
    }, [dispatch, token, user]);

    if (!token && !user) {
        return null; // Ou un composant de chargement
    }

    return token || user ? children : <Navigate to="/sign-in" />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;

