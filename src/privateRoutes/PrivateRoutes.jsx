// import { Navigate } from 'react-router-dom';
import { AuthContext } from '@/providers/AuthProvider';
// import Loading from '@/components/Sheared/Loading';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if (loading) {
        return <h2> Loading.....</h2>
    }
    if (user) {
        return children
    }
    return <Navigate to='/auth'></Navigate>
};


PrivateRoutes.propTypes = {
   children: PropTypes.node.isRequired
  };

export default PrivateRoutes;