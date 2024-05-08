export interface Cat {
  name: string;
  type: TypeOfCat;
  color: ColorOfCat;
  size: SizeOfCat;
  hat: TypeOfHat;
}

// export interface CatListItem {
//   id: number;
//   cat: Cat;
// }

export enum TypeOfCatEnum {
  SQUATTY = 'Squatty',
  BLOCKY = 'Blocky',
  CHONKY = 'Chonky',
}
export type TypeOfCat = (typeof TypeOfCatEnum)[keyof typeof TypeOfCatEnum];

export enum ColorOfCatEnum {
  LIGHT = 'Light',
  DARK = 'Dark',
  FABULOUS = 'Fabulous',
}
export type ColorOfCat = (typeof ColorOfCatEnum)[keyof typeof ColorOfCatEnum];

export enum SizeOfCatEnum {
  NONE = 'Un-Chonky',
  CHONKY = 'Chonky',
}
export type SizeOfCat = (typeof SizeOfCatEnum)[keyof typeof SizeOfCatEnum];

export enum TypeOfHatEnum {
  NONE = 'No Hat',
  PIZZA = 'Pizza',
  COFFEE = 'Coffee',
}
export type TypeOfHat = (typeof TypeOfHatEnum)[keyof typeof TypeOfHatEnum];
