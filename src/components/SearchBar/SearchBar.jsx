import styled from "styled-components";
import search from "../../assets/search.svg";

const SearchBarForm = styled.form`
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
  @media (max-width: 767px) {
    height: 4.3rem;
    left: 1rem;

    &::placeholder {
      font-size: 1.4rem;
      line-height: normal;
    }
  }
`;

const SearchIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 1.6rem;
`;

const SearchBar = () => {
  return (
    <SearchBarForm>
      <SearchInput className type="text" name="search" placeholder="링크를 검색해 보세요." />
      <button type="submit">
        <SearchIcon id="search-icon" src={search} alt="돋보기 아이콘" />
      </button>
    </SearchBarForm>
  );
};

export default SearchBar;
