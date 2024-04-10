import Info from "./Info";
import { info } from "../data";

const ListInfo = () => {
  return (
    <div className="w-full py-2 my-2 flex flex-wrap xl:flex-nowrap px-[15px] min-[321px]:px-[20px] lg:px-[5%] xl:px-[10%] gap-y-10 xl:gap-y-0">
      {info.map(item => (
        <Info title={item.title} content={item.content} key={item.title} />
      ))}
    </div>
  );
};

export default ListInfo;
