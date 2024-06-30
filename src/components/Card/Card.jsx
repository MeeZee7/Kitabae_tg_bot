import React, { useEffect, useState } from "react";
import "./Card.css";
import Button from "../Button/Button";
import Image from "next/image";
function Card({     book, onAdd, onRemove }) {
  const [count, setCount] = useState(0);
  const { title, img, price, id } =   book ;

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(  book);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove( book );
  };

  return (
    <div className="card">
      <span
        className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
      >
        {count}
      </span>
      <div className="image__container">
        <Image src={img} alt={title} width={100} height={100} />
      </div>
      <h4 className="card__title">
        {title} . <span className="card__price">$ {price}</span>
      </h4>

      <div className="btn-container">
        <Button title={"+"} type={"add"} onClick={handleIncrement} />
        {count !== 0 ? (
          <Button title={"-"} type={"remove"} onClick={handleDecrement} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Card;