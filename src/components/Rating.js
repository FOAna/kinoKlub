import { useState } from "react";

export default function Rating(props) {
  const [rating, changerating] = useState(0);
  const onChange = props.onChange;

  function onClick(num) {
    return () => {
      changerating(num);
      onChange(num, props.index);
    };
  }

  return (
    <div>
      <button onClick={onClick(rating - 1)}>-</button>
      <span>{rating}</span>
      <button onClick={onClick(rating + 1)}>+</button>
    </div>
  );
}
