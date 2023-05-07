import React, { FormEvent, useEffect, useState } from 'react';
import { Box, FormHelperText, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ROUTES } from '../../../router/routes/routes.constant';
import { registerWithEmailAndPassword } from '../../../firebase/signIn';
import { auth } from '../../../firebase/config';
import AuthButtons from '../../../components/auth/AuthButtons/AuthButtons';
import { checkFields, IAuthFormErrors } from '../../../helpers/validation';
import InputField from '../../../components/InputField/InputField';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({} as IAuthFormErrors);
  const [serverError, setServerError] = useState<string | undefined>();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleRegistration = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    const serverMessError = await registerWithEmailAndPassword(fullName, email, password);
    setServerError(serverMessError);
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
      {serverError && (
        <FormHelperText sx={{ mb: 2, fontSize: '14px' }} error>
          {serverError}
        </FormHelperText>
      )}
      <InputField
        error={!!errors.fullName}
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
        sx={{ display: 'block' }}
        fullWidth
        required
        label="Full name"
        autoFocus
        helperText={errors.fullName}
      />
      <InputField
        error={!!errors.email}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        label="Email address"
        autoComplete="email"
        required
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
      <AuthButtons setError={setServerError} />
      <Typography>
        Already have an account? <NavLink to={ROUTES.LOGIN}>Login</NavLink> now.
      </Typography>
    </Box>
  );
};

export default RegistrationForm;
