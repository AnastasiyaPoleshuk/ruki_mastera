import { headerContactsData } from "../../model/headerContactsData";
import { LogoImg } from "../../../entities/index";
import { HeaderContactsItem } from "../../../features/index";

import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-blok">
          <LogoImg styleName={"color-style"} />
          <h2 className="footer__title">RukiMastera</h2>
        </div>
        <div className="footer__credits-block">
          <p className="footer__credits-item">ООО"Смоки Айленд" </p>
          <p className="footer__credits-item">УНП 491380388</p>
          <p className="footer__credits-item">
            Г.Гомель ул. 1я-Техническая 16а
          </p>
        </div>
        <div className="footer__contacts-blok">
          {headerContactsData.map((item) => (
            <HeaderContactsItem
              key={item.id}
              img={item.img}
              link={item.link}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};
