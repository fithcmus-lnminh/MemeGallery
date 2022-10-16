import { MemeListProp } from "../types/MemeType";
import MemeItem from "./MemeItem";

const MemeList = ({ memes }: MemeListProp) => {
  return (
    <div className="wrapper">
      {memes?.map((item, idx) => {
        return <MemeItem item={item} key={idx} />;
      })}
    </div>
  );
};

export default MemeList;
