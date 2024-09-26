import { Collapse } from "antd";

import { CollapsePriceItem } from "src/entities/index";
import { priseData } from "src/widges/model/priceData";

import "./CollapsePrice.scss";

export const CollapsePrice = () => {
  const getItems = () => {
    return priseData.map((service) => {
      return {
        key: service.id,
        label: service.name,
        children: (
          <CollapsePriceItem text={service.description} price={service.price} />
        ),
      };
    });
  };

  return (
    <div className="collapse-price__block">
      <h2 className="collapse-price__title">Цены</h2>
      <p className="collapse-price__sub-title">
        Финальная цена зависит от объема и сложности работы. Ниже преведены
        усредненные цены.
      </p>
      <Collapse items={getItems()} />
    </div>
  );
};
