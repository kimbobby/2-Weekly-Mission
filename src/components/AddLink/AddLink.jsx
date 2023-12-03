import linkIcon from "../../assets/link.svg";
import styled from "styled-components";
import Input from "../SearchBar/SearchBar.jsx";
const LinkSection = styled.div`
  background-color: #edf7ff;
  width: 100%;
  padding-top: 6rem;
  padding-bottom: 9rem;
  padding-left: 3.2rem;
  padding-right: 3.2rem;
  @media (max-width: 767px) {
    padding-top: 2.4rem;
    padding-bottom: 4rem;
  }
`;
const LinkContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  @media (max-width: 1124px) {
    max-width: 70.4rem;
  }
  @media (max-width: 767px) {
    max-width: 32.5rem;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
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
  @media (max-width: 767px) {
    height: 5.3rem;
    padding: 0.8rem 1rem 0.8rem 3.4rem;
    &::placeholder {
      line-height: normal;
      font-size: 1.4rem;
    }
  }
`;
const LinkIcon = styled.img`
  width: 2rem;
  height: 2rem;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 2rem;
  @media (max-width: 767px) {
    width: 1.6rem;
    height: 1.6rem;
    left: 1rem;
  }
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

  @media (max-width: 767px) {
    right: 1rem;
  }
`;

const AddLink = () => {
  return (
    <LinkSection>
      <LinkContainer>
        <form>
          <InputWrapper>
            <LinkInput placeholder="링크를 추가해보세요" />
            <LinkButton type="submit">추가하기</LinkButton>
            <LinkIcon src={linkIcon} alt="link icon" />
          </InputWrapper>
        </form>
      </LinkContainer>
    </LinkSection>
  );
};

export default AddLink;
