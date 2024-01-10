import BannerImg from "../assets/sydney-banner.jpeg";

const DefaultLayout = ({ children }) => {
  return (
    <div
      className="flex flex-col h-full w-full overflow-auto   bg-[length:100%_auto] bg-black bg-no-repeat overflow-auto pb-5 pt-20 md:pt-20 lg:pt-0"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <main className="flex flex-col h-full self-center mt-24 height-auto  bg-[#e4edf5] text-[#434344] font-sans leading-normal align ml-4 mr-4 rounded-xl pr-4 pl-4 pt-4 pb-4 ">
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;
