import { useState, useEffect, useCallback } from "react";
import useAsync from "../../hooks/useAsync";
import CardList from "../../components/CardList/CardList";
import Profile from "../../components/Profile/Profile";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getApiItems } from "../../services/api";
import "./SharedPage.css";

const Shared = () => {
  const [isLoading, loadingError, getApiItemsAsync] = useAsync(getApiItems);
  const [items, setItems] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState([]);

  const handleCardClick = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  const handleLoad = useCallback(async () => {
    let result = await getApiItemsAsync("sample/folder");
    if (!result) return;

    const { folder } = result;
    setItems(folder.links);
    setSelectedFolder(folder);
  }, [getApiItemsAsync]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <>
      <Profile selectedFolder={selectedFolder} />
      <section>
        <div class="wrapper">
          <SearchBar />
          <CardList handleCardClick={handleCardClick} items={items} />
          {loadingError?.message && <span>{loadingError.message}</span>}
        </div>
      </section>
    </>
  );
};

export default Shared;
