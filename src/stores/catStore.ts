import { makeAutoObservable, toJS } from 'mobx';
import {
  Cat,
  // CatListItem,
  ColorOfCat,
  ColorOfCatEnum,
  SizeOfCat,
  SizeOfCatEnum,
  TypeOfCat,
  TypeOfCatEnum,
  TypeOfHat,
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

  // listOfCats: CatListItem[] = [];

  selectedCat: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setWholeAssTempCat = (cat: Cat) => {
    this.tempCat = cat;
  };

  setCatName = (name: string) => {
    this.tempCat.name = name;
  };

  setTypeOfCat = (type: TypeOfCat) => {
    this.tempCat.type = type;
  };

  setColorOfCat = (color: ColorOfCat) => {
    this.tempCat.color = color;
  };

  setSizeOfCat = (size: SizeOfCat) => {
    this.tempCat.size = size;
  };

  setCatHat = (hat: TypeOfHat) => {
    this.tempCat.hat = hat;
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

  // addCat = (cat: CatListItem) => {
  //   const currentCatIndex = this.listOfCats.findIndex((item) => {
  //     return item.id == cat.id;
  //   });

  //   if (currentCatIndex !== -1) {
  //     this.listOfCats[currentCatIndex] = cat;
  //     // const listOfShit = [...this.listOfCats, cat];
  //     // this.listOfCats = JSON.parse(JSON.stringify(listOfShit));
  //   } else {
  //     this.listOfCats = [...this.listOfCats, cat];

  //     // this.listOfCats.push(cat);
  //   }
  //   // this.listOfCats = [
  //   //   ...this.listOfCats,
  //   //   { ...JSON.parse(JSON.stringify(cat)) },
  //   // ];
  // };

  setSelectedCat = (value: string) => {
    this.selectedCat = value;
  };
}
