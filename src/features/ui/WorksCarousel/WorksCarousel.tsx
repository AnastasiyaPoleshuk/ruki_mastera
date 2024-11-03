import { Carousel } from "antd";

import { WorksImg } from "src/entities/index";

// шаг 1
import worksImgOne from "src/app/assets/png/works-with-text-1.png";
import worksImgTwo from "src/app/assets/png/works-with-text-2.png";
import worksImgTree from "src/app/assets/png/works-with-text-3.png";
import worksImgFour from "src/app/assets/png/works-with-text-4.png";

import "./WorksCarousel.scss";

export const WorksCarousel = () => {
  // шаг 2
  const carouselItems = [worksImgOne, worksImgTwo, worksImgTree, worksImgFour];
  return (
    <Carousel autoplay={true} draggable={true} className="works__carousel">
      {carouselItems.map((item) => (
        <WorksImg img={item} key={`${item}`} />
      ))}
    </Carousel>
  );
};
