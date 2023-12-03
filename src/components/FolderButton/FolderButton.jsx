import styled from "styled-components";
import addIcon from "../../assets/add.svg";

const TagButtonWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const TagButton = styled.button`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--primary-color);
  border-radius: 5px;

  &:active,
  &:visited {
    color: white;
    background-color: var(--primary-color);
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
  & ${Icon} {
    margin-left: 4px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.6rem;
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
      <AddButton>
        폴더추가
        <Icon src={addIcon} alt="" />
      </AddButton>
    </ButtonContainer>
  );
};

export default FolderButton;
