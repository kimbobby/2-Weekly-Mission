import styled from "styled-components";
import addIcon from "../../assets/add.svg";

const FabContainer = styled.div`
  display: none;
  @media (max-width: 767px) {
    width: 100%;
    position: fixed;
    display: flex;
    bottom: 101px;
    justify-content: center;
  }
`;
const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const Fab = styled.button`
  @media (max-width: 767px) {
    background-color: var(--primary-color);
    border: 1px solid var(--white-color);
    color: var(--gray-10-color);
    font-weight: 500;
    letter-spacing: -0.3px;
    border-radius: 2rem;
    padding: 0.8rem 2.4rem;
    display: flex;
    align-items: center;
    ${Icon} {
      margin-left: 4px;
      position: relative;
      z-index: 3;
    }
  }
`;
const AddFolderFab = () => {
  return (
    <FabContainer>
      <Fab type="button">
        폴더 추가
        <Icon src={addIcon} alt="add Folder Icon" />
      </Fab>
    </FabContainer>
  );
};
export default AddFolderFab;
