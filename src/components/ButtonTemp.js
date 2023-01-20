import Button from "react-bootstrap/Button";

function ButtonTemp(props) {
  return props.type === "outline" ? (
    <Button className="bg-transparent border-solid border-2 p-[10px] rounded border-[#005876] text-[#005876] font-semibold w-full md:w-[255px] h-[56px]">
      LEARN MORE
    </Button>
  ) : (
    <Button className="bg-[#FF5100] border-solid border-2 p-[10px] rounded border-[#FF5100] text-[#ffffff] font-semibold w-full md:w-[255px] h-[56px]">
      LEARN MORE
    </Button>
  );
}

export default ButtonTemp;
