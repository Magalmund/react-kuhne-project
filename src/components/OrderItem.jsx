import React from 'react';
import ButtonCustom from "./UI/button/ButtonCustom";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useDispatch} from "react-redux";
import {removeOrderAction} from "../redux/actions/orderAction";

const OrderItem = ({order, setIsModalVisible, selectOrder}) => {
    const dispatch = useDispatch()

    const onSelectOrderBtnClick = () => {
        setIsModalVisible(true);
        selectOrder(order);
    }

    const onRemoveBtnClick = () => {
        dispatch(removeOrderAction(order))
    }

    return (
        <TableRow>
                <TableCell>{order.orderNo}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.trackingNo}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.consignee}</TableCell>
            <TableCell>
                <ButtonCustom variant="contained" startIcon={<EditIcon />} onClick={onSelectOrderBtnClick}>
                    Details
                </ButtonCustom>
            </TableCell>
            <TableCell>
                <ButtonCustom variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={onRemoveBtnClick}>
                    Remove
                </ButtonCustom>
            </TableCell>
        </TableRow>
    );
};

export default OrderItem;
