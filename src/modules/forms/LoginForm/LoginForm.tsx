import React, { FC, FormEvent, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Box, Typography } from '@mui/material';
import { ROUTES } from '../../../router/routes/routes.constant';
import AuthButtons from '../../../components/auth/AuthButtons/AuthButtons';
import { logInWithEmailAndPassword } from '../../../firebase/logIn';
import { auth } from '../../../firebase/config';
import { checkFields, IAuthFormErrors } from '../../../helpers/validation';
import InputField from '../../../components/InputField/InputField';

const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({} as IAuthFormErrors);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(ROUTES.MAIN);
    console.log(user);
  }, [user]);

  useEffect(() => {
    const newErrors = checkFields(email, password);
    setErrors(newErrors);
  }, [email, password]);

  const handleLogIn = (event: FormEvent): void => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      logInWithEmailAndPassword(email, password);
    }
  };

  return (
    <>
      {/* {error && <Typography color={'red'}>Error: {error.message}</Typography>} */}
      <Box className="login-form" onSubmit={handleLogIn} component="form">
        <InputField
          error={!!errors.email}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          label="Email address"
          autoComplete="email"
          required
          autoFocus
          helperText={errors.email}
        />
        <InputField
          error={!!errors.password}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          sx={{ display: 'block' }}
          fullWidth
          label="Password"
          type="password"
          required
          helperText={errors.password}
        />
        <AuthButtons />
        <Box>
          <Typography>
            Don&apos;t have an account? <NavLink to={ROUTES.REGISTRATION}>Register</NavLink> now.
          </Typography>
          <NavLink to={ROUTES.RESET}>Forgot password</NavLink>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;
