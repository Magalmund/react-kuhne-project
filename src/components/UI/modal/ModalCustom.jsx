import React, {useEffect, useState} from 'react';
import classes from './ModalCustom.module.css'
import InputCustom from "../input/InputCustom";
import ButtonCustom from "../button/ButtonCustom";
import {useForm} from "react-hook-form";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useDispatch} from "react-redux";
import {editOrderAction} from "../../../redux/actions/orderAction";

const ModalCustom = ({visible, setVisible, order}) => {
    const dispatch = useDispatch()
    const [isEditActive, setIsEditActive] = useState(true);
    const {register, handleSubmit, reset} = useForm({
        defaultValues: order
    });

    useEffect(() => {
        reset(order);
    }, [order])

    const editButton = () => {
        setIsEditActive(false);
    }

    const saveButton = (order) => {
        setIsEditActive(true);
        dispatch(editOrderAction(order))
        setVisible(false);
    }
    const handleClose = () => setVisible(false);

    return (
        <Modal
            open={visible}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
        >
            <Box className={classes.modalCustom}>
                <Typography id="modal-modal-title" className={classes.modalField} variant="h6" component="h2" >
                    Shipment details
                </Typography>
                <form onSubmit={handleSubmit(saveButton)}>
                    <InputCustom className={classes.modalField} label="Order number" disabled {...register("orderNo")}/>
                    <InputCustom className={classes.modalField} label="Date" disabled={isEditActive} {...register("date")}/>
                    <InputCustom className={classes.modalField} label="Customer" disabled={isEditActive} {...register("customer")}/>
                    <InputCustom className={classes.modalField} label="Tracking number" disabled={isEditActive} {...register("trackingNo")}/>
                    <InputCustom className={classes.modalField} label="Status" disabled={isEditActive} {...register("status")}/>
                    <InputCustom className={classes.modalField} label="Consignee" disabled={isEditActive} {...register("consignee")}/>
                    <ButtonCustom type="button" style={{marginRight: 10}} onClick={editButton}>Edit</ButtonCustom>
                    <ButtonCustom type="submit">Save</ButtonCustom>
                </form>
            </Box>
        </Modal>
    );
};

export default ModalCustom;
