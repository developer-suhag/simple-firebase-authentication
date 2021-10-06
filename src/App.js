import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./App.css";
import initializeAuthentication from "./Firebase/firebase.initialize";

initializeAuthentication();
const provider = new GoogleAuthProvider();

function App() {
  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  };
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
}

export default App;
