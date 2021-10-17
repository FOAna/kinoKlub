import "./MovieCard.css";
import Text from "../../../Text/Text";
import Rating from "../../../Rating/Rating";

export default function MovieCard(props) {
  const isSelected = props.isSelected;
  return (
    <div className={"MovieCard" + (isSelected ? " MovieCard_selected" : "")}>
      <img
        className="MovieCard__background"
        src={props.image}
        alt="Южный Парк, ребята!"
      />
      {props.isSelected ? (
        <div className="MovieCard__content">
          <div className="MovieCard__heading">
            <Text className="MovieCard__quality" size="xl">
              {props.quality}
            </Text>
            <Text size="xl">{props.title}</Text>
          </div>
          <div className="MovieCard__filmInformation">
            <Text
              className="MovieCard__text"
              size="m"
            >{`Genre: ${props.genre}`}</Text>
            <Text
              className="MovieCard__text"
              size="m"
            >{`Director: ${props.director}`}</Text>
            <Text
              className="MovieCard__text"
              size="m"
            >{`Fees: ${props.fees}`}</Text>
            <Text
              className="MovieCard__text"
              size="m"
            >{`Year: ${props.year}`}</Text>
            <Rating
              className="MovieCard__rating"
              rating={4}
              size="m"
              color="white"
            />
          </div>
        </div>
      ) : (
        <div className="MovieCard__content">
          <Text size="m">{props.title}</Text>
          <Rating className="MovieCard__rating" rating={4} size="s" />
        </div>
      )}
    </div>
  );
}
