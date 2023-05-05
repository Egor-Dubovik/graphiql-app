import { makeStyles } from '@mui/styles';

const useAuthFormStyles = makeStyles({
  auth__form: {
    minWidth: '500px',
    padding: '20px 15px',
    '@media (max-width: 600px)': {
      minWidth: '280px',
    },
  },
});

export default useAuthFormStyles;
