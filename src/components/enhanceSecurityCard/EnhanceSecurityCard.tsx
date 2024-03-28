import { Col, Row } from "antd";
import MainItemCard from "../mainItemCard/MainItemCard";
import { CheckIcon, PhoneColoredIcon } from "../../assets/icons";
import "./enhanceSecurityStyles.scss";

interface EnhanceSecurityCardProps {
  variant1?: 1 | 2 | 3;
  variant2?: 1 | 2 | 3;
}

const EnhanceSecurityCard: React.FunctionComponent<
  EnhanceSecurityCardProps
> = ({ variant1, variant2 }) => {
  return (
    <div className="enhanceSecurityContainer">
      <p className="securityTitle">Enhance your account security</p>
      <p className="securitySubtitle">
        Add extra protection to your account and get a 50% deposit bonus
      </p>
      <Row gutter={[16, 16]} justify="start">
        <Col span={12}>
          <MainItemCard
            variant={variant2 ? variant2 : 1}
            fullHeight
            className="securityItem"
          >
            <div className="securityItemIcon">
              <PhoneColoredIcon />
            </div>
            <p>Enable two-factor authentication</p>
          </MainItemCard>
        </Col>
        <Col span={12}>
          <MainItemCard
            variant={variant1 ? variant1 : 1}
            fullHeight
            className="securityItem"
          >
            <div className="securityItemIcon">
              <CheckIcon />
            </div>
            <p>
              Confirm your email{" "}
              <span style={{ visibility: "hidden" }}>hello </span>
            </p>
          </MainItemCard>
        </Col>
      </Row>
    </div>
  );
};

export default EnhanceSecurityCard;
