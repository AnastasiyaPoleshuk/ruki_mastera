import { headerContactsData } from "../../model/headerContactsData";
import { LogoImg } from "../../../entities/index";
import { HeaderContactsItem } from "../../../features/index";

import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-blok">
          <LogoImg styleName={"color-style"} />
          <h2 className="header__title">RukiMastera</h2>
        </div>
        <p className="header__tel">+375(44)523-74-32</p>

        <div className="header__contacts-blok">
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
    </header>
  );
};
