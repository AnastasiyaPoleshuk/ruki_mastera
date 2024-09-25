import { WelcomeImg, WelcomeTitle } from "../../../entities/index";
import { AppButton } from "../../../features/index";
import "./WelcomeSection.scss";

export const WelcomeSection = () => {
  return (
    <section className="welcome__container">
      <div className="welcome__info">
        <WelcomeTitle />
        <AppButton text="Вызвать мастера" />
      </div>
      <WelcomeImg />
    </section>
  );
};
