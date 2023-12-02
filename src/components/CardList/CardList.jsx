import noImage from "../../assets/no-img-logo.svg";
import { generateCreatedDate, createTimePassedMessage } from "../../utils/date";
const Card = ({ item, handleCardClick }) => {
  const { createdAt, description, imageSource, url } = item;
  const createdDate = generateCreatedDate(createdAt);
  const timePassedMsg = createTimePassedMessage(createdAt);
  const onClick = () => handleCardClick(url);
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image-box">
        {imageSource ? (
          <img className="card-image" src={imageSource} alt="about link" />
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
