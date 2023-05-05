import { makeStyles } from '@mui/styles';

const useAuthButtonsStyles = makeStyles({
  'login-form_buttons': {
    marginBottom: '15px',
    display: 'flex',
    gap: '10px',
  },
  'login-form_button': {
    flex: '0 0 calc(50% - 5px)',
  },
});

export default useAuthButtonsStyles;
