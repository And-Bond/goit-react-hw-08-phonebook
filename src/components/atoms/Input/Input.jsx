import React from "react";
import proptypes from "prop-types"
import styled from "styled-components";

const ControlledInput = ( {type, name, onChange, value} ) => {
    return <StyledInput onChange={onChange} type={type} name={name} value={value}></StyledInput>
}

const StyledInput = styled.input`
    
`
ControlledInput.propTypes = {
    type: proptypes.string,
    name: proptypes.string,
    onChange: proptypes.func
}
export default ControlledInput