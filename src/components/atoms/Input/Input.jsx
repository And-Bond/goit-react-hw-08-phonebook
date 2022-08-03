import React from "react";
import proptypes from "prop-types"
import styled from "styled-components";

const ControlledInput = ( {type, name, onChange, value, title, pattern} ) => {
    return <StyledInput  onChange={onChange} type={type} name={name} value={value} title={title} pattern={pattern}></StyledInput>
}

const StyledInput = styled.input`
    width: 200px;
    height: 25px;
`
ControlledInput.propTypes = {
    type: proptypes.string,
    name: proptypes.string,
    onChange: proptypes.func
}
export default ControlledInput