import BannerImg from "../assets/sydney-banner.jpeg";
import Header from "../components/Header";

const DefaultLayouts = ({ children }) => {
  return (
    <div
      className="flex flex-col h-full w-full overflow-auto lg:bg-cover  bg-[length:100%_auto] bg-black bg-no-repeat overflow-auto"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <Header />
      <main className="flex flex-col self-center mt-24 height-auto  bg-[#e4edf5] text-[#434344] font-sans leading-normal alig ml-4 mr-4 rounded-xl pr-4 pl-4 pt-4 pb-4 ">
        {children}
      </main>
    </div>
  );
};

export default DefaultLayouts;
