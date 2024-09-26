import "./WorkProcessItem.scss";

export const WorkProcessItem = ({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="work-process__item item">
      <div className="item__step">{step}</div>
      <h4 className="item__title">{title}</h4>
      <p className="item__description">{description}</p>
    </div>
  );
};
