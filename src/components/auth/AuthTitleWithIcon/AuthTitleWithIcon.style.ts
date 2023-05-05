import { makeStyles } from '@mui/styles';

const useAuthTitleWithIconStyles = makeStyles({
  'auth__title-block': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '15px',
  },
  'title-block_icon': {
    position: 'relative',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '1px solid #000',
    '& svg': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      padding: '5px',
      objectFit: 'contain',
    },
  },
});

export default useAuthTitleWithIconStyles;
