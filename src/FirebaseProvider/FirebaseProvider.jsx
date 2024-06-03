

// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// // import auth from "../firebase/firebase.config";
// import { createContext, useEffect, useState } from 'react';
// import { GoogleAuthProvider} from 'firebase/auth';



// export const AuthContext = createContext(null);

// // socal auth provider
// const googleProvider = new GoogleAuthProvider();



// const FirebaseProvider = ({children}) => {
// const [user, setUser] = useState(null);
// const [loading, setLoading] = useState(true);

// // create User
// const createUser = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password)
//  }

// // Update user Profile

// const  updateUserProfile = (name , image)=>{
//     return updateProfile(auth.currentUser, {
//         displayName: name, photoURL: image
//       })
// }

// //  Sign In user
// const signInUser = (email, password)=>{
//    return signInWithEmailAndPassword(auth, email, password)
// }
// // Sign out
// const logOut = ()=>{
//     setUser(null)
//     signOut(auth)
// }
// // google Login
// const googleLogin = () =>{
//  return signInWithPopup(auth, googleProvider)
// }

 
//  useEffect(()=>{
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//           setUser(user)
//         } 
//       });
//  },[])
 
//      const authInfo = {
//           user,
//           loading,
//          createUser,
//          signInUser,
//          googleLogin,
//          logOut,
//          updateUserProfile

//      }
//     return (
//         <AuthContext.Provider value={authInfo}>
//          {children}
//       </AuthContext.Provider>
//     );
// };

// export default FirebaseProvider;
// // uthProvider.prototypes = {
// //     children: PropTypes.node,
// // }