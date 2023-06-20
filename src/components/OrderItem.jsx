import React from 'react';
import ButtonCustom from "./UI/button/ButtonCustom";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const OrderItem = (props) => {
    const detailButton = () => {
        props.detail(true);
        props.detailOrder(props.order);
    }

    return (
        <TableRow>
                <TableCell>Order number: {props.order.orderNo}</TableCell>
                <TableCell>Delivery date: {props.order.date}</TableCell>
                <TableCell>Customer: {props.order.customer}</TableCell>
                <TableCell>Tracking number: {props.order.trackingNo}</TableCell>
                <TableCell>Status: {props.order.status}</TableCell>
                <TableCell>Consignee: {props.order.consignee}</TableCell>
            <TableCell>
                <ButtonCustom variant="contained" startIcon={<EditIcon />} onClick={detailButton}>
                    Details
                </ButtonCustom>
            </TableCell>
            <TableCell>
                <ButtonCustom variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={() => props.remove(props.order)}>
                    Remove
                </ButtonCustom>
            </TableCell>
        </TableRow>
    );
};

export default OrderItem;
