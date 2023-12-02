import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CardList from "./components/CardList/CardList";
import SearchBar from "./components/SearchBar/SearchBar";
import { getApiItems } from "./services/api";
import "./styles/index.css";
import useAsync from "./hooks/useAsync";
function App() {
  const [isLoading, loadingError, getApiItemsAsync] = useAsync(getApiItems);
  const [isLogin, setIsLogin] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState([]);
  const [loginInfo, setLoginInfo] = useState([]);

  const handleCardClick = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  const handleLoginStatusInfo = useCallback(async () => {
    let result = await getApiItemsAsync("sample/user");
    if (!result) return;

    const userLoginInfo = result;
    if (userLoginInfo) {
      setIsLogin(true);
      setLoginInfo(userLoginInfo);
    }
  }, [getApiItemsAsync]);
  const handleLoad = useCallback(async () => {
    let result = await getApiItemsAsync("sample/folder");
    if (!result) return;

    const { folder } = result;
    setItems(folder.links);
    setSelectedFolder(folder);
  }, [getApiItemsAsync]);

  useEffect(() => {
    handleLoad();
    handleLoginStatusInfo();
  }, [handleLoad, handleLoginStatusInfo]);

  return (
    <>
      <Header isLogin={isLogin} selectedFolder={selectedFolder} loginInfo={loginInfo} />
      <main>
        <div className="wrapper">
          <SearchBar />
          <CardList handleCardClick={handleCardClick} items={items} />
        </div>
      </main>
      <Footer />
      {loadingError?.message && <span>{loadingError.message}</span>}
    </>
  );
}

export default App;
