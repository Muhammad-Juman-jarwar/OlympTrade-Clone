import { Col, Row } from "antd";
import "./marketSubMenuSlider.scss";

const MarketSubMenuSlider = ({
  title,
  desc,
  img,
  bgImg,
  bgCol,
  onClick,
}: {
  title: string;
  desc: string;
  img: string;
  bgImg: string;
  bgCol: string;
  onClick?: () => void;
}) => {
  return (
    <Row onClick={onClick} className={`marketSubMenuSlider ${bgCol}`}>
      <Col span={12} className="menuSecondCard">
        <p className="menuSecondCardText1">{title}</p>
        <p className="menuSecondCardText2">{desc}</p>
      </Col>
      <Col span={10} className="menuSecondCardImage ">
        <div className="imgDiv">
          <img className="img" src={img} alt="" />
        </div>
        <img className="backgroundImage" src={bgImg} alt="" />
      </Col>
    </Row>
  );
};

export default MarketSubMenuSlider;
