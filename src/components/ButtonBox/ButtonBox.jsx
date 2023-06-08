import { StyledGrid } from './ButtonBoxStyled'

const ButtonBox = ({ children }) => {
    return (

        <StyledGrid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="buttonBox"
        >
            {children}
        </StyledGrid>

    )
}

export default ButtonBox