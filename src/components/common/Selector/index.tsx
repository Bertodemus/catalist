import { useStyles } from './Selector.styles';
import { observer } from 'mobx-react-lite';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useStore } from '../../../stores';
import {
  Cat,
  ColorOfCat,
  ColorOfCatEnum,
  SizeOfCat,
  SizeOfCatEnum,
  TypeOfCat,
  TypeOfCatEnum,
  TypeOfHat,
  TypeOfHatEnum,
} from '../../../types';

export interface SelectorProps {
  id?: string;
  label: string;
  options:
    | TypeOfCatEnum[]
    | ColorOfCatEnum[]
    | SizeOfCatEnum[]
    | TypeOfHatEnum[];
}

export const Selector: React.FC<SelectorProps> = observer(
  ({ id = 'None', label, options }) => {
    const { catStore } = useStore();
    const classes = useStyles();

    const listOfOptions = options.map((opt, index) => {
      return (
        <MenuItem key={index} value={opt}>
          {opt}
        </MenuItem>
      );
    });

    const handleChange = (event: SelectChangeEvent) => {
      switch (id) {
        case 'type':
          catStore.setTypeOfCat(event.target.value as TypeOfCat);
          break;
        case 'color':
          catStore.setColorOfCat(event.target.value as ColorOfCat);
          break;
        case 'size':
          catStore.setSizeOfCat(event.target.value as SizeOfCat);
          break;
        case 'hat':
          catStore.setCatHat(event.target.value as TypeOfHat);
          break;
      }
    };

    return (
      <div className={classes.selectorWrap}>
        <div className={classes.selectorLabel}>{label}</div>
        <FormControl className={classes.selectorFormWrap} size="small">
          <Select
            id={label}
            value={
              (catStore.getCat(+catStore.selectedCat) || catStore.tempCat)[
                id as keyof Cat
              ]
            }
            onChange={handleChange}
          >
            {listOfOptions}
          </Select>
        </FormControl>
      </div>
    );
  }
);
