import React from 'react';
import OrderItem from "./OrderItem";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

const OrderList = ({orders, detailOrder, title, detail, remove}) => {
    return (
        <div>
            {/*<h1 style={{textAlign: 'center'}}>*/}
            {/*    {title}*/}
            {/*</h1>*/}
            {/*{orders.map(order =>*/}
            {/*    <OrderItem key={order.orderNo} order={order} detail={detail} detailOrder={detailOrder} remove={remove}/>*/}
            {/*)}*/}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Order number</TableCell>
                            <TableCell align="start">Deliver date</TableCell>
                            <TableCell align="start">Customer</TableCell>
                            <TableCell align="start">Tracking number</TableCell>
                            <TableCell align="start">Status</TableCell>
                            <TableCell align="start">Consignee</TableCell>
                            <TableCell align="start"></TableCell>
                            <TableCell align="start"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <OrderItem key={order.orderNo} order={order} detail={detail} detailOrder={detailOrder} remove={remove}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default OrderList;
