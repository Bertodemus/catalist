import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(() => ({
  viewWrap: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#8E87AC',
    width: '400px',
    padding: '1.5rem',
    borderRadius: '.5rem',
    justifyItems: 'left',
  },
  optionsWrap: {
    display: 'flex',
    gap: '.25rem',
    flexDirection: 'column',
  },
  optionSingleWrap: {
    marginTop: '.5rem',
  },
  dividerBar: {
    width: '100%',
    height: '2px',
    backgroundColor: '#D9D9D9',
    alignSelf: 'end',
    margin: '.5rem 0',
    borderRadius: '.25rem',
  },
  logoWrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    width: '92px',
    height: '92px',
    backgroundColor: '#867FAO',
    borderRadius: '.25rem',
  },
}));
