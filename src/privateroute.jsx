import { Navigate } from "react-router-dom";
import { tokenSignal } from './shared/userSignal.jsx';

function PrivateRoute({ children }) {
    if (!tokenSignal.value) {
        return <Navigate to="login" />;
    }
    return children;
}
export default PrivateRoute;