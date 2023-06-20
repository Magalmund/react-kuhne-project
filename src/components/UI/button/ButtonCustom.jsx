import React from 'react';
import {Button} from "@mui/material";

const ButtonCustom = ({children, ...props}) => {
    return (
        <Button {...props}>
            {children}
        </Button>
    );
};

export default ButtonCustom;
