import React from 'react';
import classes from './Loader.module.css'
import {InfinitySpin} from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className={classes.canvas}>
            <InfinitySpin
                width='200'
                color="#1976d2"
            />
        </div>
    );
};

export default Loader;
