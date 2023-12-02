import search from "../../assets/search.svg";
import "./SearchBar.css";
const SearchBar = () => {
  return (
    <form className="input-wrapper">
      <input className type="text" name="search" placeholder="링크를 검색해 보세요." />
      <button type="submit">
        <img id="search-icon" src={search} alt="돋보기 아이콘" />
      </button>
    </form>
  );
};

export default SearchBar;
