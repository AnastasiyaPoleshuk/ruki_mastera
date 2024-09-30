import { Carousel } from "antd";

import { WorksImg } from "src/entities/index";
import worksImgOne from "src/app/assets/png/works-with-text-1.png";
import worksImgTwo from "src/app/assets/png/works-with-text-2.png";

import "./WorksCarousel.scss";

export const WorksCarousel = () => {
  return (
    <Carousel autoplay={true} draggable={true} className="works__carousel">
      <WorksImg img={worksImgOne} />
      <WorksImg img={worksImgTwo} />
    </Carousel>
  );
};
