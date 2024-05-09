import { useStyles } from './CatView.styles';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../stores';

export interface CatViewProps {
  label: string;
}

export const CatView: React.FC<CatViewProps> = observer(({ label }) => {
  const classes = useStyles();
  const { catStore } = useStore();

  const handleClick = () => {
    catStore.addCat(catStore.allTheCats.size + 1, catStore.tempCat);
  };

  return (
    <div className={classes.catViewWrap}>
      <button className={classes.catViewLabel} onClick={handleClick}>
        {label}
      </button>
      <div className={classes.catViewPreview}>
        <div>{Object.values(catStore.tempCat)}</div>
      </div>
    </div>
  );
});
