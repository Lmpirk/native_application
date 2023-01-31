import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

import { actions } from "../store/user/reducers";

export const authenticateUser = async (firebaseAuth, email, password) => dispatch => {
    let credentials = "";
    signInWithEmailAndPassword(firebaseAuth, email, password)
        .then(userCredentials => {
            dispatch(actions.storeUserData(userCredentials));
        })
        .catch(error => alert(error.message));

    return credentials;
};

export const signUp = async (firebaseAuth, email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then(userCredentials => {
            alert('Successfull Registration')
        })
        .catch(error => alert(error.message));
};

export const handleSignOut = () => {
    signOut()
        .then(() => {
            console.log("Logged Out");
        })
        .catch(error => alert(error.message));
};
