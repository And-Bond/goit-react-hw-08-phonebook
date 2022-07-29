import React from "react";
import proptypes from "prop-types"
import styled from "styled-components";

const Button = ( {type, btnText, onClick} ) => {
    return <StyledButton type={type}>{btnText}</StyledButton>
}

const StyledButton = styled.button`
    
`
Button.propTypes = {
    type: proptypes.string,
    btnText: proptypes.string,
    onClick: proptypes.func
}
export default Button