import { ContactUsForm } from "../../../features/index";
import { ContactUsImg } from "../../../entities/index";
import "./ContactUsSection.scss";

export const ContactUsSection = () => {
  return (
    <section className="contact-us__section" id="contactUs">
      <div className="contact-us__container">
        <ContactUsForm />
        <ContactUsImg />
      </div>
    </section>
  );
};
