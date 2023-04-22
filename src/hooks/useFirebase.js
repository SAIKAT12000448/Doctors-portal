import { useState } from "react";
import initializeFirebaseApp from "../Components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged,signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup,updateProfile } from "firebase/auth";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";




initializeFirebaseApp();
  
const useFirebase=()=>{
    const[user,setUser] = useState({});
    const[isLoading,setIsLoading] = useState(true);
    const[authError,setAuthError] = useState('');


  
    const Googleprovider = new GoogleAuthProvider();


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
    saveUser(email,name,"POST");
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

  // google sign in

  const signInWithGoogle=()=>{
    signInWithPopup(auth, Googleprovider)
    .then((result) => {
      
      setIsLoading(true);
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      const user = result.user;
      saveUser(user.email,user.displayName,"PUT");

      navigate(from, { replace: true });
      setAuthError('');

    
    }).catch((error) => {
  
      // const errorCode = error.code;
      // const errorMessage = error.message;
  
      // const email = error.customData.email;
    
      // const credential = GoogleAuthProvider.credentialFromError(error);
      setAuthError(error.message)
  }).finally(()=>setIsLoading(false));
}
  

  useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user);
         setIsLoading(false)
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
        setIsLoading(true)

        signOut(auth).then(() => {
        // Sign-out successful.
         }).catch((error) => {
        // An error happened.
});
    }



    // save user information
    const saveUser = (email,name,method)=>{
      const user = {email,name};

      fetch("http://localhost:5000/users" ,{
        method:method,
        headers:{
          "content-type":"application/json"
        },

        body:JSON.stringify(user)
      })
      .then()


    }


    return{
      
        user,
        isLoading,
        authError,
        registerUser,
        signInWithGoogle,
        logOut,
        logIn
    }

}
export default useFirebase;