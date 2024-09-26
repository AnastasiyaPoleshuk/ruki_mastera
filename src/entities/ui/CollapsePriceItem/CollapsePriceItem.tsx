import "./CollapsePriceItem.scss";

export const CollapsePriceItem = ({
  text,
  price,
}: {
  text: string;
  price: string;
}) => {
  return (
    <article className="collapse-price__item item">
      <p className="item__text">{text}</p>
      <p className="item__price">{`Цена: ${price}`}</p>
    </article>
  );
};
