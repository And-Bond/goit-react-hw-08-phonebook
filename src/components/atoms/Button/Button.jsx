import React from "react";
import proptypes from "prop-types"
import styled from "styled-components";

const Button = ( {type, btnText, onClick, onSubmit} ) => {
    return <StyledButton onSubmit={onSubmit} type={type}>{btnText}</StyledButton>
}

const StyledButton = styled.button`
    width: 100px;
    height: 25px;
`
Button.propTypes = {
    type: proptypes.string,
    btnText: proptypes.string,
    onClick: proptypes.func
}
export default Button