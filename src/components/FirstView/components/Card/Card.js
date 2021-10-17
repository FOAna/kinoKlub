import "./Card.css";
import Heading from "../../../Heading/Heading";
import Rating from "../../../Rating/Rating";
import Text from "../../../Text/Text";

export default function Card(props) {
  return (
    <div className="Card">
      <Text className="Card__number" size="l">
        {props.number}
      </Text>
      <img
        className="Card__background"
        src={props.image}
        alt="Картинка карточки"
      />
      <div className={`Card__content Card__content_${props.color}`}>
        <div className="Card__left">
          <Heading level={5} color="primary">
            {props.title}
          </Heading>
          {Boolean(props.subtitle) && (
            <Text className="Card__subtitle" size="m">
              {props.subtitle}
            </Text>
          )}
          <Text className="Card__rating" size="s">
            Rating
            <Rating rating={props.rating} color="white" size="s" />
          </Text>
        </div>
        <Text size="l">{props.quality}</Text>
      </div>
    </div>
  );
}
