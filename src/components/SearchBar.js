import search from "../assets/search.svg";
const SearchBar = () => {
  return (
    <>
      <input type="text" name="search" placeholder="링크를 검색해 보세요." />
      <button type="submit">
        <img src={search} alt="돋보기 아이콘" />
      </button>
    </>
  );
};

export default SearchBar;
