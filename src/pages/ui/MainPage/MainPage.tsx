import {
  AboutSection,
  ContactUsSection,
  PriceSection,
  WelcomeSection,
} from "src/widges";
import "./MainPage.scss";

export const MainPage = () => {
  return (
    <main className="main">
      <WelcomeSection />
      <AboutSection />
      <PriceSection />
      <ContactUsSection />
    </main>
  );
};
