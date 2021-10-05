import "./Rating.css";
import StarFull from "../../images/StarFull";
import StarEmpty from "../../images/StarEmpty";

export default function Rating(props) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    while (i < props.rating) {
      stars.push(
        <StarFull
          className={`Rating__starFull Rating__starFull_${props.color} Rating__starFull_${props.size}`}
        />
      );
      i++;
    }
    if (i < 5) {
      stars.push(
        <StarEmpty
          className={`Rating__starEmpty Rating__starEmpty_${props.color} Rating__starEmpty_${props.size}`}
        />
      );
    }
  }
  return <div className={`Rating ${props.className}`}>{stars}</div>;
}
