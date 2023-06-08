import { useContext } from "react"
import { CalcContext } from "../../context/CalcContext"
import { StyledBox } from "./ScreenStyled";

const Screen = () => {
    const { calc } = useContext(CalcContext);

    return (
        <StyledBox className="screen">
            <div id="temporal" className="screen" >{calc.num ? calc.num : calc.res}</div>
            <div id="current"></div>
        </StyledBox>
    )
}

export default Screen