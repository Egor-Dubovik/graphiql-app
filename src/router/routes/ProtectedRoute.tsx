import React, { FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet } from 'react-router';
import { auth } from '../../firebase/config';

interface IProtectedRouteProps {
  redirectPath: string;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ redirectPath }) => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
