import "./Card.css";
import Heading from "../Heading/Heading";
import Rating from "../Rating/Rating";

export default function Card(props) {
  return (
    <div className="Card">
      <span className="Card__number">{props.number}</span>
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
            <span className="Card__subtitle">{props.subtitle}</span>
          )}
          <span className="Card__rating">
            Rating
            <Rating rating={props.rating} color="white" size="s" />
          </span>
        </div>
        <span className="Card__quality">{props.quality}</span>
      </div>
    </div>
  );
}
