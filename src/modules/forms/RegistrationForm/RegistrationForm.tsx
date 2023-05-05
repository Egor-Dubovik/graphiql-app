import React, { FormEvent, useEffect, useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ROUTES } from '../../../router/routes/routes.constant';
import { registerWithEmailAndPassword } from '../../../firebase/signIn';
import { auth } from '../../../firebase/config';
import AuthButtons from '../../../components/auth/AuthButtons/AuthButtons';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleRegistration = (event: FormEvent) => {
    event.preventDefault();
    if (!name) {
      alert('Please enter name');
      return;
    }
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (user) navigate(ROUTES.MAIN);
    console.log(user);
  }, [user]);

  return (
    <>
      {false ? (
        <div>Loading...</div>
      ) : (
        <Box onSubmit={handleRegistration} component="form">
          <TextField
            error={false}
            value={name}
            onChange={(event) => setName(event.target.value)}
            sx={{ mb: '20px', display: 'block' }}
            fullWidth
            required
            label="Full name"
            autoFocus
          />
          <TextField
            error={false}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            sx={{ mb: '20px', display: 'block' }}
            fullWidth
            required
            label="Email address"
            autoComplete="email"
            autoFocus
          />

          <TextField
            error={false}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            sx={{ mb: '20px', display: 'block' }}
            fullWidth
            required
            label="Password"
            type="password"
          />
          <AuthButtons />
          <Typography>
            Already have an account? <NavLink to={ROUTES.LOGIN}>Login</NavLink> now.
          </Typography>
        </Box>
      )}
    </>
  );
};

export default RegistrationForm;
