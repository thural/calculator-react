import { StyledBox } from "./CalcBodyStyled"

const Wrapper = ({ children }) => {
  return (
    <StyledBox className="calcBody">{children}</StyledBox>
  )
}

export default Wrapper