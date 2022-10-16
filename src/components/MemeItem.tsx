import { MemeItemProp } from "../types/MemeType";

const MemeItem = ({ item }: MemeItemProp): JSX.Element => {
  return (
    <div className="meme__item">
      <img className="meme__img" src={item.url} alt={item.name} />
      <a className="meme__name" href={item.url} target="blank">
        <span>{item.name}</span>
      </a>
    </div>
  );
};

export default MemeItem;
