import React, {useEffect, useState} from 'react';
import './styles/App.css';
import OrderList from "./components/OrderList";
import Loader from "./components/UI/loader/Loader";
import {useFetching} from "./hooks/useFetching";
import ModalCustom from "./components/UI/modal/ModalCustom";
import {useDispatch} from "react-redux";
import {getAllOrdersAction} from "./redux/actions/orderAction";

function App() {
    const dispatch = useDispatch()
    const [selectedOrder, setSelectedOrder] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [fetchOrders, isOrdersLoading, orderError] = useFetching(async () => {
        dispatch(getAllOrdersAction())
    })

    useEffect(() => {
        fetchOrders()
    }, [])

    return (
        <div className="App">
            <ModalCustom title='Shipment details' order={selectedOrder} setOrder={setSelectedOrder}
                         visible={isModalVisible} setVisible={setIsModalVisible}/>
            {orderError &&
                <h1>Some error has occurred ${orderError}</h1>
            }
            {isOrdersLoading
                ? <Loader/>
                : <OrderList setIsModalVisible={setIsModalVisible} selectOrder={setSelectedOrder}
                             title="Shipments list"/>
            }

        </div>
    );
}

export default App;
