import React from 'react';
import OrderItem from "./OrderItem";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {useSelector} from "react-redux";

const OrderList = ({selectOrder, setIsModalVisible}) => {
    const orders = useSelector(state => state.order.orders)

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{backgroundColor: "#e3e3e3", borderBottom: "2px solid #333"}}>
                            <TableCell>Order number</TableCell>
                            <TableCell align="left">Deliver date</TableCell>
                            <TableCell align="left">Customer</TableCell>
                            <TableCell align="left">Tracking number</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Consignee</TableCell>
                            <TableCell align="left"/>
                            <TableCell align="left"/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <OrderItem key={order.orderNo} order={order} setIsModalVisible={setIsModalVisible} selectOrder={selectOrder}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default OrderList;
