import ButtonTemp from "./ButtonTemp";
import Card from "react-bootstrap/Card";
import icon from "../assets/img/icon.png";

function CardTemp(props) {
  return (
    <Card className="w-full shadow-gray-200 shadow-[1px_1px_2px_2px_rgba(0.5,0.5,0.5,0.5)] text-left p-4 flex flex-wrap gap-4">
      <img className="w-[60px] h-[60px]" src={icon} alt="icon"></img>
      <h4 className="w-full text-[22px] font-semibold  ">
        Direct Energy ${props.price}-Surge protect
      </h4>
      <p className="w-full text-[16px] text-[#38454a]">
        • No service call fee, no long term contract, no pre-inspection required
        <br></br>• Up to $1000 in annual coverage<br></br>• Low monthly fee,
        convieniently added right to your Direct Energy bill
      </p>
      <p className="font-light w-full">
        <span className="text-3xl">$</span>
        <span className="text-[45px]">{props.currency}</span>
        <span className="text-[25px]">/mo</span>
      </p>
      <ButtonTemp type="orange">LEARN MORE</ButtonTemp>
    </Card>
  );
}

export default CardTemp;
