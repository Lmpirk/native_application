import { actions } from "./reducers";

import {
    authenticateUser,
    handleSignOut,
    signUp as registerUser,
} from "../../services/User.servives";

import { app } from "../../../firebaseConfig";
import { getAuth } from "firebase/auth";

//Get the authentication in order to make calls to the firebase.
const auth = getAuth(app);

export const signUp = (email, password) => async dispatch => {
    const userCredentials = await registerUser(auth, email, password);
};

export const login = (email, password) => async dispatch => {
    const userCredentials = await authenticateUser(auth, email, password);

    if (userCredentials) {
        dispatch(actions.storeUserData(userCredentials));
    }
};

/**
 * Clears the store of the user in order to log the user out.
 *
 * @returns
 */
export const logout = () => dispatch => {
    dispatch(actions.clearUser());
};
