import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(() => ({
  catViewWrap: {
    display: 'flex',
    marginTop: '.5rem',
    gap: '.25rem',
  },
  catViewLabel: {
    maxWidth: '92px',
    backgroundColor: '#93D3C9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '.25rem',
  },
  catViewPreview: {
    minWidth: '300px',
    height: '300px',
    backgroundColor: '#D9D9D9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '.25rem',
    border: '1px solid rgb(192, 192, 192)',
  },
}));
