import { useState, useEffect, useCallback, useId } from "react";
import useAsync from "../../hooks/useAsync";
import CardList from "../../components/CardList/CardList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getFolders, getLinks } from "../../services/api";
import AddLink from "../../components/AddLink/AddLink";
import "./FolderPage.css";
import FolderButton from "../../components/FolderButton/FolderButton";
import FolderToolbar from "../../components/FolderToobar/FolderToobar";
import NoLinksMsg from "../../components/ErrorMsg/NoLinksMsg";
import AddFolderFab from "../../components/Fab/Fab";
const FolderPage = () => {
  const INIT_FOLDER = {
    folderId: "",
    folderName: "전체",
  };
  const [items, setItems] = useState([]);
  const [isLoading, isError, getLinksAsync] = useAsync(getLinks);
  const [userId, setUserId] = useState("1");
  const [folders, setFolders] = useState([]);
  const [folderId, setFolderId] = useState(INIT_FOLDER.folderId);
  const [folderName, setFolderName] = useState(INIT_FOLDER.folderName);
  const [isSelected, setIsSelected] = useState(false);

  const handleLinkLoad = useCallback(
    async (folderId) => {
      let result = await getLinksAsync(folderId);
      if (!result) return;
      const { data } = result;
      setItems(data);
    },
    [getLinksAsync]
  );

  const handleFolderLoad = useCallback(async (userId) => {
    let result = await getFolders(userId);
    if (!result) return;
    const { data } = result;
    setFolders(data);
  }, []);

  const handleFolderClick = (folderId, name) => {
    setFolderId(folderId);
    setFolderName(name);
  };
  const handleAllFoldersClick = () => {
    setFolderId(INIT_FOLDER.folderId);
    setFolderName(INIT_FOLDER.folderName);
  };

  useEffect(() => {
    handleLinkLoad(folderId);
    handleFolderLoad(userId);
  }, [handleLinkLoad, handleFolderLoad, userId, folderId, folderName]);

  return (
    <>
      <AddLink />
      <div class="wrapper">
        <SearchBar />
        {items ? (
          <>
            <FolderButton
              folders={folders}
              handleFolderClick={handleFolderClick}
              handleAllFoldersClick={handleAllFoldersClick}
            />
            <FolderToolbar folderName={folderName} initFolderName={INIT_FOLDER.folderName} />
            <CardList
              items={items}
              isSelected={isSelected}
              folderName={folderName}
              initFolderName={INIT_FOLDER.folderName}
            />
          </>
        ) : (
          <NoLinksMsg />
        )}
      </div>
      <AddFolderFab />
    </>
  );
};
export default FolderPage;
