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
import { useTranslation } from 'react-i18next';

const ResetForm: FC = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({} as IAuthFormErrors);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleReset = (event: FormEvent) => {
    event.preventDefault();
    sendPasswordReset(email);
  };

  useEffect(() => {
    setErrors(checkFields(email));
  }, [email]);

  useEffect(() => {
    if (user) navigate(ROUTES.LOGIN);
  }, [user, navigate]);

  return (
    <Box className="reset-form" onSubmit={handleReset} component="form">
      <InputField
        error={!!errors.email}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        sx={{ mb: 2 }}
        label={t('form-email')}
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
        {t('title-reset')}
      </LoadingButton>
      <Typography>
        {t('account')} <NavLink to={ROUTES.LOGIN}>{t('entry')}</NavLink> {t('now')}
      </Typography>
    </Box>
  );
};

export default ResetForm;
