import { useStyles } from './CatSelector.styles';
import { observer } from 'mobx-react-lite';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useStore } from '../../../stores';
import React, { useState } from 'react';

export interface CatSelectorProps {
  label: string;
}

export const CatSelector: React.FC<CatSelectorProps> = observer(({ label }) => {
  const { catStore } = useStore();
  const classes = useStyles();

  const [selectedId, setSelectedId] = useState<string>('');

  const createListOfOptions = () => {
    if (catStore.allTheCats.size === 0) {
      return (
        <MenuItem value="">
          <em>No Cats Yet</em>
        </MenuItem>
      );
    } else {
      const list = catStore.getAllCats().map((cat) => {
        return (
          <MenuItem key={cat.id} value={cat.id}>
            {cat.cat.name}
          </MenuItem>
        );
      });
      return list;
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    const catId = event.target.value;
    setSelectedId(catId);
    const selectedCat = catStore.getCat(Number(catId));

    if (selectedCat) {
      catStore.setTempCat({ ...selectedCat });
    }
  };

  return (
    <div className={classes.selectorWrap}>
      <div className={classes.selectorLabel}>{label}</div>
      <FormControl className={classes.selectorFormWrap} size="small">
        <Select
          id={label}
          value={selectedId}
          displayEmpty
          onChange={handleChange}
        >
          {createListOfOptions()}
        </Select>
      </FormControl>
    </div>
  );
});
