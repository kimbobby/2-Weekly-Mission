import styled from "styled-components";
import TOOL_UTILS from "../../data/ToolUtils";
import { util } from "prettier";

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FolderTitle = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.2px;
`;
const ToolIcon = styled.img`
  ${({ $deleteIcon }) =>
    $deleteIcon === "delete folder"
      ? `width: 1.5rem;
  height: 1.58rem;`
      : `width: 1.8rem;
height: 1.8rem;`}
`;
const Button = styled.button`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;
const ToolWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
`;

const FolderToolbar = ({ folderName }) => {
  return (
    <Toolbar>
      <FolderTitle>{folderName}</FolderTitle>

      <ToolWrapper>
        {TOOL_UTILS.map((util) => {
          const deleteIcon = util.alt === "delete folder" ? util.alt : "";
          return (
            <Button key={util.alt}>
              <ToolIcon key={util.alt} src={util.icon} alt={util.alt} $deleteIcon={deleteIcon} />
              {util.name}
            </Button>
          );
        })}
      </ToolWrapper>
    </Toolbar>
  );
};

export default FolderToolbar;
