import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RouterProvider } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

import { auth } from '../firebase/config';
import router from '../router/router';
import './App.scss';

function App() {
  const [user, isLoading] = useAuthState(auth);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="App">
          <RouterProvider router={router} />
        </div>
      )}
    </>
  );
}

export default App;
