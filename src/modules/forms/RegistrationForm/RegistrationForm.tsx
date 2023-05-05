import React, { FormEvent, useEffect, useState } from 'react';
import { Box, FormHelperText, TextField, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ROUTES } from '../../../router/routes/routes.constant';
import { registerWithEmailAndPassword } from '../../../firebase/signIn';
import { auth } from '../../../firebase/config';
import AuthButtons from '../../../components/auth/AuthButtons/AuthButtons';
import { checkFields, IAuthFormErrors } from '../../../helpers/validation';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({} as IAuthFormErrors);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleRegistration = (event: FormEvent) => {
    event.preventDefault();
    registerWithEmailAndPassword(fullName, email, password);
  };

  useEffect(() => {
    const newErrors = checkFields(email, password, fullName);
    setErrors(newErrors);
  }, [email, password, fullName]);

  useEffect(() => {
    if (user) navigate(ROUTES.MAIN);
    console.log(user);
  }, [user]);

  return (
    <Box onSubmit={handleRegistration} component="form">
      <Box sx={{ mb: '20px' }}>
        <TextField
          error={!!errors.fullName}
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          sx={{ display: 'block' }}
          fullWidth
          required
          label="Full name"
          autoFocus
        />
        {errors.fullName && <FormHelperText error>{errors.fullName}</FormHelperText>}
      </Box>

      <Box sx={{ mb: '20px' }}>
        <TextField
          error={!!errors.email}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          sx={{ display: 'block' }}
          fullWidth
          required
          label="Email address"
          autoComplete="email"
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
          required
          label="Password"
          type="password"
        />
        {errors.password && <FormHelperText error>{errors.password}</FormHelperText>}
      </Box>

      <AuthButtons />
      <Typography>
        Already have an account? <NavLink to={ROUTES.LOGIN}>Login</NavLink> now.
      </Typography>
    </Box>
  );
};

export default RegistrationForm;
