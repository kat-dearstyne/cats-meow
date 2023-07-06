import Parse from 'parse';
import authService from "../../services/AuthServices";
import {useState} from "react";

// Checks whether user is logged in
function useAuth() {
    const [user, setUser] = useState(Parse.User.current());

    const loggedIn = Boolean(user);
    const handleUserAuthentication = async (email, password) => {
        const userSignedIn = await authService.login(email, password);
        setUser(userSignedIn);
    };

    return { user, loggedIn, handleUserAuthentication };
}

export default useAuth;