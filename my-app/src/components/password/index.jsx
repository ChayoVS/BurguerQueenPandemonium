import React from 'react';
import "./style.css";
import TextField from '@material-ui/core/TextField';

const PasswordInput = ({labelText}) => {
    return (
    <TextField id="outlined-password-input" label={labelText} type="password" autoComplete="current-password" margin="normal" variant="outlined" className="password-input"/>
    )
}

export default PasswordInput;