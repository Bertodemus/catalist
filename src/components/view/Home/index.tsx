import { useStyles } from './Home.styles';
import { observer } from 'mobx-react-lite';
import catHead from '../../../assets/cathead.png';
import { CatName, CatSelector, CatView, Selector } from '../../common';
import {
  ColorOfCatEnum,
  SizeOfCatEnum,
  TypeOfCatEnum,
  TypeOfHatEnum,
} from '../../../types';
import { useEffect } from 'react';
import { useStore } from '../../../stores';
import { toJS } from 'mobx';

export const Home: React.FC = observer(() => {
  const classes = useStyles();
  const { catStore } = useStore();

  useEffect(() => {
    console.log(toJS(catStore.allTheCats));
  }, [catStore.allTheCats]);

  return (
    <div className={classes.viewWrap}>
      <div className={classes.logoWrap}>
        <img className={classes.logo} src={catHead}></img>
        <div className={classes.dividerBar} />
      </div>
      <div className={classes.optionsWrap}>
        <CatName label="NAME" />
        <Selector
          attribute="type"
          label="TYPE"
          options={Object.values(TypeOfCatEnum)}
        />
        <Selector
          attribute="color"
          label="COLOR"
          options={Object.values(ColorOfCatEnum)}
        />
        <Selector
          attribute="size"
          label="SIZE"
          options={Object.values(SizeOfCatEnum)}
        />
        <Selector
          attribute="hat"
          label="HAT"
          options={Object.values(TypeOfHatEnum)}
        />
      </div>
      <div>
        <CatView label="CREATE MEOW!" />
      </div>
      <div className={classes.optionSingleWrap}>
        <CatSelector label="CATS!" />
      </div>
    </div>
  );
});
