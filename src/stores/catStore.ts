import { makeAutoObservable, toJS } from 'mobx';
import {
  Cat,
  ColorOfCatEnum,
  SizeOfCatEnum,
  TypeOfCatEnum,
  TypeOfHatEnum,
} from '../types';

export default class CatStore {
  allTheCats = new Map<number, Cat>();

  tempCat: Cat = {
    name: '',
    type: TypeOfCatEnum.SQUATTY,
    color: ColorOfCatEnum.LIGHT,
    size: SizeOfCatEnum.NONE,
    hat: TypeOfHatEnum.NONE,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setTempCat = (cat: Partial<Cat>) => {
    this.tempCat = { ...this.tempCat, ...cat };
  };

  getCat = (id: number) => {
    return this.allTheCats.get(id);
  };

  getAllCats = (): { id: number; cat: Cat }[] => {
    return Array.from(this.allTheCats.entries()).map(([id, cat]) => ({
      id,
      cat,
    }));
  };

  addCat = (id: number, cat: Cat) => {
    this.allTheCats.set(id, cat);
    console.log(toJS(this.allTheCats));
  };

  removeCat = (id: number) => {
    this.allTheCats.delete(id);
  };

  updateCat = (id: number, cat: Cat) => {
    this.allTheCats.set(id, cat);
  };
}
