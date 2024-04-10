const PageNav = ({ page, title, link, alignText }) => {
  return (
    <div
      className={`flex flex-col px-2 xl:px-1 text-center min-[375px]:text-${alignText}`}
    >
      <a
        href={link}
        className="text-main-blue text-lg hover:text-[#40a9ff] delay-75 duration-200 leading-9"
      >
        {page} page
      </a>
      <a
        href={link}
        className="text-hover-text text-3xl hover:text-[#40a9ff] delay-75 duration-200 leading-9"
      >
        {title}
      </a>
    </div>
  );
};

export default PageNav;
