import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./carousel.css";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export const Carousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={40}
      totalSlides={6}
      isPlaying={true}
      interval={3000}
      infinite={true}
    >
      <ButtonBack className="carousel-btn left-btn">
        <MdOutlineArrowBackIosNew />
      </ButtonBack>

      <Slider className="slider">
        <Slide index={0}>
          <img
            src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1739045834/tapiz3_bz9qsj.jpg"
            alt="Slide 1"
          />
        </Slide>
        <Slide index={1}>
          <img
            src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1740248991/tapiz4_rjuc5w.jpg"
            alt="Slide 2"
          />
        </Slide>
        <Slide index={2}>
          <img
            src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1740248991/tapiz3_vx3y42.jpg"
            alt="Slide 3"
          />
        </Slide>
        <Slide index={3}>
          <img
            src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1739045834/tapiz_xhgfeo.jpg"
            alt="Slide 3"
          />
        </Slide>
        <Slide index={4}>
          <img
            src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1739543406/colgante-04_mxk8vo.jpg"
            alt="Slide 3"
          />
        </Slide>
        <Slide index={5}>
          <img
            src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1739543409/colgante-01_htiyip.jpg"
            alt="Slide 3"
          />
        </Slide>
      </Slider>

      <ButtonNext className="carousel-btn right-btn">
        <MdOutlineArrowForwardIos />
      </ButtonNext>
      <DotGroup />
    </CarouselProvider>
  );
};
