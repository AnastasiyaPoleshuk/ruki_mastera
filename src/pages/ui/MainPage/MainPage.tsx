import { ContactUsSection, PriceSection, WelcomeSection } from "src/widges";
import "./MainPage.scss";

export const MainPage = () => {
  return (
    <main className="main">
      <WelcomeSection />
      <ContactUsSection />
      <PriceSection />
    </main>
  );
};
