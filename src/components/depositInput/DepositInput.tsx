import "./DepositInput.scss";

const DepositInput = ({
  CardsIconList,
  placeholder,
  classname,
  placeholderColor,
  marginTop,
  type,
}: // border,
{
  CardsIconList?: React.ReactNode[] | any;
  placeholder: string;
  classname?: string;
  placeholderColor?: boolean;
  marginTop?: boolean;
  type?: string;
  border?: boolean;
}) => {
  return (
    <div
      className={`deposit-Input-Wrapper ${
        marginTop ? "marginTop" : "marginTop2"
      } ${classname}`}
    >
      <input
        className={`deposit-input ${
          placeholderColor ? "placeholderColor" : "placeholderColor2"
        }`}
        type={type ? type : "text"}
        placeholder={placeholder}
      />
      {CardsIconList &&
        CardsIconList.map((card: any, index: number) => (
          <div key={index} className="credit-cards">
            {card.icon}
          </div>
        ))}
    </div>
  );
};

export default DepositInput;
