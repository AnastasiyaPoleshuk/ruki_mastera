import { ReactNode } from "react";
import "./HeaderContactsItem.scss";

export const HeaderContactsItem = ({
  img,
  text,
  link,
}: {
  img: ReactNode;
  text: string;
  link: string;
}) => {
  return (
    <div className="header__contacts-item">
      {img}
      <a href={link} className="header__contact-link">
        {text}
      </a>
    </div>
  );
};
