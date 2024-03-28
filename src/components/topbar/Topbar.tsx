import { CSSProperties } from "react";
import {
  CaretDownIcon,
  DropUpIcon,
  ProfileIcon,
  WalletIcon,
} from "../../assets/icons";
import { RightDrawerContent } from "../../pages/private/platform/types";
import "./topbar.scss";

interface TopbarProps {
  isDrawerOpen: boolean;
  setIsRightDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRightDrawerContent: React.Dispatch<
    React.SetStateAction<RightDrawerContent>
  >;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentDrawer: React.Dispatch<
    React.SetStateAction<
      "trades" | "market" | "events" | "help" | "assets" | null | any
    >
  >;
  currentDrawer:
    | "trades"
    | "market"
    | "events"
    | "help"
    | "assets"
    | null
    | any;
  style?: CSSProperties;
}

const Topbar: React.FunctionComponent<TopbarProps> = ({
  isDrawerOpen,
  setIsRightDrawerOpen,
  setIsRightDrawerContent,
  setIsDrawerOpen,
  setCurrentDrawer,
  currentDrawer,
  style,
}) => {
  return (
    <div className="topbarContainer" id="topbarContainer" style={style}>
      <div
        className="conversionTab"
        onClick={() => {
          setIsDrawerOpen(
            isDrawerOpen && currentDrawer === "assets" ? false : true
          );
          setCurrentDrawer("assets");
        }}
      >
        <div className="convImg">
          <img
            src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1703146258/conv_e2znxe.png"
            alt="conv"
          />
        </div>
        <div className="convDetails">
          <div className="topConv">
            <span className="currency">EUR/USD</span>
            <span>OTC</span>
            <span className="percent">82%</span>
          </div>
        </div>
      </div>
      <div className="payProfileTab">
        <div
          className="demo"
          onClick={() => {
            setIsRightDrawerOpen(true);
            setIsRightDrawerContent("account");
          }}
        >
          <span className="dem">Demo Account</span>
          <div className="amount">
            <p className="value">Đ9.996.90</p>
            <CaretDownIcon />
          </div>
        </div>
        <button
          onClick={() => {
            setIsRightDrawerOpen(true);
            setIsRightDrawerContent("payments");
          }}
          className="payments"
        >
          Payments
        </button>
        <div className="profileButtons">
          <button
            className="dropup-icon"
            onClick={() => {
              setIsRightDrawerOpen(true);
              setIsRightDrawerContent("profile");
            }}
          >
            <DropUpIcon />
          </button>
          <button
            className="profile"
            onClick={() => {
              setIsRightDrawerOpen(true);
              setIsRightDrawerContent("profile");
            }}
          >
            <ProfileIcon />
          </button>
        </div>
      </div>

      <div className="payProfileTab payProfileTabMobile">
        <div className="profileButtons">
          <button
            className="profile"
            onClick={() => {
              setIsRightDrawerOpen(true);
              setIsRightDrawerContent("profile");
            }}
          >
            <ProfileIcon />
          </button>
        </div>
        <div
          className="demo"
          onClick={() => {
            setIsRightDrawerOpen(true);
            setIsRightDrawerContent("account");
          }}
        >
          <span className="dem">Demo Account</span>
          <div className="amount">
            <p className="value">Đ9.996.90</p>
            <CaretDownIcon />
          </div>
        </div>
        <button
          onClick={() => {
            setIsRightDrawerOpen(true);
            setIsRightDrawerContent("payments");
          }}
          className="profile"
        >
          <WalletIcon />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
