import React from 'react';
import {TextField} from "@mui/material";

const InputCustom =  React.forwardRef((props, ref) => {
    return (
        <TextField id="outlined-basic" variant="outlined" {...props} ref={ref} />
    );
});

export default InputCustom;
