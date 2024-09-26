import { AboutItem } from "src/entities/index";
import { HeartOutlined, SmileOutlined, ToolOutlined } from "@ant-design/icons";
import "./AboutSection.scss";

const iconStyle = {
  fontSize: 70,
  color: "#fafafa",
};

export const AboutSection = () => {
  return (
    <section className="about__section">
      <div className="about__container">
        <h2 className="about__title">Почему мы?</h2>
        <div className="about-items__block">
          <AboutItem
            title="Индивидаульный подход"
            description="Мастер учитывает все пожелания клиентов и подстраивается под ваш график."
            icon={<ToolOutlined style={{ ...iconStyle }} />}
          />
          <AboutItem
            title="Опытный и вежливый мастер"
            description="Мастер обладает большим опытом и профессионализмом, всегда вежлив и готовы объяснить каждый этап задачи."
            icon={<HeartOutlined style={{ ...iconStyle }} />}
          />
          <AboutItem
            title="Прозрачные цены"
            description="Никаких скрытых платежей — вы всегда знаете, за что платите."
            icon={<SmileOutlined style={{ ...iconStyle }} />}
          />
        </div>
      </div>
    </section>
  );
};
