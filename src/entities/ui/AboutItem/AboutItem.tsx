import { ReactNode } from "react";
import "./AboutItem.scss";

export const AboutItem = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="about-item__wrapp">
      {icon}
      <h4 className="about-item__title">{title}</h4>
      <p className="about-item__description">{description}</p>
    </div>
  );
};
