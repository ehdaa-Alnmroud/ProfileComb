import { Carousel } from "react-bootstrap";

const Carousel_l = () => {
  return (
    <div>
      <Carousel className="Carousell">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/Carousel.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/Carousel2.jpeg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/Carousel1.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousel_l;
