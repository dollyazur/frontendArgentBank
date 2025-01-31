import PropTypes from 'prop-types'; // Ajout pour la validation des props
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = useSelector((state) => state.user.token);

    return token ? children : <Navigate to="/" />;
};

// ✅ Validation de la prop `children`
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
