import { useState } from "react";
import initializeFirebaseApp from "../Components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";


initializeFirebaseApp();

const useFirebase=()=>{
    const[user,setUser] = useState({});
    const[isLoading,setIsLoading] = useState(true);
    const[authError,setAuthError] = useState('');


    const auth = getAuth();

    // register user
    const registerUser =(email,password)=>{
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    setAuthError('');
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    setAuthError(error.message);
    // .....
  })
  .finally(()=>setIsLoading(false));
    }


  //login
  const logIn = (email,password)=>{
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    setAuthError('');
      
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    setAuthError(error.message);
  }).finally(()=>setIsLoading(false));

  }
  

  useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user);
        } else {
            setUser({});
          
        }
        setIsLoading(false);

      });
      return() => unsubscribed
   },[])



    // signOut
    const logOut=  ()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
         }).catch((error) => {
        // An error happened.
});
    }


    return{
      
        user,
        isLoading,
        authError,
        registerUser,
        logOut,
        logIn
    }

}
export default useFirebase;