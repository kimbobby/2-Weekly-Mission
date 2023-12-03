import noImage from "../../assets/no-img-logo.svg";
import { generateCreatedDate, createTimePassedMessage } from "../../utils/date";
import "./CardList.css";
import kebab from "../../assets/kebab.svg";
import selectedState from "../../assets/state=Selected.svg";
import defaultState from "../../assets/state=Default.svg";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NoLinksMsg from "../ErrorMsg/NoLinksMsg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Kebab = styled.img`
  ${({ $location }) => ($location === "/shared" ? `display:none;` : `display:block;`)}
  width: 21px;
  height: 17px;
`;
const SelectStateIcon = styled.img`
  ${({ $location }) => ($location === "/shared" ? `display:none;` : `display:block;`)}
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 1;

  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
  }
`;

const Card = ({ item, handleCardClick, isSelected }) => {
  const { createdAt, description, imageSource, url, created_at, image_source } = item;
  const createAtData = createdAt ? createdAt : created_at;
  const linkImage = imageSource ? imageSource : image_source;
  const createdDate = generateCreatedDate(createAtData);
  const timePassedMsg = createTimePassedMessage(createAtData);
  const onClick = () => (handleCardClick ? handleCardClick(url) : null);
  const location = useLocation();

  const selectState = isSelected ? selectedState : defaultState;

  return (
    <div className="card" onClick={onClick}>
      <div className="card-image-box">
        <SelectStateIcon src={selectState} $location={location.pathname} />
        {linkImage ? (
          <img className="card-image" src={linkImage} alt="about link" />
        ) : (
          <img className="no-card-image" src={noImage} alt="Link without imageSource" />
        )}
      </div>

      <div className="card-caption">
        <Wrapper>
          <span className="time-msg">{timePassedMsg}</span>
          <Kebab src={kebab} $location={location.pathname} />
        </Wrapper>
        <p className="description">{description}</p>
        <p className="date-msg">{createdDate}</p>
      </div>
    </div>
  );
};
const CardList = ({ items, handleCardClick, isSelected, folderName, initFolderName }) => {
  const NoLinks = items.length === 0 && folderName !== initFolderName;

  return (
    <>
      <div className="card-layout">
        {items?.map((item) => {
          return <Card key={item.id} item={item} handleCardClick={handleCardClick} isSelected={isSelected} />;
        })}
      </div>
      {NoLinks && <NoLinksMsg />}
    </>
  );
};
export default CardList;
