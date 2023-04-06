import { useState } from "react";
import initializeFirebaseApp from "../Components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";




initializeFirebaseApp();
  
const useFirebase=()=>{
    const[user,setUser] = useState({});
    const[isLoading,setIsLoading] = useState(true);
    const[authError,setAuthError] = useState('');


  


     const location = useLocation();
     const navigate = useNavigate();


     const from = location.state?.from?.pathname || "/";

    const auth = getAuth();

    // register user
    const registerUser =(name,email,password)=>{
      console.log(name);
      setIsLoading(true);
        createUserWithEmailAndPassword(auth,email, password)
  .then((userCredential) => {
    // Signed in 
    const newLoginData={email,displayName:name}
    setUser(newLoginData)
    // const user = userCredential.user;
    

    updateProfile(auth.currentUser,{
      displayName:name
      
    }).then(() => {
      // Update successful
    }).catch((error) => {
      // Error occurred
    });

    navigate(from, { replace: true });
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


    // sign in with google

   

    


  //login
  const logIn = (email,password)=>{
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;

    navigate(from, { replace: true });

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
         console.log(user);
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