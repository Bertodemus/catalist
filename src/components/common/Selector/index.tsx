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
  attribute?: string;
  label: string;
  options:
    | TypeOfCatEnum[]
    | ColorOfCatEnum[]
    | SizeOfCatEnum[]
    | TypeOfHatEnum[];
}

export const Selector: React.FC<SelectorProps> = observer(
  ({ attribute = 'None', label, options }) => {
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
      const { value } = event.target;
      if (!attribute) return;

      switch (attribute) {
        case 'type':
          catStore.setTempCat({ type: value as TypeOfCat });
          break;
        case 'color':
          catStore.setTempCat({ color: value as ColorOfCat });
          break;
        case 'size':
          catStore.setTempCat({ size: value as SizeOfCat });
          break;
        case 'hat':
          catStore.setTempCat({ hat: value as TypeOfHat });
          break;
      }
    };

    return (
      <div className={classes.selectorWrap}>
        <div className={classes.selectorLabel}>{label}</div>
        <FormControl className={classes.selectorFormWrap} size="small">
          <Select
            id={label}
            value={catStore.tempCat[attribute as keyof Cat]}
            onChange={handleChange}
          >
            {listOfOptions}
          </Select>
        </FormControl>
      </div>
    );
  }
);
