export type MemeType = {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  boxCount: number;
};

export type MemeItemProp = {
  item: MemeType;
};

export type MemeListProp = {
  memes: MemeType[];
};
