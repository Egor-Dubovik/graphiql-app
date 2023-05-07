import React, { FC, FormEvent, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../router/routes/routes.constant';
import { sendPasswordReset } from '../../../firebase/resetPassword';
import { auth } from '../../../firebase/config';
import { checkFields, IAuthFormErrors } from '../../../helpers/validation';
import { LoadingButton } from '@mui/lab';
import InputField from '../../../components/InputField/InputField';

const ResetForm: FC = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({} as IAuthFormErrors);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const handleReset = (event: FormEvent) => {
    event.preventDefault();
    sendPasswordReset(email);
  };

  useEffect(() => {
    setErrors(checkFields(email));
  }, [email]);

  useEffect(() => {
    if (user) navigate(ROUTES.LOGIN);
  }, [user]);

  return (
    <Box className="reset-form" onSubmit={handleReset} component="form">
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
      <LoadingButton
        loading={loading}
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mb: '15px' }}
      >
        Reset
      </LoadingButton>
      <Typography>
        Already have an account? <NavLink to={ROUTES.LOGIN}>Login</NavLink> now.
      </Typography>
    </Box>
  );
};

export default ResetForm;
