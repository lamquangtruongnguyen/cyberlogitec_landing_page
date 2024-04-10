import PageNav from "./PageNav";

const BottomNav = () => {
  return (
    <div className="w-full px-[15px] min-[321px]:px-[20px] lg:px-[5%] xl:px-[10%] flex flex-col items-center min-[375px]:flex-row justify-between gap-y-4 py-4 my-12">
      <PageNav page="Previous" title="Metaverse" link="#" alignText="left" />
      <PageNav page="Next" title="Terminal" link="#" alignText="right" />
    </div>
  );
};

export default BottomNav;
