import { useContext } from "react";
import { authContext } from "../Components/Login/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user ,loading } = useContext(authContext);


  if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
