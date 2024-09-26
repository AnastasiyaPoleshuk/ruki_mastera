import { WorkProcessItem } from "src/entities/index";
import "./WorkProcessSection.scss";

const workProcessData = [
  {
    step: "1",
    title: "Заказ",
    description:
      "Позвоните по номеру +375(44)523-74-32 или заполните форму заявки.",
  },
  {
    step: "2",
    title: "Консультация",
    description:
      "Уточняем все детали заказа и договариваемся о времени. Обозначаем примерную стоимость",
  },
  {
    step: "3",
    title: "Выезд мастера",
    description:
      "Мастер приезжает в оговоренное время со всем необходимым оборудованием",
  },
];

export const WorkProcessSection = () => {
  return (
    <section className="work-process__section">
      <div className="work-process__container">
        <h2 className="work-process__title">Как мы работаем?</h2>
        <div className="work-process__block">
          {workProcessData.map((item) => (
            <WorkProcessItem
              step={item.step}
              title={item.title}
              description={item.description}
              key={item.step}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
