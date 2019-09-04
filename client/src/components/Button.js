import React from 'react';
import ButtonUI from '@material-ui/core/Button';

function Button(props) {
    return (
        <ButtonUI variant="outlined" className={props.buttonClass} onClick={props.buttonAction}>
        {props.buttonName}
      </ButtonUI>
    )
}

export default Button;