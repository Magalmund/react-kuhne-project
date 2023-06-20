import React, {useEffect, useState} from 'react';
import './styles/App.css';
import OrderList from "./components/OrderList";
import OrderService from "./API/OrderService";
import Loader from "./components/UI/loader/Loader";
import {useFetching} from "./hooks/useFetching";
import ModalCustom from "./components/UI/modal/ModalCustom";

function App() {

    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState({});
    const [modal, setModal] = useState(false);
    const [fetchOrders, isOrdersLoading, orderError] = useFetching(async () => {
        const orders = await OrderService.getAll();
        setOrders(orders);
    })

    useEffect(() => {
        fetchOrders()
    }, [])

    const detailOrder = (order) => {
        setOrder(order)
    }

    const removeOrder = (order) => {
        setOrders(orders.filter(o => o.orderNo !== order.orderNo));
    }

    const editOrder = (newOrder) => {
        setOrders(prevOrder => {
            return prevOrder.map((order) => {
                if (order.orderNo === newOrder.orderNo) {
                    return newOrder;
                }
                return order
            })
        })
    }


    return (
        <div className="App">
            <ModalCustom title='Shipment details' order={order} setOrder={setOrder} visible={modal} setVisible={setModal} editOrder={editOrder}/>
            {orderError &&
                <h1>Some error has occurred ${orderError}</h1>
            }
            {isOrdersLoading
                ? <Loader/>
                : <OrderList detail={setModal} detailOrder={detailOrder} remove={removeOrder} orders={orders} title="Shipments list"/>
            }

        </div>
    );
}

export default App;
