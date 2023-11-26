import Navbar from "./Navbar";
const Header = ({ isLogin, selectedFolder }) => {
  const { name, owner } = selectedFolder;
  return (
    <>
      <Navbar isLogin={isLogin} />
      <div>
        <img src={owner?.profileImageSource} alt="owner profile" />
        <span>{owner?.name}</span>
        <span>{name}</span>
      </div>
    </>
  );
};

export default Header;
