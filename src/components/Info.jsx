const Info = ({ title, content }) => {
  return (
    <div className="w-full min-[431px]:w-1/2 xl:w-1/4 px-2 xl:px-1">
      <h3 className="text-main-blue font-normal text-2xl sm:text-3xl mb-3 h-auto min-[431px]:h-[72px] min-[626px]:h-auto min-[640px]:h-[72px]  min-[760px]:h-auto min-[1280px]:h-[72px]">
        {title}
      </h3>
      <p className="lg:text-lg">{content}</p>
    </div>
  );
};

export default Info;
