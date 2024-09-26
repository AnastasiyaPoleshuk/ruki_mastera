import { CollapsePrice } from "../../../features/index";
import { PriceImg } from "../../../entities/index";
import "./PriceSection.scss";

export const PriceSection = () => {
  return (
    <section className="price__container">
      <CollapsePrice />
      <PriceImg />
    </section>
  );
};
