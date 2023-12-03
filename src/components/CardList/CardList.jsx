import noImage from "../../assets/no-img-logo.svg";
import { generateCreatedDate, createTimePassedMessage } from "../../utils/date";
import "./CardList.css";
const Card = ({ item, handleCardClick }) => {
  const { createdAt, description, imageSource, url, created_at, image_source } = item;
  const createAtData = createdAt ? createdAt : created_at;
  const linkImage = imageSource ? imageSource : image_source;
  const createdDate = generateCreatedDate(createAtData);
  const timePassedMsg = createTimePassedMessage(createAtData);
  const onClick = () => (handleCardClick ? handleCardClick(url) : null);
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image-box">
        {linkImage ? (
          <img className="card-image" src={linkImage} alt="about link" />
        ) : (
          <img className="no-card-image" src={noImage} alt="Link without imageSource" />
        )}
      </div>
      <div className="card-caption">
        <span className="time-msg">{timePassedMsg}</span>
        <p className="description">{description}</p>
        <p className="date-msg">{createdDate}</p>
      </div>
    </div>
  );
};
const CardList = ({ items, handleCardClick }) => {
  return (
    <div className="card-layout">
      {items?.map((item) => {
        return <Card key={item.id} item={item} handleCardClick={handleCardClick} />;
      })}
    </div>
  );
};
export default CardList;
