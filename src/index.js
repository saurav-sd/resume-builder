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
import { getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers/rootReducer';

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
  
const middleware = (getDefaultMiddleware) => {
  return [
    thunk.withExtraArgument({ getFirebase, getFirestore }), // Add any extra arguments here
    // Add any other middleware you need
    ...getDefaultMiddleware()
  ];
};
const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => middleware(getDefaultMiddleware), // Use getDefaultMiddleware to add default middleware
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools Extension in development mode
});
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