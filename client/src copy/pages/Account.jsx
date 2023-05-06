import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVnGl5xul-CS2mq_aFJn10iEXyR7ULXR4",
  authDomain: "hackathon2023-1c134.firebaseapp.com",
  projectId: "hackathon2023-1c134",
  storageBucket: "hackathon2023-1c134.appspot.com",
  messagingSenderId: "1042241913911",
  appId: "1:1042241913911:web:0227eb7def037a000c2bb2",
  measurementId: "G-DCDTG6BW4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

function SignInWithGoogle(){
  signInWithRedirect(auth, provider)
  .then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const pfp = result.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("pfp", pfp);
  })
  .catch((error) => {
    console.log(error);
  })
};

function Account() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login submission
  }

  return (
    <React.Fragment>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>

      <style>
        {`
          body {
            background: linear-gradient(to bottom right, #28a745, #000000);
            background-repeat: no-repeat;
            height: 100vh;
          }
          .container {
            background-color: #FFFFFF;
          }
        `}
      </style> 

      <div class="container mt-4 border rounded p-3" style={{ maxWidth: 400 }}>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="inputEmail">Email address</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>

          <div class="form-group">
            <label for="inputPassword">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="inputPassword" placeholder="Password"/>
          </div>
          <div class = "text-center">
          <button type="submit" class="btn btn-primary">Log In</button>
          <button onClick = {SignInWithGoogle}>Sign in With Google</button>

          <p class="mt-2">
            Don't have an account? <a href="#">Sign up</a>
          </p>
          </div>
        </form>
      </div>

      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    </React.Fragment>
  );
}

export default Account;
