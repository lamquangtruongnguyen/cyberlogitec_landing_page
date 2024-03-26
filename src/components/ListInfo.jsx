import Info from "./Info";
import { info } from "../data";

const ListInfo = ({ setToggleMobileNav }) => {
  return (
    <div
      className="w-full flex flex-wrap xl:flex-nowrap pt-12 pb-8 px-[8px] lg:px-[5%] xl:px-[10%] gap-y-10 xl:gap-y-0"
      onClick={() => setToggleMobileNav(false)}
    >
      {info.map(item => (
        <Info title={item.title} content={item.content} key={item.title} />
      ))}
    </div>
  );
};

export default ListInfo;
