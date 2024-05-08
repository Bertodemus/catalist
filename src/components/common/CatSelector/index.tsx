import { useStyles } from './CatSelector.styles';
import { observer } from 'mobx-react-lite';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useStore } from '../../../stores';
import React from 'react';

export interface CatSelectorProps {
  label: string;
}

export const CatSelector: React.FC<CatSelectorProps> = observer(({ label }) => {
  const { catStore } = useStore();
  const classes = useStyles();

  const createListOfOptions = () => {
    if (catStore.allTheCats.size === 0) {
      return (
        <MenuItem value="">
          <em>No Cats Yet</em>
        </MenuItem>
      );
    } else {
      const list = catStore.getAllCats().map((opt) => {
        return (
          <MenuItem key={opt.id} value={opt.id}>
            {opt.cat.name}
          </MenuItem>
        );
      });
      return list;
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    catStore.setSelectedCat(event.target.value);
    const currentCat = catStore.getCat(parseInt(event.target.value));

    if (currentCat) {
      catStore.setWholeAssTempCat(currentCat);
    }
  };

  return (
    <div className={classes.selectorWrap}>
      <div className={classes.selectorLabel}>{label}</div>
      <FormControl className={classes.selectorFormWrap} size="small">
        <Select
          id={label}
          value={catStore.selectedCat}
          displayEmpty
          onChange={handleChange}
        >
          {createListOfOptions()}
        </Select>
      </FormControl>
    </div>
  );
});
