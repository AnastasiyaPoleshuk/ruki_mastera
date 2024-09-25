import logo from "../../../app/assets/png/logo.png";
import "./LogoImg.scss";

export const LogoImg = ({ styleName }: { styleName: string }) => {
  return <img src={logo} alt="logo" className={`logo__img ${styleName}`} />;
};
