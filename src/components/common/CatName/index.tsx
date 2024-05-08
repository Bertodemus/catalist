import { useStyles } from './CatName.styles';
import { observer } from 'mobx-react-lite';
import { TextField } from '@mui/material';
import { useStore } from '../../../stores';

export interface CatNameProps {
  label: string;
}

export const CatName: React.FC<CatNameProps> = observer(({ label }) => {
  const { catStore } = useStore();
  const classes = useStyles();

  const handleChange = (event: { target: { value: string } }) => {
    catStore.setCatName(event.target.value);
  };

  return (
    <div className={classes.selectorWrap}>
      <div className={classes.selectorLabel}>{label}</div>
      <div className={classes.selectorFormWrap}>
        <TextField
          placeholder="Enter a name"
          size="small"
          inputProps={{
            style: { textAlign: 'center', paddingRight: '32px' },
          }}
          sx={{ width: '100%' }}
          onChange={handleChange}
        />
      </div>
    </div>
  );
});
