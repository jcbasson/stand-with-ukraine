import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="flex wd-20 mt-4 ml-4 mr-4  ">
      <img
        src={logo}
        alt="Sydney stands with Ukraine"
        className="h-20 md:h-auto bg-[#e4edf5] border-2 border-[#3a61b7]"
      />
    </header>
  );
};

export default Header;
