import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(() => ({
  selectorWrap: {
    display: 'flex',
    gap: '.25rem',
  },
  selectorLabel: {
    minWidth: '92px',
    backgroundColor: '#F6ABAB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '.25rem',
  },
  selectorFormWrap: {
    backgroundColor: '#D9D9D9',
    width: '100%',
    borderRadius: '.25rem',
  },
}));
