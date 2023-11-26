import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import { getApiItems } from "./services/api";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState([]);
  const [loginInfo, setLoginInfo] = useState([]);
  const handleCardClick = () => {};
  const handleLoginStatusInfo = async () => {
    const userLoginInfo = await getApiItems("sample/user");
    if (userLoginInfo) {
      setIsLogin(true);
      setLoginInfo(userLoginInfo);
    }
  };
  const handleLoad = async () => {
    const { folder } = await getApiItems("sample/folder");
    setItems(folder.links);
    setSelectedFolder(folder);
  };
  useEffect(() => {
    handleLoad();
    handleLoginStatusInfo();
  }, []);

  return (
    <>
      <Header isLogin={isLogin} selectedFolder={selectedFolder} loginInfo={loginInfo} />
      <SearchBar />
      <CardList onClick={handleCardClick} items={items} isSelect={isSelect} />
      <Footer />
    </>
  );
}

export default App;
