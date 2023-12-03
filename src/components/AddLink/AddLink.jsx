import linkIcon from "../../assets/link.svg";
import styled from "styled-components";
import Input from "../SearchBar/SearchBar.jsx";
const InputWrapper = styled.div`
  position: relative;
  width: 80rem;
`;
const LinkContainer = styled.div`
  width: 100%;
  background-color: #edf7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 32rem;
`;

const LinkInput = styled.input`
  width: 100%;
  height: 6.9rem;
  background-color: var(--white-color);
  padding: 1.6rem 2rem 1.6rem 5.2rem;
  border-radius: 15px;
  border: 1px solid var(--primary-color);

  &::placeholder {
    color: var(--gray-30-color);
    line-height: 150%;
    font-weight: 400;
    font-size: 1.6rem;
  }
`;
const LinkIcon = styled.img`
  width: 2rem;
  height: 2rem;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 2rem;
`;
const LinkButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: var(--gra-purpleblue-to-skyblue);
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1rem 1.6rem;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 2rem;
`;

const AddLink = () => {
  return (
    <LinkContainer>
      <form>
        <InputWrapper>
          <LinkInput placeholder="링크를 추가해보세요" />
          <LinkButton type="submit">추가하기</LinkButton>
          <LinkIcon src={linkIcon} alt="link icon" />
        </InputWrapper>
      </form>
    </LinkContainer>
  );
};

export default AddLink;
