import React, { FC, FormEvent, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Box, TextField, Typography } from '@mui/material';
import { ROUTES } from '../../../router/routes/routes.constant';
import AuthButtons from '../../../components/auth/AuthButtons/AuthButtons';
import { logInWithEmailAndPassword } from '../../../firebase/logIn';
import { auth } from '../../../firebase/config';

const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(ROUTES.MAIN);
    console.log(user);
  }, [user]);

  const handleLogIn = (event: FormEvent): void => {
    event.preventDefault();
    logInWithEmailAndPassword(email, password);
  };

  return (
    <>
      {/* {error && <Typography color={'red'}>Error: {error.message}</Typography>} */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Box className="login-form" onSubmit={handleLogIn} component="form">
          <TextField
            error={false}
            // helperText=""
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            sx={{ mb: '20px', display: 'block' }}
            fullWidth
            label="Email address"
            autoComplete="email"
            required
            autoFocus
          />
          <TextField
            error={false}
            // helperText=""
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            sx={{ mb: '20px', display: 'block' }}
            fullWidth
            label="Password"
            type="password"
            required
          />

          <AuthButtons />
          <Box>
            <Typography>
              Don&apos;t have an account? <NavLink to={ROUTES.REGISTRATION}>Register</NavLink> now.
            </Typography>
            <NavLink to={ROUTES.RESET}>Forgot password</NavLink>
          </Box>
        </Box>
      )}
    </>
  );
};

export default LoginForm;
