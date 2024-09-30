import { WorksCarousel } from "src/features/index";
import "./WorksSection.scss";
import { WorksSectionImg } from "src/entities/index";

export const WorksSection = () => {
  return (
    <section className="works__container">
      {/* <div className="works__block"> */}
      <h2 className="works__title">Наши работы</h2>
      <WorksCarousel />
      {/* </div> */}

      {/* <WorksSectionImg /> */}
    </section>
  );
};
