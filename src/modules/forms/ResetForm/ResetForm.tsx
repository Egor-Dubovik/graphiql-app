import React, { FC, FormEvent, useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../router/routes/routes.constant';
import { sendPasswordReset } from '../../../firebase/resetPassword';
import { auth } from '../../../firebase/config';
import useResetFormStyles from './ResetForm.style';

const ResetForm: FC = () => {
  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const classes = useResetFormStyles();
  const navigate = useNavigate();

  const handleReset = (event: FormEvent) => {
    event.preventDefault();
    sendPasswordReset(email);
  };

  useEffect(() => {
    if (user) navigate(ROUTES.LOGIN);
  }, [user]);

  return (
    <>
      {false ? (
        <div>Loading...</div>
      ) : (
        <Box className="reset-form" onSubmit={handleReset} component="form">
          <>
            <TextField
              error={false}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              sx={{ mb: '20px', display: 'block' }}
              fullWidth
              required
              label="Email адрес"
              autoComplete="email"
              autoFocus
            />

            <Button className={classes['reset-form__button']} type="submit" variant="contained">
              Reset
            </Button>
            <Typography>
              Already have an account? <NavLink to={ROUTES.LOGIN}>Login</NavLink> now.
            </Typography>
          </>
        </Box>
      )}
    </>
  );
};

export default ResetForm;
