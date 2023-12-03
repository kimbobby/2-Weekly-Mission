import styled from "styled-components";
import search from "../../assets/search.svg";

const SearchBarWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 6rem;
  padding: 1.5rem 1.6rem 1.5rem 4.2rem;
  border-radius: 10px;
  border: none;
  background-color: #f5f5f5;
  &::placeholder {
    font-size: 1.6rem;
    font-weight: 400;
    color: #666;
    line-height: 150%;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 1.6rem;
  width: 1.6rem;
  height: 1.6rem;
`;

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchInput className type="text" name="search" placeholder="링크를 검색해 보세요." />
      <button type="submit">
        <SearchIcon id="search-icon" src={search} alt="돋보기 아이콘" />
      </button>
    </SearchBarWrapper>
  );
};

export default SearchBar;
