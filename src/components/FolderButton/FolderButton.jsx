import styled from "styled-components";
import addIcon from "../../assets/add.svg";

const TagButtonWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  width: 100%;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    row-gap: 1.2rem;
  }
`;

const TagButton = styled.button`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--primary-color);
  border-radius: 5px;

  &:hover {
    background-color: var(--gray-10-color);
  }

  &:active,
  &:visited {
    color: white;
    background-color: var(--primary-color);
  }

  @media (max-width: 767px) {
    padding: 0.6rem 1rem;
    font-size: 1.4rem;
  }
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
const AddButton = styled.button`
  padding: 0;
  color: var(--primary-color);
  font-weight: 500;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  & ${Icon} {
    margin-left: 4px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.6rem;
  @media (max-width: 767px) {
    margin-top: 1.2rem;
  }
`;

const FolderButton = ({ folders, handleFolderClick, handleAllFoldersClick }) => {
  const handleAllClick = () => handleAllFoldersClick();
  return (
    <ButtonContainer>
      <TagButtonWrapper>
        <TagButton type="button" onClick={handleAllClick}>
          전체
        </TagButton>
        {folders.map((folder) => {
          const { name, id } = folder;
          const onClick = () => handleFolderClick(id, name);
          return (
            <TagButton key={id} type="button" onClick={onClick}>
              {name}
            </TagButton>
          );
        })}
      </TagButtonWrapper>
      <AddButton type="button">
        폴더추가
        <Icon src={addIcon} alt="add Folder Icon" />
      </AddButton>
    </ButtonContainer>
  );
};

export default FolderButton;
