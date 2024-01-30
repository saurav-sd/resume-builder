import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import thunk  from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers/rootReducer';
import { composeWithDevTools } from'redux-devtools-extension';

const firebaseConfig = {
    apiKey: "AIzaSyCC5hWWhjC-P0b6eBLatBd1sSpeF-b7sqg",
    authDomain: "resume-builder-b9b3e.firebaseapp.com",
    projectId: "resume-builder-b9b3e",
    storageBucket: "resume-builder-b9b3e.appspot.com",
    messagingSenderId: "703648286281",
    appId: "1:703648286281:web:0d577a98e54f66b2c9e198",
    measurementId: "G-XH0CJC71G0"
};
  
firebase.initializeApp(firebaseConfig);
firebase.firestore()


// const middleware = [
//     thunk.withExtraArgument({ getFirebase, getFirestore }), // Use withExtraArgument here
//     // other middleware if any
// ];

// const store = createStore(
//     rootReducer,
//     composeWithDevTools(
//       applyMiddleware(...middleware),
//       reduxFirestore(firebase)
//       // other store enhancers if any
//     )
// );
  
const reduxStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })), reduxFirestore(firebase)));  //binding for redux to get firestore

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={reduxStore}>
    <BrowserRouter>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={reduxStore.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
        <App />
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>
);

