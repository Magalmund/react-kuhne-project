import React, {useEffect, useState} from 'react';
import classes from './ModalCustom.module.css'
import InputCustom from "../input/InputCustom";
import ButtonCustom from "../button/ButtonCustom";
import { useForm } from "react-hook-form";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

const ModalCustom = ({title, visible, setVisible, order, setOrder, editOrder}) => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: order
    });

    useEffect(() => {
        reset(order);
    },[order])

    const rootClasses = [classes.modalCustom]

    if (visible) {
        rootClasses.push(classes.active);
    }

    const [isEditActive, setIsEditActive] = useState(true);

    const editButton = () => {
        setIsEditActive(false);
    }

    const saveButton = (order) => {
        setIsEditActive(true);
        editOrder(order)
        console.log(order)
    }

    const handleClickOpen = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };


    return (
        // <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
        //     <div className={classes.modalCustomContent} onClick={(e) => e.stopPropagation()}>
        //         <h1>{title}</h1>
        //         <form onSubmit={handleSubmit(saveButton)}>
        //             <InputCustom label="Order number" disabled {...register("orderNo")}/>
        //             <InputCustom label="Date" disabled={isEditActive} {...register("date")}/>
        //             <InputCustom label="Customer" disabled={isEditActive} {...register("customer")}/>
        //             <InputCustom label="Tracking number" disabled={isEditActive} {...register("trackingNo")}/>
        //             <InputCustom label="Status" disabled={isEditActive} {...register("status")}/>
        //             <InputCustom label="Consignee" disabled={isEditActive} {...register("consignee")}/>
        //             <ButtonCustom type="button" style={{marginRight:10}} onClick={editButton}>Edit</ButtonCustom>
        //             <ButtonCustom type="submit">Save</ButtonCustom>
        //         </form>
        //     </div>
        // </div>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Shipment details"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <ButtonCustom onClick={handleClose}>Disagree</ButtonCustom>
                <ButtonCustom onClick={handleClose} autoFocus>
                    Agree
                </ButtonCustom>
            </DialogActions>
        </Dialog>
    );
};

export default ModalCustom;
