const Hero = ({ setToggleMobileNav }) => {
  return (
    <div className="w-full py-16" onClick={() => setToggleMobileNav(false)}>
      <div className="w-full pb-8 px-[8px] lg:px-[5%] xl:px-[10%] flex flex-col md:flex-row gap-y-10 md:gap-y-0 xl:gap-x-0 mx-auto">
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.youtube.com/embed/rNjUDw5E6tY?autoplay=1"
            frameBorder="0"
            className="h-[300px] md:h-full w-full md:w-5/6"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="font-normal text-4xl mb-8 text-center md:text-left">
            <span className="text-main-blue">Container</span> <br />
            <span className="text-[#3BC4E2]">Shipping Business</span>
          </h2>
          <p className="lg:text-lg">
            Ocean shipping is continuing to be a biggest domain in Global Trade
            and carriers strive to deliver service excellence in the face of
            dynamic market changes and the demands for better customer service.
            By providing a robust, web-compliant operating environment and
            user-friendly interface, container carriers can readily decentralize
            their processes across their shipping network while integrating them
            into a single system for better control and improved operational
            efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
