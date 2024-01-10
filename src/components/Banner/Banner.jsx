import banner from "../../assets/banner.jpg";

const Header = () => {
  return (
    <header class="wd-full relative h-screen ">
      <img
        src={banner}
        className="object-cover h-full w-full"
        alt="Murder Games"
      />
    </header>
  );
};

export default Header;
