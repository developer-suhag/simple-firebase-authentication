import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import "./App.css";
import initializeAuthentication from "./Firebase/firebase.initialize";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();

function App() {
  const [user, setUser] = useState({});
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const { displayName, email, photoURL } = result.user;
      const loggedInUser = {
        name: displayName,
        email: email,
        img: photoURL,
      };
      setUser(loggedInUser);
    });
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
      const { displayName, email, photoURL } = result.user;
      const loggedInUser = {
        name: displayName,
        email: email,
        img: photoURL,
      };
      setUser(loggedInUser);
    });
  };
  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  return (
    <div className="App">
      {!user.name ? (
        <div>
          <button onClick={handleGoogleSignIn}>Sign in with Google</button>
          <button onClick={handleGithubSignIn}>Sign in with Github</button>
        </div>
      ) : (
        <button onClick={handleSignOut}>Sign Out</button>
      )}
      <br />
      <br />
      {user.name && (
        <div>
          <img style={{ borderRadius: "50%" }} src={user.img} alt="" />
          <h3>Welcome {user.name}</h3>
          <p>I know your email address: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
