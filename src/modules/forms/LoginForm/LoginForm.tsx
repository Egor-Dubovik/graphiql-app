import React, { FC, FormEvent, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Box, FormHelperText, Typography } from '@mui/material';
import { ROUTES } from '../../../router/routes/routes.constant';
import AuthButtons from '../../../components/auth/AuthButtons/AuthButtons';
import { logInWithEmailAndPassword } from '../../../firebase/logIn';
import { auth } from '../../../firebase/config';
import { checkFields, IAuthFormErrors } from '../../../helpers/validation';
import InputField from '../../../components/InputField/InputField';
import { useTranslation } from 'react-i18next';

const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({} as IAuthFormErrors);
  const [serverError, setServerError] = useState<string | undefined>();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (user) navigate(ROUTES.MAIN);
  }, [user]);

  useEffect(() => {
    const newErrors = checkFields(email, password);
    setErrors(newErrors);
  }, [email, password]);

  const handleLogIn = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      const serverMessError = await logInWithEmailAndPassword(email, password);
      setServerError(serverMessError);
    }
  };

  return (
    <>
      <Box className="login-form" onSubmit={handleLogIn} component="form">
        {serverError && (
          <FormHelperText sx={{ mb: 2, fontSize: '14px' }} error>
            {serverError}
          </FormHelperText>
        )}
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
        <InputField
          error={!!errors.password}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          sx={{ mb: 2 }}
          fullWidth
          label={t('form-password')}
          type="password"
          required
          helperText={errors.password}
        />
        <AuthButtons setError={setServerError} />
        <Box>
          <Typography>
            {t('not-account')} <NavLink to={ROUTES.REGISTRATION}>{t('register')}</NavLink>{' '}
            {t('now')}
          </Typography>
          <NavLink to={ROUTES.RESET}>{t('forgot')}</NavLink>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;
