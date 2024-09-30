import { AboutItem } from "src/entities/index";
import { HeartOutlined, SmileOutlined, ToolOutlined } from "@ant-design/icons";
import "./AboutSection.scss";

export const AboutSection = () => {
  return (
    <section className="about__section">
      <div className="about__container">
        <h2 className="about__title">Почему мы?</h2>
        <div className="about-items__block">
          RukiMastera предлагает быстрые и качественные услуги мастера на час в
          Гомеле и районе.При заказе услуги муж на час в Гомеле мы возьмем на
          себя поиск и покупку всех необходимых расходных материалов для
          ремонта, приедем без опозданий , в чистой одежде и обуви, не оставим
          после себя грязь и мусор. Принимаем к оплате наличные и банковские
          карты.Даем гарантию на работы.
        </div>
      </div>
    </section>
  );
};
