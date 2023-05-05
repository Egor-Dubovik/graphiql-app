import React, { FC, FormEvent, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Box, FormHelperText, TextField, Typography } from '@mui/material';
import { ROUTES } from '../../../router/routes/routes.constant';
import AuthButtons from '../../../components/auth/AuthButtons/AuthButtons';
import { logInWithEmailAndPassword } from '../../../firebase/logIn';
import { auth } from '../../../firebase/config';
import { validateEmail, validatePassword } from '../../../helpers/validation';

interface IFormErrors {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({} as IFormErrors);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(ROUTES.MAIN);
    console.log(user);
  }, [user]);

  const checkFielsd = (): void => {
    const newErrors = {} as IFormErrors;
    if (email && !validateEmail(email)) {
      newErrors.email = 'Incorrect email';
    }
    if (password && !validatePassword(password)) {
      newErrors.password = 'Password must contain at least 6 characters';
    }
    setErrors(newErrors);
  };

  useEffect(() => {
    checkFielsd();
  }, [email, password]);

  const handleLogIn = (event: FormEvent): void => {
    event.preventDefault();
    setErrors({} as IFormErrors);
    if (Object.keys(errors).length === 0) {
      logInWithEmailAndPassword(email, password);
      console.log(55);
    }
  };

  return (
    <>
      {/* {error && <Typography color={'red'}>Error: {error.message}</Typography>} */}

      <Box className="login-form" onSubmit={handleLogIn} component="form">
        <Box sx={{ mb: '20px' }}>
          <TextField
            error={!!errors.email}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            sx={{ display: 'block' }}
            fullWidth
            label="Email address"
            autoComplete="email"
            required
            autoFocus
          />
          {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}
        </Box>

        <Box sx={{ mb: '20px' }}>
          <TextField
            error={!!errors.password}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            sx={{ mb: '20px', display: 'block' }}
            fullWidth
            label="Password"
            type="password"
            required
          />
          {errors.password && <FormHelperText error>{errors.password}</FormHelperText>}
        </Box>

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
