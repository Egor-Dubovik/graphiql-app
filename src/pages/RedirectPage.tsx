import React, { FC } from 'react';
import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../router/routes/routes.constant';

const RedirectPage: FC = () => {
  return (
    <main className="main">
      <section>
        <Typography
          sx={{
            mb: 2,
            fontSize: { xs: 16, sm: 18 },
            textAlign: 'center',
          }}
        >
          To use this functionality of the application, you need to log in
        </Typography>
        <Button variant="outlined">
          <NavLink to={ROUTES.LOGIN}>authorization</NavLink>
        </Button>
      </section>
    </main>
  );
};

export default RedirectPage;
