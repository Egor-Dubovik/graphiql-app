import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { createReduxStore } from './store/store';
import { auth } from '../firebase/config';
import router from '../router/router';
import Loader from '../components/Loader/Loader';
import './App.scss';

function App() {
  const [user, isLoading] = useAuthState(auth);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Provider store={createReduxStore()}>
          <div className="App">
            <RouterProvider router={router} />
          </div>
        </Provider>
      )}
    </>
  );
}

export default App;
