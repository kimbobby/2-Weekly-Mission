import kebab from "../assets/kebab.svg";
import selectedMark from "../assets/state=Selected.svg";
import defaultMark from "../assets/state=Default.svg";
import noImage from "../assets/no-img-logo.svg";

const generateCreatedDate = (createAt) => {
  const createdDateAndTime = createAt.split("T");
  const date = createdDateAndTime[0].split("-");
  const createdYear = date[0];
  const generateCreatedMonth = () => {
    if (date[1].indexOf("0") === -1) {
      return date[1];
    } else {
      const singleDigitMonth = date[1].split("");
      return singleDigitMonth[1];
    }
  };
  const generateCreatedDay = () => {
    if (date[2].indexOf("0") === -1) {
      return date[2];
    } else {
      const singleDigitDay = date[2].split("");
      return singleDigitDay[2];
    }
  };
  const createdMonth = generateCreatedMonth();
  const createdDay = generateCreatedDay();
  return `${createdYear}. ${createdMonth}. ${createdDay}`;
};

const Card = ({ item, isSelect, isStatic, onClick }) => {
  const { createdAt, description, imageSource, url } = item;
  const createdDate = generateCreatedDate(createdAt);
  const handleCardClick = () => onClick(url);
  return (
    <div onClick={handleCardClick}>
      <div>
        {imageSource ? (
          <img src={imageSource} alt="about link" />
        ) : (
          <img src={noImage} alt="Link without imageSource" />
        )}
      </div>
      {isSelect ? <img src={selectedMark} alt="selected mark" /> : <img src={defaultMark} alt="unselected mark" />}
      <p>{}</p>
      {!isStatic && <img src={kebab} alt="kebab" />}
      <p>{description}</p>
      <p>{createdDate}</p>
    </div>
  );
};
const CardList = ({ isSelect, isStatic, items, onClick }) => {
  return (
    <div>
      {items?.map((item) => {
        return <Card key={item.id} item={item} isSelect={isSelect} isStatic={isStatic} onClick={onClick} />;
      })}
    </div>
  );
};
export default CardList;
