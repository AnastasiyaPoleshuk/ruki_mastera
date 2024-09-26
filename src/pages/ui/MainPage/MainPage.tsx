import {
  AboutSection,
  ContactUsSection,
  PriceSection,
  WelcomeSection,
  WorkProcessSection,
} from "src/widges";
import "./MainPage.scss";

export const MainPage = () => {
  return (
    <main className="main">
      <WelcomeSection />
      <AboutSection />
      <PriceSection />
      <WorkProcessSection />
      <ContactUsSection />
    </main>
  );
};
